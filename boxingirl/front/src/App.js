import React from 'react';
import './App.css';
import Accueil from './components/accueil';
import Reference from './components/reference';
import ContactUs from './components/contactus';
import AboutUs from './components/aboutus';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/reference" component={Reference} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contactus" component={ContactUs} />
      </Switch>
      <Footer />
    </div >
  );
}

export default App;
