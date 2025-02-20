import { createContext, useContext, useState } from "react";

const SpeechContext = createContext();

export const SpeechProvider = ({ children }) => {
  const [speechText, setSpeechText] = useState("");
  return (
    <SpeechContext.Provider value={{ speechText, setSpeechText }}>
      {children}
    </SpeechContext.Provider>
  );
};

export const useSpeech = () => {
  const context = useContext(SpeechContext);
  if (!context) {
    throw new Error("useSpeech must be used within a SpeechProvider");
  }
  return context;
};
