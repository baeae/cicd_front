import React from "react";
import "./LabelText.css";
import { useState } from "react";

function LabelText({ text, name, value: initalValue }) {
  const [value, setValue] = useState(initalValue || "");
  return (
    <div className="LabelText">
      <label className="label">{text}</label>
      <input
        className={`${value == "" ? "input" : "input_disabled"}`}
        type={`${name === "pwd" ? "password" : "text"}`}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default LabelText;
