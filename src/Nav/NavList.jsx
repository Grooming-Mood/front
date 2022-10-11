import styled from 'styled-components';

// 1366
// 768

const List = styled.ul`
  background-color: #F9F9F9;
  border: 1px solid #888686;
  list-style: none;
  margin: 0;
  padding: 0;
`;

function NavList({children}) {
    return (
        <List>{children}</List>
    )
}

export default NavList;