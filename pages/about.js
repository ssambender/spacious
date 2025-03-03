import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Link from 'next/link';
import Head from 'next/head';
import ParticleBackground from "@/components/Dashboard/particlebackground"

const Title = styled.section`
  text-align: center;
  padding: 4px 0;

  font-size: 64px;
  margin-bottom: 20px;
  color: #ffffff;
  font-family: "Bagel Fat One", serif;
  font-weight: 400;

  @media all and (orientation: portrait) {
    font-size: 88px;
  }
`;

const CenterHoriz = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function About() {
  return (
    <>
        <Head>
            <title>Spacious | About</title>
        </Head>

        <Navbar/>
        <ParticleBackground />

        <Title>
          About Spacious
        </Title>

        <CenterHoriz>
            <div>centered text</div>
        </CenterHoriz>
    </>
  )
}
