import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import './styles/app.css';
import Personality from './pages/Personality';
import Character from './pages/Character';

function App() {
  return (
    // add animations
    <div className="app">
      <Header />
      <Nav />
      <Footer />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/character' element={<Character />} />
        <Route path="/personality&background" element={<Personality />} />
      </Routes>
    </div>
  );
}

export default App;
