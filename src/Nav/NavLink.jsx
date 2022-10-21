import styled from 'styled-components';
import '../assets/font/font.css';

function isCurrent(to) {
    return window.location.pathname.startsWith(to);
}

const Link = styled.a`
  display: block;
  text-decoration: none;
  font-family: 'KyoboHand';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  text-align: center;
`;

function NavLink({to, children, active = false}) {
    return (
        <Link
            href={to}
            active={active}
            area-current={isCurrent(to) ? "page" : null }
        >{children}
        </Link>
    );
}

export default NavLink;