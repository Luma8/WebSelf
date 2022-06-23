import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import light from './themes/light';
import Footer from './pages/Footer';
import Home from './pages/Home'
import Navbar from './pages/Navbar';
import Repos from './pages/Repos'

function App() {
  return (
  <ThemeProvider theme={light}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Repos" element={<Repos/>} />
      </Routes>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
