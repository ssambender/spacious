import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import ThemeButton from '@/components/Dashboard/themebtn';
import Link from 'next/link';
import ParticleBackground from "@/components/Dashboard/particlebackground";
import Image from 'next/image';

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
  position: relative;
  filter: brightness(0.3);
  opacity: 50%;
  transition: all .2s ease;

  &:hover {
    cursor: default;
    opacity: 100%;
    filter: brightness(0.5);
    transition: all .1s ease;
  }
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
          <LandingImage>
            <Image src="/parkingSpot2.png" alt="A parkign space" layout="fill" objectFit="cover"/>
          </LandingImage>
          <LandingImage>
          <Image src="/parkingSpot.png" alt="A parkign space" layout="fill" objectFit="cover"/>
          </LandingImage>
          <LandingImage>
          <Image src="/parkingSpot1.png" alt="A parkign space" layout="fill" objectFit="cover"/>
          </LandingImage>
        </LowerContainer>

        <div style={{height: "100px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
          Some examples of parking spaces claimed by satisfied users.
        </div>
    </>
  )
}
