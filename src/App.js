import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./views/Home";
import Record from "./views/Record";
import Setting from "./views/Setting";
import Setting_Convert from "./views/Setting_Convert";
import Result from "./views/Result";
import './App.css';
import Feed from "./views/Feed";
import Calendar from "./views/Calendar";
import HappyHome from "./views/HappyHome";
import SadHome from "./views/SadHome";
import AngryHome from "./views/AngryHome";
import NormalHome from "./views/NormalHome";
import Chatbot from "./views/Chatbot";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
              <div className="content">
                  <Route path="/" component={ Home } exact />

                  <Route path="/feed" component={ Feed } exact />
                  <Route path="/happy-feed" component={ HappyHome }/>
                  <Route path="/sad-feed" component={ SadHome }/>
                  <Route path="/angry-feed" component={ AngryHome }/>
                  <Route path="/nomal-feed" component={ NormalHome }/>

                  <Route path="/calendar" component={ Calendar } exact />
                  <Route path="/record" component={ Record } exact /> {/*레코드 화면*/}
                  <Route path="/setting" component={ Setting } exact /> {/*회원 정보 수정*/}
                  <Route path="/setting_convert" component={ Setting_Convert } exact /> {/*회원 정보 프사, 닉네임 수정*/}
                  <Route path="/result" component={ Result } exact /> {/*회원 정보 프사, 닉네임 수정*/}

                  <Route path="/chatbot" component={ Chatbot }/>
              </div>
            </div>
        </BrowserRouter>
  );
}

export default App;
