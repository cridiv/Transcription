import React, { useState, useEffect, useContext } from "react";
import { SpeechContext } from "../context/SpeechContext";
import "../css/RecordBtn.scss";

function RecordBtn() {
  const [isListening, setIsListening] = useState(false);
  const { setSpeechText } = useContext(SpeechContext);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log("Recognized:", transcript);
        setSpeechText(transcript);
      };

      recognition.onend = () => setIsListening(false);

      recognition.onerror = (event) => console.error("Error:", event.error);

      window.recognitionInstance = recognition;
    } else {
      console.error("Speech recognition not supported in this browser.");
    }
  }, [setSpeechText]);

  const toggleListening = () => {
    if (window.recognitionInstance) {
      if (!isListening) {
        window.recognitionInstance.start();
      } else {
        window.recognitionInstance.stop();
      }
      setIsListening((prev) => !prev);
    }
  };

  return (
    <div className="cont">
      <div
        className={`speech-to-text ${isListening ? "listen" : ""}`}
        onClick={toggleListening}
      >
        <div className="border"></div>
        {isListening ? (
          <svg className="stop" height="40" width="40">
            <path d="m13 13h14v14h-14z" fill="#00c0ed" fillRule="evenodd" />
          </svg>
        ) : (
          <svg className="mic" height="40" width="40">
            <path
              d="m27.3945 15.8945c-.566 0-1.026.459-1.026 1.026v3.764c0 3.4-2.757 6.157-6.158 6.157s-6.158-2.757-6.158-6.157v-3.764c0-.567-.459-1.026-1.026-1.026s-1.027.459-1.027 1.026v3.764c.002 4.136 3.081 7.625 7.185 8.142v2.121h-2.737c-.567 0-1.027.46-1.027 1.026 0 .567.46 1.026 1.027 1.026h7.526c.567 0 1.026-.459 1.026-1.026 0-.566-.459-1.026-1.026-1.026h-2.736v-2.121c4.103-.517 7.181-4.006 7.183-8.142v-3.764c0-.567-.459-1.026-1.026-1.026m-7.184-8.895c2.267 0 4.105 1.838 4.105 4.106v9.579c0 2.267-1.838 4.105-4.105 4.105s-4.105-1.838-4.105-4.105v-9.579c0-2.268 1.838-4.106 4.105-4.106"
              fill="#00c0ed"
              fillRule="evenodd"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

export default RecordBtn;
