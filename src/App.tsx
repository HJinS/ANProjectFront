import { CssBaseline } from '@material-ui/core';
import React from 'react';
import MainPage from './pages/mainPage';
import MainListPage from './pages/mainListPage';


function App() {
  return (
    <>
      <CssBaseline/>
      <div style={{height: "100vh"}}>
        <MainListPage/>
      </div>
    </>
    
  );
}

export default App;
