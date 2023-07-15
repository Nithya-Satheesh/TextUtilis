import React, { useState } from "react";
import copy from "copy-to-clipboard";

export default function (props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    //console.log('Uppercase was clicked'+text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCrClick = () => {
    setText("");
  };
  const handleCcClick = () => {
    copy(text);
    alert(`You have copied "${text}"`);
  };
  const handleReClick = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <h4>{props.subheading}</h4>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'#000080':'white',color:props.mode==='dark'?'white':'#042743'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleCrClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCcClick}>
          Copy to Clipboard
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReClick}>
          Remove extra spaces
        </button>
      </div>
      <div className="container my-4">
        <h4>Your text summary</h4>
        <p>Number of words : {text.split(" ").length}</p>
        <p>Number of characters : {text.length}</p>
        <p>Reading time in seconds: {0.48 * text.split(" ").length}</p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
