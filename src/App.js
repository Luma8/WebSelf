import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import light from './themes/light';
import Footer from './pages/Footer';
import Home from './pages/Home'
import Navbar from './pages/Navbar';
import Repos from './pages/Repos'
import dark from './themes/dark';

function App() {
  const [ theme, setThemes] = useState(light);

  const toggleTheme = () => {
    setThemes(theme.title === 'light' ? dark : light)
  }

  return (
  <ThemeProvider theme={theme}>
      <Navbar toggleTheme={toggleTheme} theme={theme}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Repos" element={<Repos/>} />
      </Routes>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
