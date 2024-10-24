import React,{useState} from 'react'

export default function TextForm(props) {
    const upCase=()=>{
        console.log("text" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const onchangeText=(e)=>{
        console.log("setText");
        setText(e.target.value)
    }
    const [text, setText] = useState("Enter the text below");
    // text ="new test";//wronge way to change the state
    // setText("new text");//Correct way to change the state
    return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control" value={text} onChange={onchangeText} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={upCase}>Convert to UperCase</button>
    </div>
  )
}
