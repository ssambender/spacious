import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useStateContext } from '@/context/StateContext'
import { isEmailInUse, register} from '@/backend/Auth'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
import ThemeButton from '@/components/Dashboard/themebtn'
import Head from 'next/head'
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

const Section = styled.section`
  padding: 0 30px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`

const SubTitle = styled.div`
  color: rgba(255 255 255 / 50%);
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`

const Input = styled.input`
  font-size: 16px;
  background-color: var(--background);
  border: solid 1px ${props => props.isinvalid ? 'red' : 'rgba(255 255 255 / 25%)'};
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  width: 30%;
  margin-bottom: 10px;
  text-align: center;
`

const MainButton = styled.button`
  padding: 8px 12px;
  background-color: rgb(4, 183, 223);
  color: rgb(255, 255, 255);
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 5px;
  width: 100%;
  max-width: 300px;
  text-align: center;

  &:hover {
    background-color: #411d79;
  }
`

const UserAgreementText = styled.p`
  font-size: 12px;
  text-align: center;
  color: rgb(255 255 255 / 50%);
  margin: 10px 0 20px;
  width: 80%;
`

const UserAgreementSpan = styled(Link)`
  color: rgb(255, 255, 255);
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: var(--main-particle-1);
  }
`

const GoToLogin = styled.div`
  color: #fff;
  margin-left: 8px;
  text-decoration: underline;

  &:hover {
    color: var(--main-particle-1);
  }
`

const ErrorLine = styled.div`
  color: red;
`;

const Signup = () => {
  const { user, setUser } = useStateContext();
  const [ email, updateEmail ] = useState('');
  const [ password, updatePassword ] = useState('');
  const [error, setError] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const router = useRouter();

  async function validateEmail(){
    const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if(emailRegex.test(email) == false ){
      setIsValidEmail(false);
      return false;
    }
    const emailResponse = await isEmailInUse(email);
    console.log('Res: ', emailResponse);
    if(emailResponse.length == 0 ){
      setIsValidEmail(false);
      return false;
    }
    setIsValidEmail(true);
    return true;
  }

  async function handleSignup(){
    const isValidEmail = await validateEmail();
    console.log('isValidEmail: ', isValidEmail);
    if(!isValidEmail){
      setError('Invalid email address.');
      setTimeout(() => setError(''), 3000);
      return;
    }
    try{
      await register(email, password, setUser);
      router.push('/');
    }catch(err){
      console.log('Error Singing Up: ', err);
      if (err.code === 'auth/missing-password') {
        setIsValidPassword(false);
        setError('Missing password.');
      } else if (err.code === 'auth/email-already-in-use') {
        setIsValidEmail(false);
        setError('Email already in use.');
      } else {
        setError('An error occurred during signup.');
      }
      setTimeout(() => setError(''), 3000);
    }
  }
  

  return (
    <>
    <Head>
      <title>Spacious | Sign Up</title>
    </Head>

    <Navbar/>

    <Title>
      Sign Up
    </Title>

    <ParticleBackground />

    <Section>
        <SubTitle>Enter your name, email, and password</SubTitle>
        <Input type="text" placeholder='Name / Username'/>
        <Input type="text" value={email} placeholder='Email' isinvalid={!isValidEmail} onChange={(e) => updateEmail(e.target.value)}/>
        <Input type="password" value={password} placeholder='Password' isinvalid={!isValidPassword} onChange={(e) => updatePassword(e.target.value)}/>

        <ErrorLine>{error}</ErrorLine>

        <UserAgreementText>By signing in, you are agreeing to the <UserAgreementSpan href='/legal/terms-of-use' rel="noopener noreferrer"> Terms of Use</UserAgreementSpan> and <UserAgreementSpan href='/legal/privacy-policy' rel="noopener noreferrer">Privacy Policy.</UserAgreementSpan></UserAgreementText>
        
        <ThemeButton padding={"100px"} onClick={handleSignup}>Sign Up</ThemeButton>

        <div style={{display: "flex", paddingTop: "40px", color: "rgba(255 255 255 / 50%"}}>
          Already have an account?
          <Link href='/auth/login'>
            <GoToLogin>Log In</GoToLogin>
          </Link>
        </div>
    </Section>
    </>
  )
}


export default Signup