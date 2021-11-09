import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/js/Home';
import About from './pages/js/About';
import Samples from './pages/js/Samples';
import Team from './pages/js/Team';
import Developer from './pages/js/Dev';
import Contact from './pages/js/Contact';
import FAQ from './pages/js/Faq';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/samples' component={Samples} />
          <Route path='/team' component={Team} />
          <Route path='/contact' component={Contact} />
          <Route path='/faq' component={FAQ} />
          <Route path='/developers' component={Developer} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
