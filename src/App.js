import React from 'react';
import{BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Principal from './components/Principal';
import Shop from './components/Shop';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div classNameName="container">
    
    <Router>
    
      <Header/>
        <Switch>
          <Route path="/" exact>
              <Principal/>
          </Route>
          <Route path="/Shop" >
            <Shop/>
          </Route>
        </Switch>
      <Footer/>

    </Router>
    </div>
  );
}

export default App;
