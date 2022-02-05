import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Nav from './components/Nav';
import Clients from './components/Clients';
import Services from './components/Services';
import Languages from './components/Languages';
import Tools from './components/Tools';
import Contact from './components/Contact';
// import Header from './components/Header';
// import AboutMe from './components/AboutMe';
// import Client from './components/Clientes';
// import Services from './components/Services';
// import Languages from './components/Languages';
// import Tools from './components/Tools';
// import Contact from './components/Contact';
// import Nav from './components/Nav';

function App() {
  const ejectWhatsApp = () => {
    document.querySelector('#whatsapp').addEventListener('click', e => {
      e.preventDefault();
  
      const number = '+52 1 5627685223';
  
      let url = `https://api.whatsapp.com/send?phone=${number}&text=
      *¿Cómo te puedo ayudar?*%0A`;
  
      window.open(url);
  });
  }

  const ejectGithub =() => {
    document.querySelector("#github").addEventListener('click', e => {
      e.preventDefault();

      const urlGH = "https://github.com/axelwdf";

      window.open(urlGH);
    })
  }
  const ejectLinked = () => {
    document.querySelector('#linked').addEventListener('click', e => {
      e.preventDefault();

      const urlLinked = 'https://www.linkedin.com/in/axel-martinez-hernandez-b3ba93206/';

      window.open(urlLinked);
    })
  }
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <AboutMe/>
      <Clients/>
      <Services/>
      <Languages/>
      <Tools/>
      <Contact
        ejectWhatsApp={ejectWhatsApp}
        ejectGithub={ejectGithub}
        ejectLinked={ejectLinked}
      />
    </div>
  );
}

export default App;
