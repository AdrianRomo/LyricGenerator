import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Faq from './components/pages/Faq';
import Samples from './components/pages/Samples';
import Dev from './components/pages/Dev';
import GenerateSong from './components/pages/GenerateSong';
import LyricPage from './components/pages/LyricPage';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>        
        <Route path='/about' component={About} />
        <Route path='/faq' component={Faq} />
        <Route path='/samples' component={Samples} />
        <Route path='/dev' component={Dev} />
        <Route path='/generatesong' component={GenerateSong} />
        <Route path='/lyricpage' component={LyricPage} />
      </Switch>
    </Router>      
    </>
  );
}

export default App;
