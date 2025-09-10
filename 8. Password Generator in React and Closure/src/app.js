import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [checkedNumber, setCheckedNumber] = useState(false);
  const [checkedSpChar, setCheckedSpChar] = useState(false);

  function generatePassword() {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (checkedNumber) str += "0123456789";
    if (checkedSpChar) str += "!#$%&()*+,-./:;<=>?@[]^_{|}~";

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(newPassword);
  }

  useEffect(() => {
    generatePassword();
  }, [length, checkedNumber, checkedSpChar]);

  return (
    <>
      <h1>{password}</h1>
      <div className="input-container">
        <span>
          <input
            type="range"
            min={8}
            max={30}
            id="changeLength"
            onChange={(e) => setLength(e.target.value)}
            value={length}
          />
          <label htmlFor="changeLength">Length({length})</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="number"
            defaultChecked={checkedNumber}
            onChange={() => setCheckedNumber(!checkedNumber)}
          />
          <label htmlFor="number">Number</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="specialCharacter"
            defaultChecked={checkedSpChar}
            onChange={() => setCheckedSpChar(!checkedSpChar)}
          />
          <label htmlFor="specialCharacter">Special Character</label>
        </span>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <PasswordGenerator />
);
