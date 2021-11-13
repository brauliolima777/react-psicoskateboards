import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Whatsnew from './components/WhatsNew';
import Originals from './components/Originals';
import Footer from './components/Footer';


function App() {
  return (
    <div classNameName="App">
      <Header/>
      <Slider/>
      <Whatsnew/>
      <Originals/>
      <Footer/>
    </div>
  );
}

export default App;
