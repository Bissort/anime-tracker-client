import React from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';

export default function Home() {
  return (
    <StyledHome>
      <Menu>
        <MenuItem>Popular</MenuItem>
        <MenuItem>Popular</MenuItem>
        <MenuItem>Popular</MenuItem>
        <MenuItem>Popular</MenuItem>
      </Menu>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  background-color: ${Theme.colors.background};
  min-height: 100vh;
  padding-top: 1em;
`;

const Menu = styled.section`
  display: flex;
  justify-content: center;
`;

// TODO: Change Colors
const MenuItem = styled.button`
  background-color: grey;
  color: white;
  text-align: center;
  padding: 0.5em 0.7em;
  border-style: solid;
  border-color: white;
  border-width: 1px;
`;
