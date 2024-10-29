import React, { useState } from "react";

export default function TextForm(props) {
  const upCase = () => {
    // console.log("text" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase ! ","success");
  };
  const clearText = () => {
    let clear = "";
    setText(clear);
    props.showAlert("Clear text ! ","success");
  };
  const lowCase = () => {
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
    props.showAlert("Converted to lowercase ! ","success");
  };
  const copyText = () => {
    let copytext = document.getElementById("myBox");
    copytext.select();
    navigator.clipboard.writeText(copytext.value);
    props.showAlert("Copy to clipboard ! ","success");
  };
  const onchangeText = (e) => {
    // console.log("setText");
    setText(e.target.value);
  };
  const toggleItalic = () => {
    setIsItalic((prev) => !prev);
    props.showAlert("Converted to italic-font ! ","success");
  };
  const clearExtra = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed ! ","success");

  };
  const [text, setText] = useState("");
  const [isItalic, setIsItalic] = useState(false);
  // text ="new test";//wronge way to change the state
  // setText("new text");//Correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
            value={text}
            onChange={onchangeText}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-dark mx-2" onClick={upCase}>
          Convert to UperCase
        </button>
        <button className="btn btn-dark mx-2" onClick={lowCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-dark mx-2" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-dark mx-2" onClick={toggleItalic}>
          {isItalic ? "Remove Italic" : "Convert to Italic Font"}
        </button>
        <button className="btn btn-dark mx-2" id="myBox" onClick={copyText}>
          Copy Text
        </button>
        <button className="btn btn-dark mx-2" onClick={clearExtra}>
          Extra Space Set
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1> Your text Summary</h1>
        {/* <p>
          {text.split(" ").length} words and {text.length} characters
        </p> */} 
        <p>
          {text.trim() === "" 
            ? "0 words and 0 characters" 
            : `${text.split(" ").length} words and ${text.length} characters`}
        </p> 
         {/* solve the debug */}

        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p id ="itelicdata" style={{ fontStyle: isItalic ? "italic" : "normal" }}>
          {text.length > 0
            ? text
            : "Enter somthing in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
