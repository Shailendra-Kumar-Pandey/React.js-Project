import React,{useState} from 'react'

export default function TextForm(props) {
    const upCase=()=>{
        // console.log("text" + text);
        let newText = text.toUpperCase();
        setText(newText);
    };
    const clearText=()=>{
        let clear = "";
        setText(clear);
    };
    // const itelicFont =()=>{
    //     let itelic = <i>{text}</i>
    //     setText(itelic);
    // }
    const lowCase=()=>{
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
    };
    const copyText=()=>{
        let copytext = document.getElementById("myBox");
        copytext.select();
        navigator.clipboard.writeText(copytext.value);
    };
    const onchangeText=(e)=>{
        // console.log("setText");
        setText(e.target.value);
    };
    const toggleItalic = () => {
        setIsItalic(prev => !prev);
    };
    const clearExtra =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text, setText] = useState("Enter the text below");
    const [isItalic, setIsItalic] = useState(false);
    // text ="new test";//wronge way to change the state
    // setText("new text");//Correct way to change the state
    return (
    <>
        <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control" value={text} onChange={onchangeText} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-dark mx-2" onClick={upCase}>Convert to UperCase</button>
        <button className="btn btn-primary mx-2" onClick={lowCase}>Convert to LowerCase</button>
        <button className="btn btn-dark mx-2" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={toggleItalic}>
                    {isItalic ? "Remove Italic" : "Convert to Italic Font"}
                </button>
        <button className="btn btn-dark mx-2" id="myBox" onClick={copyText}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={clearExtra}>Extra Space Set</button>
        {/* <button className="btn btn-primary mx-2" onClick={itelicFont}>Convert to Itailic Font</button> */}

        </div>
        <div className="container my-3">
            <h1> Your text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p style={{ fontStyle: isItalic ? 'italic' : 'normal' }}>{text}</p>
            {/* <p>{text}</p> */}
        </div>
    </>
  )
}
