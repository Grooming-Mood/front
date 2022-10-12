import styled from 'styled-components';

const Navigation = styled.nav`
  width: 6%;
  display: flex;
  flex-direction: column;
`;

function Nav({children}) {
    return (
        <Navigation>{children}</Navigation>
    )
}

export default Nav;