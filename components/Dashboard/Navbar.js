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
  width: 100vw;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 36px;
`;

const NavButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  opacity: 50%;

  &:hover {
    text-decoration: underline;
    opacity: 100%;
  }
`;

const Navbar = () => {
  const router = useRouter();

  return (
    <NavbarContainer>
      <Link href="/"><NavButton style={{fontFamily: "'Bagel Fat One', serif"}}>Spacious</NavButton></Link>
      <NavLinks>
        <Link href="/find"><NavButton>Find a Spot</NavButton></Link>
        <Link href="/sell"><NavButton>Rent a Spot</NavButton></Link>
        {/* <NavButton onClick={() => router.push('/map')}>Map View</NavButton> */}
        <Link href="/map"><NavButton>Map View</NavButton></Link>
        <Link href="/about"><NavButton>About</NavButton></Link>
        <Link href="/account"><NavButton>My Account</NavButton></Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
