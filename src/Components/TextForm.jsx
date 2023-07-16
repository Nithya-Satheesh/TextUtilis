import React, { useState } from "react";
import copy from "copy-to-clipboard";

export default function (props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    //console.log('Uppercase was clicked'+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleCrClick = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };
  const handleCcClick = () => {
    copy(text);
    props.showAlert("Copied to Clipboard", "success");
  };
  const handleReClick = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Removed extra spaces", "success");
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  return (
    <>
      <div className="container my-3">
        <h1 className="mb-4" style={{textAlign:'center'}}>{props.heading}</h1>
        
        <div className="mb-4">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-2" onClick={handleCrClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCcClick}>
          Copy to Clipboard
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleReClick}>
          Remove extra spaces
        </button>
      </div>
      <div className="container my-4">
        <h4>Your text summary</h4>
        <p>
          Number of words :{" "}
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}
        </p>
        <p>Number of characters : {text.trim() === "" ? 0: text.length}</p>
        <p>
          Reading time in seconds:{" "}
          {text.trim() === "" ? 0 : 0.48 * text.trim().split(/\s+/).length}
        </p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
