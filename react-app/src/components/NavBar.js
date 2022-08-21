
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import styled from 'styled-components';

const StyledNav = styled.nav`
width: 100vw;
`
const StyledUL = styled.ul`
display: flex;
flex-direction: row;
justify-content: right;
list-style: none;
&& li {
  margin: 10px 40px;
}
`

const NavBar = () => {
  return (
    <StyledNav>
      <StyledUL>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </StyledUL>
    </StyledNav>
  );
}

export default NavBar;
