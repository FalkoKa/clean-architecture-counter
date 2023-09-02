import styled from 'styled-components';

export const Button = styled.button`
  background: black;
  border-radius: 15px;
  border: black;
  color: white;
  padding: 1.25em 2em;
  font-family: inherit;
  font-size: 0.7rem;
  cursor: pointer;
  min-width: 150px;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;
