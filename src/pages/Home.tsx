
import { useEffect } from 'react';
import { useAudio } from '../components/AudioPLayer';
import '../styles/App.scss'
import { StarWarsFigure } from '../components/HomePageComponents/StarWarsFigure';
import { playSound } from '../utilities/PlaySound';

const HomePage = () => {
  const { stopAudio } = useAudio();
  useEffect(() => {
    stopAudio();
  }, []);

  return (
    <div className="container">
      <div className="row align-items-center ">
        <StarWarsFigure playSound={playSound} onHoverSound='/audio/effect.mp3' onClickSound='audio/character-sound.mp3' link='/people' image="src/images/character.png" name="Characters" />
        <StarWarsFigure playSound={playSound} onHoverSound='/audio/effect.mp3' onClickSound='/audio/starship_sound.mp3' link='/starships' image="src/images/ship.png" name="Starships" />
      </div>
    </div>
  );
};

export default HomePage;