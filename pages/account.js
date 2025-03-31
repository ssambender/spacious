import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Navbar from '/components/navbar';
import ParticleBackground from '/components/particlebackground';

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  background: var(--background);
  color: white;
  padding: 50px 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 64px;
  color: white;
  font-family: "Bagel Fat One", serif;
  font-weight: 400;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  color: var(--main-color-1);
  margin-bottom: 10px;
  font-family: "Bagel Fat One", serif;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  width: 60%; 
  margin: 10px auto; 
  background: rgba(255, 255, 255, 0.1); 
  border-radius: 12px; 
  padding: 16px 20px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span`
  color: #ddd;
`;

const Button = styled.button`
  background-color: var(--main-color-1);
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: var(--main-color-2);
  }
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  color: var(--main-color-1);
  cursor: pointer;
  text-align: left;
  display: flex;
  align-items: center;
  
  &:hover {
    color: var(--main-color-2);
  }
`;

const DropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  width: 60%; 
  margin: 10px auto;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
`;

const AccountPage = () => {
  const router = useRouter();
  const [paymentOpen, setPaymentOpen] = useState(false);

  return (
    <Container>
      <ParticleBackground />
      <Navbar />
      <Header>
        <Title>Account Details</Title>
      </Header>
      
      <Section>
        <SectionTitle>Personal Information</SectionTitle>
        <InfoRow>
          <Label>Name:</Label>
          <Value>John Doe</Value>
        </InfoRow>
        <InfoRow>
          <Label>Email:</Label>
          <Value>john.doe@example.com</Value>
        </InfoRow>
        <InfoRow>
          <Label>Address:</Label>
          <Value>Doe's Address</Value>
        </InfoRow>
        <InfoRow>
          <Label>Phone:</Label>
          <Value>+1234567890</Value>
        </InfoRow>
        
        
        <InfoRow>
          <Label>Payment Information</Label>
        </InfoRow>
        <div style={{ width: '60%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
          <DropdownButton onClick={() => setPaymentOpen(!paymentOpen)}>
            {paymentOpen ? '▼ Hide Details' : '► Show Details'}
          </DropdownButton>
        </div>
        <DropdownContent isOpen={paymentOpen}>
          <InfoRow>
            <Label>Card Type:</Label>
            <Value>Visa</Value>
          </InfoRow>
          <InfoRow>
            <Label>Card Number:</Label>
            <Value>**** **** **** 1234</Value>
          </InfoRow>
          <InfoRow>
            <Label>Expiration Date:</Label>
            <Value>12/26</Value>
          </InfoRow>
          <InfoRow>
            <Label>Security Code:</Label>
            <Value>***</Value>
          </InfoRow>
          <InfoRow>
            <Label>Name on Card:</Label>
            <Value>John Doe</Value>
          </InfoRow>
        </DropdownContent>

        <InfoRow>
          <Label>Payment History:</Label>
          <Value>???????</Value>
        </InfoRow>
      </Section>
      
      <Section>
        <SectionTitle>Account Settings</SectionTitle>
        <Button onClick={() => router.push('/map')}>Go to Map View</Button>
      </Section>
    </Container>
  );
};

export default AccountPage;

