import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';
import AboutUs from './Components/About us/AboutUs';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './NotFound/NotFound';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div >
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/service">
              <Service></Service>
          </Route>
          <Route path="/aboutus">
              <AboutUs></AboutUs>
          </Route>
          <Route path="/signup">
              <SignUp></SignUp>
          </Route>
          <Route path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
