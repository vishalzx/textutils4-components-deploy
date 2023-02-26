import React, { useState } from "react";
// import Alert from "./Alert";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  };
  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value); //This helps in changing text
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const [text, setText] = useState(""); //default state of text area
  // text="new text";    <- wrong way to change state
  // setText("new text"); <-correct way to change state
  return (
    <>
      <div className="container" style={{color: props.mode=='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/*In bootstrap 'mb', 'mx', 'my' is used to give padding */}
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{color:props.mode=='light'?'black':'white', backgroundColor: props.mode=='light'?'white':'grey'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" type="submit" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" type="submit" onClick={handleDownClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" type="submit" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-3" style={{color: props.mode=='light'?'black':'white'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters{" "}
        </p>
      </div>
      <div className="mx-3" style={{color: props.mode=='light'?'black':'white'}}>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the above box to preview it'}</p>
      </div>
    </>
  );
}
