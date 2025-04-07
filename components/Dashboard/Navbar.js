import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { onAuthStateChanged, getAuth, signOut } from 'firebase/auth';
import Image from 'next/image';

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

const UserEmail = styled.span`
  position: relative;
  cursor: pointer;
  text-align: center;
  margin-right: 8px;
  text-transform: capitalize;
  
  &:hover::after {
    content: '${props => props.email.replace(/\n/g, "\\A")}';
    /* to be honest, I don't understand what this bit is ^ (\\A) I had to copilot a way to convert line breaks through prop, seperate than pre or &nbsp; */
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 6px 10px;
    border-radius: 4px;
    top: 120%;
    left: 50%;
    transform: translateX(-50%);
    white-space: pre;
    font-size: 14px;
    z-index: 10;
  }
`;

const Navbar = () => {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(getAuth());
      router.push('/auth/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <NavbarContainer isSticky={isSticky}>
      <Link href="/">
        <NavButton style={{ fontFamily: "'Bagel Fat One', serif", display: "flex", alignItems: "center", position: "relative"}}>
          <Image src="/spacious-icon.png" style={{position: "absolute", left: "-45px"}} width={40} height={40} alt="A parkign space"/>
          Spacious
        </NavButton></Link>
      <NavLinks>
        <Link href="/find"><NavButton>Find a Spot</NavButton></Link>
        <Link href="/sell"><NavButton>Sell a Spot</NavButton></Link>
        <Link href="/map"><NavButton>Map View</NavButton></Link>
        <Link href="/about"><NavButton>About</NavButton></Link>
        

        {user ? (
          <div>
            <Link href="/account"><NavButton>Account Page</NavButton></Link>
            <UserEmail email={`Signed in as\n${user.email}`}>{user.email.split('@')[0]}</UserEmail>
            <NavButton onClick={handleLogout}>Log Out</NavButton>
          </div>
        ) : (
          <div>
            <Link href="/auth/login"><NavButton>Log In</NavButton></Link>
            <span style={{ opacity: "50%" }}>/</span>
            <Link href="/auth/signup"><NavButton>Sign Up</NavButton></Link>
          </div>
        )}
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
