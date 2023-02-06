import styled, { css } from 'styled-components'

export const Button = styled.button`
  display: inline-block;
  border-radius: 8px;
  padding: 1rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: green;
  font-size: 16px;
  color: white;
  border: 2px solid white;
  cursor: pointer;

  ${props =>
    props.primary &&
    css`
      background: palevioletred; 
    `};

  ${props =>
    props.second &&
    css`
      background: blueviolet;
    `};
`

export const Text = styled.p`
  color: red;
`
export const List = styled.ul`
  list-style-type: none;
`
