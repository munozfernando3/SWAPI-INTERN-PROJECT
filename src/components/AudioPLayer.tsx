
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { ReactNode } from 'react';



interface AudioProviderProps {
  children: ReactNode;
}
const defaultAudioContext: AudioContextType = {
  isPlaying: false,
  togglePlayPause: () => {},
  stopAudio: () => {},
};
const AudioContext = createContext<AudioContextType>(defaultAudioContext);

export const useAudio = () => useContext(AudioContext);

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('/audio/main_theme.mp3'));
  const stopAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0; // Optionally reset the audio to the start
    setIsPlaying(false);
  };

  useEffect(() => {
    audioRef.current.volume = 0.5; // Set to 50% volume, adjust as needed
    audioRef.current.muted = false; // Ensure not muted
  }, []);
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const value = {
    isPlaying,
    togglePlayPause,
    stopAudio,
  };

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
};