import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Footer from "@/components/LandingPage/Footer"
import ParticleBackground from "@/components/Dashboard/particlebackground"

const Hero = styled.section`
  text-align: center;
  padding: 100px 0 0 0;
`;

const HeroTitle = styled.h2`
  font-size: 128px;
  margin-bottom: 20px;
  color: #ffffff;
  font-family: "Bagel Fat One", serif;
  font-weight: 400;
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background-color: var(--main-color-1);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: var(--main-color-2);
  }
`;

export default function Home() {
  return (
    <>
        <Navbar/>
        <ParticleBackground />
        <Hero>
          <HeroTitle>Spacious</HeroTitle>
          <HeroSubtitle>Landing subtitle, landing subtitle</HeroSubtitle>
          <Button>Get Started</Button>
        </Hero>
    </>
  )
}
