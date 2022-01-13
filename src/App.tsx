import { CssBaseline } from '@material-ui/core';
import React from 'react';
import './App.css';
import MainPage from './pages/mainPage';
import MainListPage from './pages/mainListPage';


function App() {
  return (
    <>
      <CssBaseline/>
      <div className="App" style={{height: "100vh"}}>
        <MainListPage/>
      </div>
    </>
    
  );
}

export default App;
