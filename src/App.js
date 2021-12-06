import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component= {Home}/>
        <Route path='/Services' component={Services}/>
        <Route path='/Products' component={Products}/>
        <Route path='/SignUp' component={SignUp}/>

      </Switch>
      <Footer/>
    </Router>
 
    </>
  );
}

export default App;
