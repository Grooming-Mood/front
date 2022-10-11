import styled from 'styled-components';

const Navigation = styled.nav`
  width: 4%;
  height: 5%;
`;

function Nav({children}) {
    return (
        <Navigation>{children}</Navigation>
    )
}

export default Nav;