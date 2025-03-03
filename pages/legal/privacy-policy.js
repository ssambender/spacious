import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Link from 'next/link';
import Head from 'next/head';
import ThemeButton from '@/components/Dashboard/themebtn';
import { useRouter } from 'next/router'

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

export default function PrivacyPolicy() {
        const router = useRouter()
    
  return (
    <>
        <Head>
            <title>Spacious | Privacy Policy</title>
        </Head>

        <Navbar/>

        <Title>
            Privacy Policy
        </Title>

        <CenterHoriz>
            <div>Blah blah blah, boring legal stuff</div>
        </CenterHoriz>

        <CenterHoriz style={{marginTop: "48px"}}>
            <ThemeButton type="button" onClick={() => router.back()}>
                Click here to go back
            </ThemeButton>
        </CenterHoriz>
    </>
  )
}
