import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Starfield from './components/StartField';
import { ListPagePeople, ListPageShips } from './pages/ListPage';
import { PeopleDetailsPage, ShipsDetailsPage } from './pages/DetailsPage';
import Header from './components/Header';
import HomePage from './pages/Home'; // Import the HomePage component
import IntroApp from './pages/IntroPage';
import { AudioProvider } from './components/AudioPLayer';



const App = () => {
  const [introSkipped, setIntroSkipped] = useState(false);

  const skipIntro = () => {
    setIntroSkipped(true);
  };

  return (
    <>
      <AudioProvider>
        {!introSkipped && <IntroApp skipIntro={skipIntro} />}
        {introSkipped && (
          <>
            <Starfield starCount={1000} starColor={[255, 255, 255]} speedFactor={0.05} backgroundColor="black" />
            <Router>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/people" element={<ListPagePeople />} />
                <Route path="/people/:id" element={<PeopleDetailsPage />} />
                <Route path="/starships" element={<ListPageShips />} />
                <Route path="/starships/:id" element={<ShipsDetailsPage />} />
              </Routes>
            </Router>
          </>
        )}
      </AudioProvider>
    </>
  );
};

export default App;