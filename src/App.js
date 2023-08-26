import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import './App.css';
import React, { useState } from 'react';
import useClipboard from "react-use-clipboard";
function App() {
  const [textToCopy, SetTextToCopy]=useState();
  const [isCopied, setCopied] = useClipboard(textToCopy);
  // const {reset,  } = useSpeechRecognition()
  const startListening = ()=> SpeechRecognition.startListening({ continuous: true, language: 'hi-IN' });
  const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null
  }
  
  
  return (
    <div className="container">
      <h2>Speech to Text Converter</h2><br />
      <p>A React hook that converts speech from the microphone to text and makes it available to your React
        components.</p>

      <div className="main-content" onMouseOver={()=> SetTextToCopy(transcript)}>
      {transcript}
      </div>
      <div className="btn-style">
        <button onClick={setCopied} >
       {isCopied ? "Copied" : "Copy To Clipbord"}</button>
        <button onClick={startListening}>Start Listening</button>
        <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
        <button onClick={resetTranscript}>Reset Text</button>

      </div>

    </div>
  );
}

export default App;
