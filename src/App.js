import './App.css';
import Navbar from "./components/nav/Navbar"
import Home from './pages/home/Home';
import About from "./pages/about/About"
import Complaints from './pages/complaints/Complaints';
import Contact from './pages/contact/Contact';
import {Routes, Route} from "react-router-dom"
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='about' element= {<About/>}/>
        <Route path='complaints' element= {<Complaints/>}/>
        <Route path='contact' element= {<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
