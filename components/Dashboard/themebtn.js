import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: linear-gradient(145deg, var(--main-color) 30%, var(--main-particle-2) 100%);
  color: white;
  border: none;

  padding: 10px ${({ padding }) => (typeof padding === 'number' ? `${padding}px` : padding || '40px')};

  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  background-size: 200% 200%;
  background-position: 25%;
  box-shadow: 0px 0px 6px 0px #00000000;
  transition: background-position .2s ease-in-out, box-shadow 0.4s ease-in-out, filter 0.4s;
  filter: brightness(0.9);

  &:hover {
    background-position: 100%;
    box-shadow: 0px 5px 6px 0px #0000003b;
    transition: background-position .2s ease-in-out, box-shadow 0.4s ease-in-out, filter 0.7s;
    filter: brightness(1);
  }
`;

const ThemeButton = ({ children, padding, ...props }) => {
  return (
    <Button padding={padding} {...props}>{children}</Button>
  );
};

export default ThemeButton;
