import { Route, Routes } from 'react-router-dom';

import Footer from './pages/Footer';
import Home from './pages/Home'
import Navbar from './pages/Navbar';
import Repos from './pages/Repos'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Repos" element={<Repos/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
