import styled from 'styled-components';

const List = styled.ul`
  background-color: #F9F9F9;
  list-style: none;
  margin: 10em 0 0 0;
  padding: 0;
  
`;

function NavList({children}) {
    return (
        <List>{children}</List>
    )
}

export default NavList;