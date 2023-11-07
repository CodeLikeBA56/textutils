import React, {useState} from 'react';
import Navbar from './Navbar';
import "./TextFrom-Style.css";


function countWords(inputString) {
    inputString = inputString.trim();
    const words = inputString.split(" ");
    const nonEmptyWords = words.filter((word) => word !== '');
    return nonEmptyWords.length;
}

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case.", "success", 1500);
    };
    
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case.", "success", 1500);
    };

    const handleClearText = () => {
        setText("");
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    };

    const handleNTClick = () => {
        const sentences = text.split(". ");
        const normalizedSentences = sentences.map((sentence) => {
            return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
        });
    
        setText(normalizedSentences.join(". "));
    };
    
    const handleCopiedText = () => {
        if (text.trim() === "") {
            props.showAlert("There's nothing to copy. Please enter some text first.", "warning", 3000);
        }else{
            let textarea = document.getElementsByTagName("textarea")[0];
            textarea.select();
            navigator.clipboard.writeText(textarea.value).then(() => {
                props.showAlert("Copied to clipboard!", "success", 1500);
            }).catch(() => {
                props.showAlert("Failed to copy to clipboard. Please try again.", "danger", 3000);
            });
        }
    };

    return (
        <div className='Container' style={Navbar.myStyle}>
            <h1>Enter Your Text to Analyze</h1>
            <textarea className={`textArea textArea-${props.mode === 'dark' ? 'dark' : 'textUnderlinePosition: '}`} value={text} onChange={handleOnChange} placeholder='Enter Text Here!'></textarea>
            <div className='item'>
                <button className={`Btn Btn-${props.mode === 'light' ? 'light' : 'dark'}`} onClick={handleUpClick}>Upper Case</button>
                <button className={`Btn Btn-${props.mode === 'light' ? 'light' : 'dark'}`} onClick={handleLoClick}>Lower Case</button>
                <button className={`Btn Btn-${props.mode === 'light' ? 'light' : 'dark'}`} onClick={handleNTClick}>Normalize Text</button>
                <button className={`Btn Btn-${props.mode === 'light' ? 'light' : 'dark'}`} onClick={handleClearText}>Clear Text</button>
                <button className={`Btn Btn-${props.mode === 'light' ? 'light' : 'dark'}`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className={`Btn Btn-${props.mode === 'light' ? 'light' : 'dark'}`} onClick={handleCopiedText}>Copied To Clipboard</button>
            </div>
            <div className='item-2'>
                <h2>Text Summary</h2>
                <p>{countWords(text)} words and {text.length} characters</p>
            </div>
        </div>
  )
}
