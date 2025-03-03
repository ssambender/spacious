import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import ThemeButton from '@/components/Dashboard/themebtn';
import Link from 'next/link';
import ParticleBackground from "@/components/Dashboard/particlebackground"

const Hero = styled.section`
  text-align: center;
  padding: 100px 0;
`;

const HeroTitle = styled.h2`
  font-size: 128px;
  margin-bottom: 12px;
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
  margin-bottom: 48px;
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
          <HeroSubtitle>Easily park as you please.</HeroSubtitle>
          <Link href="/find"><ThemeButton>Get Started</ThemeButton></Link>
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
