
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  width: fit-content;
`
const StyledUL = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0 0 0 0;
  padding: 0;
  list-style: none;
  && li {
    margin: 0 20px;
  }
  && a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
`
const NavDiv = styled.div`
  padding: 0;
  max-width: 1200px;
  width: 100%;
  height: 65px;
  top: 2px;
  margin: 0 0 60px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const GoodLandH2 = styled.h2`
  margin: 0;
  padding: 0 0 0 20px;
  cursor: default;
  font-family: 'Lobster Two', cursive;
  font-size: 52px;
  text-shadow:
		-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 4px 4px #f5cb5c;
`

const NavBar = () => {
  return (
    <NavDiv>
      <div>
        <GoodLandH2>Good Land Coffee Roasters</GoodLandH2>
      </div>
      <StyledNav>
        <StyledUL>
          <li>
            <NavLink to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/beans' exact={true} activeClassName='active'>
              Beans
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' exact={true} activeClassName='active'>
              About
            </NavLink>
          </li>
        </StyledUL>
      </StyledNav>
    </NavDiv>
  );
}

export default NavBar;
