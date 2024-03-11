import Crawl from "@liorpo/react-star-wars-crawl"
import '@fortawesome/fontawesome-free/css/all.css';
import { PlayButton } from "../components/Buttons/PlayButton";
import '../styles/IntroApp.scss';
import { SkipButton } from "../components/Buttons/SkipButton";

const IntroApp: React.FC<IntroAppProps> = ({ skipIntro }) => {
  return (
    <div className="intro-container">
      <Crawl
        containerStyles={{
          height: "100vh",
          width: "100vw"
        }}
        title="Project I"
        subTitle="SWAPI"
        text='In this new period of internship. A new digital cosmos emerges, bringing to life the fascinating universe of Star Wars like never before. This web application retrieves vital intel on 20 unique characters and 20 legendary starships from the vast archives of the SWAPI. This mission is expertly piloted by react-query, which commands the apps data flow and cache like a master Jedi, ensuring that every piece of information is delivered with the speed and grace of a lightsaber strike.
For communication with the distant SWAPI galaxies, Axios is deployed, a promise-based hyperdrive for API calls, offering a robust and agile conduit through the digital starscapeThis seamless integration ensures that every fan can explore the Star Wars universe with the ease of a droids well-oiled mechanisms'
      />
      <SkipButton skipIntro={skipIntro} />
      <PlayButton />
    </div>

  );
};

export default IntroApp;