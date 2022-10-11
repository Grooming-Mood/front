import Nav from "../Nav";

function SideMenu() {
  return (
      <Nav className={"nav-bar"}>
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
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item className={"nav-item"}>
                  <Nav.Link
                      to="/sad-feed"
                      className={"nav-sadfeed"}>

                  </Nav.Link>
              </Nav.Item>
              <Nav.Item className={"nav-item"}>
                  <Nav.Link
                      to="/angry-feed"
                      className={"nav-angryfeed"}>

                  </Nav.Link>
              </Nav.Item>
              <Nav.Item className={"nav-item"}>
                  <Nav.Link
                      to="/nomal-feed"
                      className={"nav-nomalfeed"}>

                  </Nav.Link>
              </Nav.Item>
              <Nav.Item className={"nav-item"}>
                  <Nav.Link
                      to="/setting"
                      setting={"nav-setting"}>

                  </Nav.Link>
              </Nav.Item>
              <Nav.Item className={"nav-item"}>
                  <Nav.Link
                      to="/chatbot"
                      className={"nav-chatbot"}>

                  </Nav.Link>
              </Nav.Item>
          </Nav.List>
      </Nav>
  );
}

export default SideMenu;