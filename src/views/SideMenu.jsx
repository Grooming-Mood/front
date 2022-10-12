import Nav from "../Nav";
import HappyIcon from "../assets/image/splash/happy-icon.png";
import NormalIcon from "../assets/image/splash/normal-icon.png";
import SadIcon from "../assets/image/splash/sad-icon.png";
import AngryIcon from "../assets/image/splash/angry-icon.png";
import ChatbotIcon from "../assets/image/splash/chatbot-icon.png";
import SettingIcon from "../assets/image/splash/setting-icon.png";

function SideMenu() {
  return (
      <Nav>
          <Nav.List>
              <Nav.Item className={"nav-item"}>
                  <Nav.Link
                      to="/my-page"
                      className={"nav-mypage"}>
                      My
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item className={"nav-item"}>
                  <Nav.Link
                      to="/feed"
                      className={"nav-feed"}>
                      ALL
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item className={"nav-item"}>
                  <Nav.Link
                      to="/happy-feed"
                      className={"nav-happyfeed"}>
                      <img src={HappyIcon} alt="Happy" style={{"width":"50%"}}/>
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item className={"nav-item"}>
                  <Nav.Link
                      to="/sad-feed"
                      className={"nav-sadfeed"}>
                      <img src={SadIcon} alt="Sad" style={{"width":"55%"}}/>
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item className={"nav-item"}>
                  <Nav.Link
                      to="/angry-feed"
                      className={"nav-angryfeed"}>
                      <img src={AngryIcon} alt="Angry" style={{"width":"60%"}}/>
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item className={"nav-item"}>
                  <Nav.Link
                      to="/nomal-feed"
                      className={"nav-nomalfeed"}>
                      <img src={NormalIcon} alt="Normal" style={{"width":"60%"}}/>
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item className={"nav-item"}>
                  <Nav.Link
                      to="/setting"
                      setting={"nav-setting"}>
                      <img src={SettingIcon} alt="Setting" style={{"width":"70%"}}/>
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item className={"nav-item"}>
                  <Nav.Link
                      to="/chatbot"
                      className={"nav-chatbot"}>
                      <img src={ChatbotIcon} alt="Chatbot" style={{"width":"70%"}}/>
                  </Nav.Link>
              </Nav.Item>
          </Nav.List>
      </Nav>
  );
}

export default SideMenu;