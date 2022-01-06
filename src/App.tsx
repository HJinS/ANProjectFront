import { CssBaseline } from '@material-ui/core';
import React from 'react';
import './App.css';
import MainPage from './pages/mainPage';



function App() {
  return (
    <>
      <CssBaseline/>
      <div className="App" style={{height: "100vh", backgroundColor: "black"}}>
        <MainPage />
      </div>
    </>
    
  );
}

export default App;
