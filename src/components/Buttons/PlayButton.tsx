import { useState } from 'react';
import { useAudio } from '../AudioPLayer';
import '@fortawesome/fontawesome-free/css/all.css';
export const PlayButton = () => {
  const [isMuted, setIsMuted] = useState(true);

  const { togglePlayPause } = useAudio();
  const handleClick = () => {
    togglePlayPause();
    setIsMuted(!isMuted);
    // Here, you would also include the logic to actually mute/unmute the audio
  };
  return (
    <button onClick={handleClick} className="play-button">
      <i className={`fa ${isMuted ? 'fa-volume-off' : 'fa-volume-up'}`} aria-hidden="true"></i>
    </button>)
}
