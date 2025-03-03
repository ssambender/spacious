import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20vw;
  background-color: ${props => props.isSticky ? 'rgb(25 25 25 / 100%)' : 'rgb(25 25 25 / 0%)'};
  color: #fff;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 5;

  transition: background-color .4s ease;

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
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarContainer isSticky={isSticky}>
      <Link href="/"><NavButton style={{fontFamily: "'Bagel Fat One', serif"}}>Spacious</NavButton></Link>
      <NavLinks>
        <Link href="/find"><NavButton>Find a Spot</NavButton></Link>
        <Link href="/sell"><NavButton>Sell a Spot</NavButton></Link>
        {/* <NavButton onClick={() => router.push('/map')}>Map View</NavButton> */}
        <Link href="/map"><NavButton>Map View</NavButton></Link>
        <Link href="/about"><NavButton>About</NavButton></Link>
        
        <div><Link href="/auth/login"><NavButton>Log In</NavButton></Link> <span style={{opacity: "50%"}}>/</span> <Link href="/auth/signup"><NavButton>Sign Up</NavButton></Link></div>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
