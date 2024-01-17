import React from 'react';
import GlobalStyles from './GlobalStyles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Accueil from './screens/Accueil';
import Apropos from './screens/Apropos';
import Parcours from './screens/Parcours';
import Competences from './screens/Competences';
import Projets from './screens/Projets';
import Contact from './screens/Contact';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      
      <section id="accueil">
        <Accueil />
      </section>
      
      <section id="apropos">
        <Apropos />
      </section>

      <section id="parcours">
        <Parcours />
      </section>

      <section id="competences">
        <Competences />
      </section>

      <section id="projets">
        <Projets />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
