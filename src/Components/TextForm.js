
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = () =>{
        //console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Uppercase!" , "success")

    }
    const handleLoclick = () =>{
        //console.log("UpperCase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To LowerCase!" , "success")
    }
    const handlecLclick = () =>{
        //console.log("UpperCase was Clicked" + text);
        let newText = ("");
        setText(newText)
    }
    const handleOnChange =(event)=> {
        //console.log("On changed")
        setText(event.target.value);

    }
    const handleCopy =()=> {
        console.log("I am copy")
        var text= document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!" , "success")


    }
    const handleExtraSpace =()=> {
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove To extraspace!" , "success")
        }
 
    const [text, setText] = useState('');
    
  return (
    <>
    <div className="container" style= {{color:props.mode ==='dark' ?'white': 'black' }}>
        <h1>{props.heading} </h1>
        <div className="mb-3">

            <textarea className="form-control" value ={text} onChange ={handleOnChange } style= {{backgroundColor:props.mode ==='dark' ?'grey': 'white' ,  color:props.mode ==='dark' ?'white': 'black'}}id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1"  onClick={handleUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handlecLclick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container" my='3' style= {{color:props.mode ==='dark' ?'white': 'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} word and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>
            Text preview
        </h2>
        <p>{text.length >0?text:"Enter something in the textbox above to priview here"}</p>

    </div>


    </>
  )
}
