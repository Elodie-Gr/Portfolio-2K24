import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './screens/Accueil';
import QuiSuisJe from './screens/Apropos';
import Parcours from './screens/Parcours';
import Competences from './screens/Competences';
import Projets from './screens/Projets';
import Contact from './screens/Contact';
import GlobalStyles from './GlobalStyles';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <GlobalStyles />
        <Navbar />
        <Accueil />
        <Footer />
        <Routes>
          <Route path="/qui-suis-je" component={QuiSuisJe} />
          <Route path="/parcours" component={Parcours} />
          <Route path="/competences" component={Competences} />
          <Route path="/projets" component={Projets} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
