import styled from 'styled-components';

const Item = styled.li`
  width: 100%;
  padding: 15% 0% 0% 0%;
  border: 1px solid #888686;
`;

function NavItem({children}) {
    return (
        <Item>{children}</Item>
    )
};

export default NavItem;