import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };
  const handleclrClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };
  const handleCopy = () => {
    // let text = document.getElementById("myBox");
    //  text.focus();
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!", "success");
  };
  const handleSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };
  // const handleUndoClick = () => {
  //   let newText = setText(newText);
  // };
  // const handleRedoClick = () => {
  //   let newText = text.toUpperCase();
  //   setText(newText);
  // };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode == "dark" ? "white" : "#181818" }}
      >
        <h4>{props.heading}</h4>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode == "dark" ? "#181818" : "white",
              color: props.mode == "dark" ? "white" : "#181818",
            }}
            id="myBox"
            rows="6"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Conver to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Conver to Lowercase
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpace}>
          Handle space
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclrClick}>
          ClearText
        </button>
        {/*<button className="btn btn-primary mx-1 my-1" onClick={handleUndoClick}>
          Undo
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleRedoClick}>
          Redo
          </button>*/}
      </div>

      <div
        className="container  my-3"
        style={{ color: props.mode == "dark" ? "white" : "#181818" }}
      >
        <h4>Your text summary</h4>
        <h6>
          <p>
            {text.replace(/(^\s*)|(\s*$)/gi, "").split(/\s+/).length} Words and{" "}
            {text.replace(/ /g, "").length} Characters
          </p>
        </h6>
        <h6>
          <p>
            {0.08 * text.split(" ").filter((element) => {
                return element.length !== 0}).length} Minutes read</p>
        </h6>
        <h4>preview</h4>
        <p>{text.length > 1 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
