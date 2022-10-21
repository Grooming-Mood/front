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
              <Nav.Item>
                  <Nav.Link to="/my-page">
                      My
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link to="/record"> {/*녹화 메뉴 추가*/}
                    Record
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link to="/feed">
                      ALL
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link to="/happy-feed">
                      <img src={HappyIcon} alt="Happy" style={{"width":"25px", "hight":"25px"}}/>
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link to="/sad-feed">
                      <img src={SadIcon} alt="Sad" style={{"width":"30px","hight":"30px"}}/>
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link to="/angry-feed">
                      <img src={AngryIcon} alt="Angry" style={{"width":"30px","hight":"30px"}}/>
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link to="/nomal-feed">
                      <img src={NormalIcon} alt="Normal" style={{"width":"30px","hight":"30px"}}/>
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link to="/setting">
                      <img src={SettingIcon} alt="Setting" style={{"width":"30px","hight":"30px"}}/>
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link to="/chatbot">
                      <img src={ChatbotIcon} alt="Chatbot" style={{"width":"28px","hight":"28px"}}/>
                  </Nav.Link>
              </Nav.Item>
          </Nav.List>
      </Nav>
  );
}

export default SideMenu;