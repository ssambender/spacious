import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20vw;
  background-color: rgb(0 0 0 / 0%);
  color: #fff;
  width: 100%;
  position: sticky;
  top: 0;

  transition: background-color .4s ease;

  &:hover {
    background-color: rgb(0 0 0 / 5%);
  }

  @media all and (orientation: portrait) {
    padding: 20px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 36px;

  @media all and (orientation: portrait) {
    gap: 8px;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  opacity: 50%;
  transition: opacity .2s ease-in-out, border-bottom .2s ease;
  border-bottom: 1px solid #ffffff00;

  &:hover {
    opacity: 100%;
    border-bottom: 1px solid #ffffff;
  }
`;

const Navbar = () => {
  const router = useRouter();

  return (
    <NavbarContainer>
      <Link href="/"><NavButton style={{fontFamily: "'Bagel Fat One', serif"}}>Spacious</NavButton></Link>
      <NavLinks>
        <Link href="/find"><NavButton>Find a Spot</NavButton></Link>
        <Link href="/rent"><NavButton>Rent a Spot</NavButton></Link>
        {/* <NavButton onClick={() => router.push('/map')}>Map View</NavButton> */}
        <Link href="/map"><NavButton>Map View</NavButton></Link>
        <Link href="/about"><NavButton>About</NavButton></Link>
        <Link href="/account"><NavButton>My Account</NavButton></Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
