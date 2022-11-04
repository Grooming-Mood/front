import styled from "styled-components";

const HeaderContainer = styled.div`
  background: rgb(92, 130, 255);
  background: linear-gradient(
    90deg,
    rgba(157, 92, 255, 1) 0%,
    rgba(92, 130, 255, 1) 100%
  );
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem;

  .ri-close-line,
  .ri-arrow-left-s-line {
    font-size: 1.5rem;
    color: #ffffff;
  }
`;

function Header() {
    return (
        <HeaderContainer>
            <i className="ri-arrow-left-s-line" />
            <i className="ri-close-line" />
        </HeaderContainer>
    );
}

export default Header;