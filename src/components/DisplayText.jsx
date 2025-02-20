import React, { useContext } from "react";
import { SpeechContext } from "../context/SpeechContext";

function DisplayText() {
  const { speechText } = useContext(SpeechContext);

  return (
    <div>
      <p>{speechText}</p>
    </div>
  );
}

export default DisplayText;
