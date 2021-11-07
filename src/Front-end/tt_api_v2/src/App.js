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
          <Route path='/about.html' component={About} />
          <Route path='/samples.html' component={Samples} />
          <Route path='/team.html' component={Team} />
          <Route path='/contact.html' component={Contact} />
          <Route path='/faq.html' component={FAQ} />
          <Route path='/developers.html' component={Developer} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
