import React, { useState } from 'react';
export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpCase = () => {
        setText(text.toUpperCase());
        console.log("Converted to Uppercase");
        props.showAlert("Converted to Uppercase", "success");
    };
    const handleLoCase = () => {
        setText(text.toLowerCase());
        console.log("Converted to Lowercase");
        props.showAlert("Converted to Lowercase", "success");

    };
    const handleNew = (event) => {
        setText(event.target.value);
    };
    const handleCopy = ()=>{
        let text = document.getElementById('box');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    };
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed", "success");
    }
    const clearText = () => {
        setText("");
    };
    const speakIt = () => {
        let voices = speechSynthesis.getVoices();
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.rate = 0.75;
        msg.volume = 1;
        msg.voice = voices[4];
        msg.lang = 'en';
        window.speechSynthesis.speak(msg);
    };
    const len = text.trim().split(" ").at(-1) === "" ? text.trim().split(" ").length - 1 : text.trim().split(" ").length; 
    return (
        <>
            <div className='container'>
                <h1>{props.title}</h1>
                <div className="mb-3" >
                    <textarea style={{backgroundColor:props.mode==="light"?"white":"#0d031f", color:props.mode==="light"?"black":"white"}} className="form-control" id="box" rows="8" value={text} onChange={handleNew}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpCase}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-1" onClick={handleLoCase}>Convert to Lower Case</button>
                <button className="btn btn-primary mx-1" onClick={clearText}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={speakIt}>Speak it</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy it</button>
            </div>
            <div className='container my-2'>
                <h2>Your text summary</h2>
                <p>{len} words and {text.length} characters</p>
                <p>Reading time: {0.008 * len} mintues</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}