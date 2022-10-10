import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./views/Home";
import './App.css';



function App() {
    return (
        <BrowserRouter>
            <div className="App">
              <div className="content">
                  <Route path="/" component={ Home } exact />
              </div>
            </div>
        </BrowserRouter>
  );
}

export default App;
