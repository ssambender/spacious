import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Head from 'next/head';
import ParticleBackground from "@/components/Dashboard/particlebackground"
import { useState, useEffect } from 'react';
import { addNewLocation } from '@/backend/Database';
import ThemeButton from '@/components/Dashboard/themebtn';
import { getAuth } from "firebase/auth";

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 500px;
  background-color: var(--background);
  padding: 48px;
  margin-top: 24px;
  border-radius: 8px 48px;
  border: 1px solid rgba(255 255 255 / 25%);
`;

const Input = styled.input`
  padding: 8px;
  color: #ffffff;
  border-radius: 8px;
  border: 1px solid rgba(255 255 255 / 25%);
  background: rgba(255 255 255 / 5%);
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export default function Sell() {
  const [formData, setFormData] = useState({
    coordinates: '',
    title: '',
    seller: '',
    dateStart: '',
    dateEnd: '',
    price: ''
  });
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addNewLocation({...formData, userEmail});
  };

  return (
    <>
      <Head>
        <title>Spacious | Sell</title>
      </Head>

      <Navbar/>
      <ParticleBackground />

      <Title>
        Sell a spot
      </Title>

      <CenterHoriz>
        <div style={{color: "rgba(255 255 255 / 50%", marginBottom: "24px"}}>
          Only signed-in users can sell their spots.
        </div>
      </CenterHoriz>

      <CenterHoriz>        
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="coordinates" placeholder="Coordinates (e.g., 12.345, 67.890)" value={formData.coordinates} onChange={handleChange} required autoComplete='off'/>
          <Input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required autoComplete='off'/>
          <Input type="text" name="seller" placeholder="Seller" value={formData.seller} onChange={handleChange} required autoComplete='off'/>
          <Input type="date" name="dateStart" placeholder="Start Date" value={formData.dateStart} onChange={handleChange} required autoComplete='off'/>
          <Input type="date" name="dateEnd" placeholder="End Date" value={formData.dateEnd} onChange={handleChange} required autoComplete='off'/>
          <Input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required autoComplete='off'/>
          <ThemeButton type="submit">List Spot</ThemeButton>
        </Form>
      </CenterHoriz>
    </>
  )
}
