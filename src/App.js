import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./views/Home";
import Record from "./views/Record";
import './App.css';
import Feed from "./views/Feed";



function App() {
    return (
        <BrowserRouter>
            <div className="App">
              <div className="content">
                  <Route path="/" component={ Home } exact />
                  <Route path="/feed" component={ Feed } exact />
                  <Route path="/record" component={ Record } exact /> {/*레코드 화면*/}
              </div>
            </div>
        </BrowserRouter>
  );
}

export default App;
