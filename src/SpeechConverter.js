// import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import './App.css';
import React, { useState } from 'react';
import useClipboard from "react-use-clipboard";

export const SpeechConverter = () => {
    const [textToCopy, SetTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy);
    const [selectedLanguage, setSelectedLanguage] = useState('en-US');

    const startListening = () => {
        SpeechRecognition.startListening({ continuous: true, language: selectedLanguage });
        resetTranscript(); // Clear previous transcript when switching languages
    };
    const stopListening = () => {
        SpeechRecognition.stopListening();
    };
    // const {reset,  } = useSpeechRecognition()
    // const startListening = ()=> SpeechRecognition.startListening({ continuous: true, language: 'hi-IN' });
    const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();
    if (!browserSupportsSpeechRecognition) {
        return null
    }


    return (
        <div className="container">
            <h2>Speech to Text Converter</h2><br />
            <p>A React hook that converts speech from the microphone to text and makes it available to your React
                components.</p>

            <div className="language-dropdown">
                <label>Select Language: </label>
                <select
                    value={selectedLanguage}
                    onChange={(e) => {
                        setSelectedLanguage(e.target.value);
                        stopListening(); // Stop listening when switching languages
                    }}
                >
                    <option value="en-US">English</option>
                    <option value="hi-IN">Hindi</option>
                    <option value="zh-CN">Chinese</option>
                    <option value="es-ES">Spanish</option>
                    <option value="fr-FR">French</option>
                    <option value="de-DE">German</option>
                    <option value="it-IT">Italian</option>
                    <option value="ja-JP">Japanese</option>
                    <option value="ko-KR">Korean</option>
                    <option value="la">Latin</option>
                    <option value="zh-CN">Mandarin Chinese</option>
                    <option value="zh-TW">Taiwanese</option>
                    <option value="zh-HK">Cantonese</option>
                    <option value="ms-MY">Malaysian</option>
                    <option value="no-NO">Norwegian</option>
                    <option value="pl">Polish</option>
                    <option value="xx-piglatin">Pig Latin</option>
                    <option value="pt-PT">Portuguese</option>
                    <option value="pt-br">Portuguese (Brasil)</option>
                    <option value="ro-RO">Romanian</option>
                    <option value="ru">Russian</option>
                    <option value="sr-SP">Serbian</option>
                    <option value="sk">Slovak</option>
                    <option value="es-AR">Spanish (Argentina)</option>
                    <option value="es-BO">Spanish (Bolivia)</option>
                    <option value="es-CL">Spanish (Chile)</option>
                    <option value="es-CO">Spanish (Colombia)</option>
                    <option value="es-CR">Spanish (Costa Rica)</option>
                    <option value="es-DO">Spanish (Dominican Republic)</option>
                    <option value="es-EC">Spanish (Ecuador)</option>
                    <option value="es-SV">Spanish (El Salvador)</option>
                    <option value="es-GT">Spanish (Guatemala)</option>
                    <option value="es-HN">Spanish (Honduras)</option>
                    <option value="es-MX">Spanish (Mexico)</option>
                    <option value="es-NI">Spanish (Nicaragua)</option>
                    <option value="es-PA">Spanish (Panama)</option>
                    <option value="es-PY">Spanish (Paraguay)</option>
                    <option value="es-PE">Spanish (Peru)</option>
                    <option value="es-PR">Spanish (Puerto Rico)</option>
                    <option value="es-ES">Spanish (Spain)</option>
                    <option value="es-US">Spanish (US)</option>
                    <option value="es-UY">Spanish (Uruguay)</option>
                    <option value="es-VE">Spanish (Venezuela)</option>
                    <option value="sv-SE">Swedish</option>
                    <option value="tr">Turkish</option>
                    <option value="zu">Zulu</option>
                </select>
            </div>

            <div className="main-content" onMouseOver={() => SetTextToCopy(transcript)}>
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
