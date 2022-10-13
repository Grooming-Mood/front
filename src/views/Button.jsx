import styled from 'styled-components';

function Button({ children }) {
    return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  margin: 0;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 14px 80px 7px 80px);
  border-radius: var(--button-radius, 8px);
  background: var(--button-bg-color, #222C36);
  color: var(--button-color, #ffffff);

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #222C36);
  }

  //&:disabled {
  //  cursor: default;
  //  opacity: 0.5;
  //  background: var(--button-bg-color, #025ce2);
  //}
`;

export default Button;