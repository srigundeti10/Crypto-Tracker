import React from "react";
// import { makeStyles } from '@mui/styles';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Coinpage from "./pages/Coinpage";




function App() {

  return (
    <BrowserRouter>
      <div className="nav">
        <Header/>
        <Routes>
          <Route path='/' Component={Homepage} exact/>
          <Route path='/coin/:id' Component={Coinpage}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
