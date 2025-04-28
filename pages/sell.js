import ParticleBackground from "@/components/Dashboard/particlebackground"
import { addNewLocation } from '@/backend/Database';
import ThemeButton from '@/components/Dashboard/themebtn';
import { getAuth } from "firebase/auth";

// const Title = styled.section`
//   text-align: center;
//   padding: 4px 0;
//   font-size: 64px;
//   margin-bottom: 20px;
//   color: #ffffff;
//   font-family: "Bagel Fat One", serif;
//   font-weight: 400;

//   @media all and (orientation: portrait) {
//     font-size: 88px;
//   }
// `;

// const CenterHoriz = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
//   width: 500px;
//   background-color: var(--background);
//   padding: 48px;
//   margin-top: 24px;
//   border-radius: 8px 48px;
//   border: 1px solid rgba(255 255 255 / 25%);
// `;

// const Input = styled.input`
//   padding: 8px;
//   color: #ffffff;
//   border-radius: 8px;
//   border: 1px solid rgba(255 255 255 / 25%);
//   background: rgba(255 255 255 / 5%);
// `;

// const Button = styled.button`
//   padding: 10px;
//   background-color: #4CAF50;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #45a049;
//   }
// `;

// export default function Sell() {
//   const [formData, setFormData] = useState({
//     coordinates: '',
//     title: '',
//     seller: '',
//     dateStart: '',
//     dateEnd: '',
//     price: ''
//   });
//   const [userEmail, setUserEmail] = useState('');

//   useEffect(() => {
//     const auth = getAuth();
//     const user = auth.currentUser;
//     if (user) {
//       setUserEmail(user.email);
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     addNewLocation({...formData, userEmail});
//   };

//   return (
//     <>
//       <Head>
//         <title>Spacious | Sell</title>
//       </Head>

//       <Navbar/>
//       <ParticleBackground />

//       <Title>
//         Sell a spot
//       </Title>

//       <CenterHoriz>
//         <div style={{color: "rgba(255 255 255 / 50%", marginBottom: "24px"}}>
//           Only signed-in users can sell their spots.
//         </div>
//       </CenterHoriz>

//       <CenterHoriz>        
//         <Form onSubmit={handleSubmit}>
//           <Input type="text" name="coordinates" placeholder="Coordinates (e.g., 12.345, 67.890)" value={formData.coordinates} onChange={handleChange} required autoComplete='off'/>
//           <Input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required autoComplete='off'/>
//           <Input type="text" name="seller" placeholder="Seller" value={formData.seller} onChange={handleChange} required autoComplete='off'/>
//           <Input type="date" name="dateStart" placeholder="Start Date" value={formData.dateStart} onChange={handleChange} required autoComplete='off'/>
//           <Input type="date" name="dateEnd" placeholder="End Date" value={formData.dateEnd} onChange={handleChange} required autoComplete='off'/>
//           <Input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required autoComplete='off'/>
//           <ThemeButton type="submit">List Spot</ThemeButton>
//         </Form>
//       </CenterHoriz>
//     </>
//   )
// }

import React from 'react';
import styled from 'styled-components';
import Navbar from '/components/Dashboard/Navbar';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';

import { useState } from 'react';

import Head from 'next/head';
import { useRef } from 'react';
import { useEffect } from 'react';

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  background: var(--background);
`;

const MapContainer = styled.div`
  height: 400px;
  width: 400px;
  filter: brightness(0.5);
`;


const SellPage = () => {

  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const mapRef = useRef(null);
  
  useEffect(() => {
      if (typeof window !== 'undefined') {
        const L = require('leaflet');
        if (!mapRef.current) {
          mapRef.current = L.map('map').setView([40.795, -77.86], 16);
          L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          }).addTo(mapRef.current);
        }
      }
      return () => {
        if (mapRef.current) {
          mapRef.current.remove();
          mapRef.current = null;
        }
      };
  }, []);
  return (
    <Container>
      <Head>
        <link 
          rel="stylesheet" 
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" 
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" 
          crossOrigin=""
        />
        <script 
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" 
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" 
          crossOrigin=""
        ></script>
      </Head>
        <Navbar />
        <h1>Sell a Spot</h1>
        <h6>Post your own parking spot to other users</h6>

        <br></br>
        <br></br>

        <div id="start_date_time"
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "16px"}}>
          <div id="start_date">
            <h5>Start Date:</h5>
              <DatePicker
                selectsStart
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                startDate={startDate}
              />
          </div>
          <div id="start_time">
            <h5>Select Start Time</h5>
              <LocalizationProvider dateAdapter={AdapterDayjs} float>
                <TimePicker
                  label="Select Start Time"
                  value={selectedTime}
                  onChange={(newTime) => setSelectedTime(newTime)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
          </div>
        </div>
        
          
      
          <br></br>
          <br></br>

          
        
        <div id="end_date_time"
          style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "16px"}}>
          <div id="end_date">
            <h5>End Date:</h5>
            <DatePicker
              selectsEnd
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              endDate={endDate}
              startDate={startDate}
              minDate={startDate}
            />
          </div>
          <div id="end_time">
            <h5>Select End Time</h5>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  label="Select Start Time"
                  value={selectedTime}
                  onChange={(newTime) => setSelectedTime(newTime)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
          </div>
        </div>
      
        <br></br>
        <br></br>

        <div id="durations">
          <h5>Price to Park:</h5>
          <input type="text" id="minimum_text_field"></input> 
        </div>
        
        <br></br>
        <br></br>
        <br></br>

        <h5>Enter Description:</h5>
        <div id="description">
          <input type="text" id="desc"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              height: "150px",
              width: "300px",
              fontSize: "16px",
          }}>
          </input>
        </div>

        <br></br>
        <br></br>

        <div id="select_location">
          <h2>Location:</h2>
            <div id="map_view">
              <br></br>
              <h5>Select from Map View:</h5>
              <MapContainer id="map" />
            </div>

            <div id="type_address">
              <br></br>
              <h5>OR</h5>
              <br></br>
              <h5>Type Address:</h5>
              <input type="text" id="address"></input>
            </div>

        </div>

        <br></br>
        <br></br>

        <div id="post_photo">
          <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {image && <img src={image} alt="Preview" style={{ width: '200px' }} />}
          </div>
        </div>

        <br></br>
        <br></br>

        <button id="submit"
        >
        Post Spot</button>

    </Container>
  );
};

export default SellPage;