import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Link from 'next/link';
import ParticleBackground from "@/components/Dashboard/particlebackground"

const Hero = styled.section`
  text-align: center;
  padding: 100px 0;
`;

const HeroTitle = styled.h2`
  font-size: 128px;
  margin-bottom: 20px;
  color: #ffffff;
  font-family: "Bagel Fat One", serif;
  font-weight: 400;

  @media all and (orientation: portrait) {
    font-size: 88px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background: linear-gradient(145deg, var(--main-color-1) 30%, var(--main-particle-2) 100%);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  background-size: 200% 200%;
  background-position: 25%;
  box-shadow: 0px 0px 6px 0px #00000000;
  transition: background-position 1s ease-in-out, box-shadow 0.6s ease-in-out;

  &:hover {
    background-position: 100%;
    box-shadow: 0px 5px 6px 0px #0000003b;
    transition: background-position .4s ease-in-out, box-shadow 0.4s ease-in-out;
  }
`;

const LowerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 64px;
`;

const LandingImage = styled.div`
  width: 500px;
  height: 300px;
  background: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export default function Home() {
  return (
    <>
        <Navbar/>
        <ParticleBackground />
        <Hero>
          <HeroTitle>Spacious</HeroTitle>
          <HeroSubtitle>Parking power back in your hands.</HeroSubtitle>
          <Link href="/find"><Button>Get Started</Button></Link>
        </Hero>
        
        <LowerContainer>
          <LandingImage>One</LandingImage>
          <LandingImage>Two</LandingImage>
          <LandingImage>Three</LandingImage>
        </LowerContainer>

        <div style={{height: "100px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
          More text here...
        </div>
    </>
  )
}
