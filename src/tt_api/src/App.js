import React from 'react';
import './App.css';
import Navbar from './components/js/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/js/Home';
import About from './pages/js/About';
import Faq from './pages/js/Faq';
import Samples from './pages/js/Samples';
import Developers from './pages/js/Dev';

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
        <Route path='/dev' component={Developers} />
      </Switch>
    </Router>      
    </>
  );
}

export default App;
