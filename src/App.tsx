import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Starfield from './components/StartField';
import { ListPagePeople, ListPageShips } from './pages/ListPage';
import { PeopleDetailsPage, ShipsDetailsPage } from './pages/DetailsPage';
import Header from './components/Header';
import HomePage from './pages/Home'; // Import the HomePage component
import IntroApp from './pages/IntroPage';
import { AudioProvider } from './components/AudioPLayer';
import { NavBar } from './components/NavBar';

const App = () => {
  
  const [introSkipped, setIntroSkipped] = useState(() => {
    return localStorage.getItem('introSkipped') === 'true';
  });

  const skipIntro = () => {
    setIntroSkipped(true);
    localStorage.setItem('introSkipped', 'true');
  };

  return (
    <AudioProvider>
      {!introSkipped && <IntroApp skipIntro={skipIntro} />}
      {introSkipped && (
        <Router>
          <Starfield starCount={1000} starColor={[255, 255, 255]} speedFactor={0.05} backgroundColor="black" />
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/people" element={<ListPagePeople />} />
            <Route path="/people/:id" element={<PeopleDetailsPage />} />
            <Route path="/starships" element={<ListPageShips />} />
            <Route path="/starships/:id" element={<ShipsDetailsPage />} />
          </Routes>
        </Router>
      )}
    </AudioProvider>
  );
};


export default App;