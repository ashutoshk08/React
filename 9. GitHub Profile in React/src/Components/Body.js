import { useState, useEffect } from "react";
import Card from "./Card";

export default function Body() {
  const [profiles, setProfiles] = useState([]);
  const [numberOfProfiles, setNumberOfProfiles] = useState("");
  const [error, setError] = useState(null);
  const [name, setName] = useState("");

  async function fetchNumOfProfiles(count) {
    if (count === "") return;

    if (Number(count) === 0) {
      setProfiles([]);
    } else {
      try {
        const randomNo = Math.floor(Math.random() * 1000 + 1);
        const response = await fetch(
          `https://api.github.com/users?since=${randomNo}&per_page=${count}`,
          {
            headers: {
              Authorization: `Bearer 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`,
              Accept: "application/vnd.github+json",
            },
          }
        );

        if (!response.ok) {
          setProfiles([]);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        setError(null);
        const data = await response.json();
        setProfiles(data);
      } catch (err) {
        setError(err.message);
      }
    }
  }

  async function fetchProfileByName(name2) {
    if (name2 === "") return;

    try {
      const response = await fetch(
        `https://api.github.com/users/${name2.trim().split(" ").join("")}`,
        {
          headers: {
            Authorization: `Bearer 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`,
            Accept: "application/vnd.github+json",
          },
        }
      );

      if (!response.ok) {
        setProfiles([]);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setProfiles(Array.isArray(data) ? data : [data]);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    fetchNumOfProfiles("");
  }, []);

  return (
    <main className="main-container">
      <div className="search-container">
        <input
          type="number"
          id="input"
          autoComplete="off"
          placeholder="Enter the number of profiles"
          value={numberOfProfiles}
          onChange={(e) => setNumberOfProfiles(e.target.value)}
        />
        <button onClick={() => fetchNumOfProfiles(numberOfProfiles)}>
          Search
        </button>
      </div>
      <div className="search-container" style={{ marginBottom: "25px" }}>
        <input
          type="text"
          id="input"
          autoComplete="off"
          placeholder="Enter the profile name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => fetchProfileByName(name)}>Search</button>
      </div>

      {error && (
        <p
          style={{
            color: "red",
            fontSize: "30px",
            fontWeight: "600",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          ❌ Error: {error}
        </p>
      )}

      <div className="card-container">
        {profiles.map((value) => (
          <Card
            name={value.login}
            photo={value.avatar_url}
            link={value.html_url}
            key={value.id}
          />
        ))}
      </div>
    </main>
  );
}

// Try catch functionality add karo --> Done
// UseCallBack function add karne ki koshish --> Pending
// Search button: Name ke basis: User profile exist, display kara dena --> Done
