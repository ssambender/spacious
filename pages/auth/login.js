import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useStateContext } from '@/context/StateContext'
import {login, isEmailInUse} from '@/backend/Auth'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
import Head from 'next/head'
import ThemeButton from '@/components/Dashboard/themebtn'
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

const GoToSignUp = styled.div`
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

const Login = () => {
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
    if(emailResponse.length == 0 ){
      setIsValidEmail(false);
      return false;
    }
    setIsValidEmail(true);
    return true;
  }

 async function handleLogin(){
  setIsValidEmail(true);
  setIsValidPassword(true);
  setError('');
  const isValidEmail = await validateEmail();
  if (!isValidEmail) {
    setError('Invalid email address.');
    setTimeout(() => setError(''), 3000);
    return;
  }

  try {
    const { user, error } = await login(email, password);

    if (error) {
      console.error('error:', error);
      if (error.code === 'auth/wrong-password') {
        setIsValidPassword(false);
        setError('Incorrect password.');
      } else if (error.code === 'auth/user-not-found') {
        setIsValidEmail(false);
        setError('User not found.');
      } else {
        setError('Anerror occurred during login.');
      }
      setTimeout(() => setError(''), 3000);
      return;
    }

    setUser(user);
    console.log('Logged in: ', user);
    router.push('/find');
  } catch (err) {
    console.error('Unexpected error:', err);
    setError('An unexpected error occurred.');
    setTimeout(() => setError(''), 3000);
  }
}

  return (
    <>
    <Head>
      <title>Spacious | Log In</title>
    </Head>

    <Navbar/>

    <Title>
      Log In
    </Title>

    <ParticleBackground />

      <Section>
          <SubTitle>Enter your email and password</SubTitle>

          <Input type="text" value={email} isinvalid={!isValidEmail} placeholder='Email' onChange={(e) => updateEmail(e.target.value)}/>
          <Input type="password" value={password} isinvalid={!isValidPassword} placeholder='Password' onChange={(e) => updatePassword(e.target.value)}/>

          <ErrorLine>{error}</ErrorLine>

          <UserAgreementText>By signing in, you are agreeing to the <UserAgreementSpan href='/legal/terms-of-use' rel="noopener noreferrer"> Terms of Use</UserAgreementSpan> and <UserAgreementSpan href='/legal/privacy-policy' rel="noopener noreferrer">Privacy Policy.</UserAgreementSpan></UserAgreementText>

          <ThemeButton padding={"100px"} onClick={handleLogin}>Sign Up</ThemeButton>

          <div style={{display: "flex", paddingTop: "40px", color: "rgba(255 255 255 / 50%"}}>
            Need an Account?
            <Link href='/auth/signup'>
              <GoToSignUp>SignUp</GoToSignUp>
            </Link>
          </div>

      </Section>
    </>
  )
}

export default Login