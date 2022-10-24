import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./views/Home";
import Record from "./views/Record";
import Setting from "./views/Setting";
import Setting_Convert from "./views/Setting_Convert";
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
                  <Route path="/setting" component={ Setting } exact /> {/*회원 정보 수정*/}
                  <Route path="/setting_convert" component={ Setting_Convert } exact /> {/*회원 정보 프사, 닉네임 수정*/}
              </div>
            </div>
        </BrowserRouter>
  );
}

export default App;
