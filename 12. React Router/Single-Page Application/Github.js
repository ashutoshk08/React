import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function Github() {
  const [profile, setProfile] = useState({});
  const { username } = useParams();

  async function fetchUser() {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    setProfile(data);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="userProfile" key={profile?.id}>
      <img src={profile?.avatar_url} />
      <div className="userProfileInfo">
        <h2>{profile?.name}</h2>
        <h3>{profile?.login}</h3>
        <p id="profile-bio">{profile?.bio}</p>
        <p>{profile?.location}</p>
      </div>
    </div>
  );
}
