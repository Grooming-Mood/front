import styled from 'styled-components';

const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20% 0%;
  border: 1px solid #888686;
  height: 5%;
`;

function NavItem({children}) {
    return (
        <Item>{children}</Item>
    )
};

export default NavItem;