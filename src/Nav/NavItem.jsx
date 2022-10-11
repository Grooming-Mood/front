import styled from 'styled-components';

const Item = styled.li`
  width: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10% 50%;
`;

function NavItem({children}) {
    return (
        <Item>{children}</Item>
    )
};

export default NavItem;