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
            <div>Spacious is a parking app that allows users to find parking spots, or sell one of their own if they have extra.<br/>
              This is a win-win because it allows people to find cheaper, easier, and more local parking. While also letting people<br/>
              earn extra revenue for any spots they have taking up space in the area.<br/><br/>
              
              It can be thought of as an AirBnB for parking spaces essentially.<br/><br/>

              Utilizing the OpenStreetMap and Leaflet APIs to display data, Firebase for user authentication,<br/>
              and Firestore for realtime database storing location points.
            </div>
        </CenterHoriz>
    </>
  )
}
