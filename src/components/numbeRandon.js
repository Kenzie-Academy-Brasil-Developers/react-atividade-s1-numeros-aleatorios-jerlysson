import { useState } from "react";
import "./btn.css";

function ShowNumber() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  function randomNumber() {
    setNumber(Math.floor(Math.random() * 100) + 1);
  }
  return (
    <div>
      <p>{number}</p>
      <button className="btn" onClick={randomNumber}>
        Gerar Numero!
      </button>
    </div>
  );
}

export default ShowNumber;
