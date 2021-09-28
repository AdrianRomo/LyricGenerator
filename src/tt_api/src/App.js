import React from 'react';
import './pages/css/App.css';
import Navbar from './components/js/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/js/Home';
import About from './components/pages/js/About';
import Faq from './components/pages/js/Faq';
import Samples from './components/pages/js/Samples';
import Developers from './components/pages/js/Developers';

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
