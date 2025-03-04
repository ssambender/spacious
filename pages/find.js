import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Link from 'next/link';
import Head from 'next/head';
import ParticleBackground from "@/components/Dashboard/particlebackground"
import { getLocations } from '@/backend/Database';
import { useState } from 'react';
import LocationCard from '@/components/Dashboard/LocationCard';

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

const Searchbar = styled.div`
    width: 50%;
    border: solid 1px rgba(255 255 255 / 25%);
    border-radius: 50px;
    height: 68px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--background);

    @media all and (orientation: portrait) {
        width: 80%;
    }
`;

const SearchbarSec = styled.div`
    height: 100%;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background: rgba(255 255 255 / 5%);
    }

    & input {
        padding: 0;
        margin: 0;
        outline: none;
        border: none;
        background: none;
        color: rgba(255 255 255 / 50%);
        font-size: 1rem;
        font-weight: normal;
        cursor: inherit;
    }

    & input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
    }

    & input[type=number]::-webkit-inner-spin-button, 
    & input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0; 
    }
`;
const SearchIconContainer = styled.div`
    width: 10%;
    height: 100%;
    border-radius: 50px;
    display: flex;
    justify-content: end;
    padding-right: 9px;
    align-items: center;
`;
const SearchbarSearch = styled.div`
    background: linear-gradient(145deg, var(--main-color) 30%, var(--main-particle-2) 100%);
    width: 48px;
    height: 48px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: 200% 200%;
    background-position: 25%;
    transition: background-position .2s ease-in-out;

    &:hover {
        cursor: pointer;
        background-position: 100%;
    }
`;

const SearchbarDivide = styled.div`
    width: 1%;
    height: 50%;
    margin: 25% 0;
    display: flex;
    justify-content: center;
    opacity: 25%;

    &::before {
        content: "";
        width: 1px;
        height: 100%;
        background-color: white;
    }
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: 20px auto;
`;

export default function Find() {
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [price, setPrice] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = async () => {
      try {
        let minPrice = price ? parseFloat(price) : null;
        let maxPrice = minPrice ? minPrice + 100 : null;
        const results = await getLocations(minPrice, maxPrice);
        setSearchResults(results);
        console.log('Search results:', results);
      } catch (error) {
        console.error('Error searching locations:', error);
      }
    };

  return (
    <>
        <Head>
            <title>Spacious | Find</title>
        </Head>

        <Navbar/>
        <ParticleBackground />

        <Title>
          Find a spot
        </Title>

        <CenterHoriz>
            <Searchbar>
                <SearchbarSec style={{width: "49%", paddingLeft: "28px"}} onClick={(e) => e.currentTarget.querySelector("input")?.focus()}>
                    Where to?<input type='text' placeholder='Enter a location...'></input>
                </SearchbarSec>
                <SearchbarDivide />
                {/* try and change to https://www.daterangepicker.com/#example2 */}
                <SearchbarSec style={{ width: "20%" }} onClick={(e) => {
                    const input = e.currentTarget.querySelector("input");
                    if (input) {
                        input.showPicker?.() || input.focus();
                    }
                }}>
                    From when?<input type='date'></input>
                </SearchbarSec>
                <SearchbarDivide />
                <SearchbarSec style={{ width: "20%" }} onClick={(e) => {
                    const input = e.currentTarget.querySelector("input");
                    if (input) {
                        input.showPicker?.() || input.focus();
                    }
                }}>
                    How much?<input type='number' placeholder='$0.00'></input>
                </SearchbarSec>
                <SearchbarDivide />
                <SearchIconContainer>
                    <SearchbarSearch onClick={handleSearch}>
                        GO
                    </SearchbarSearch>
                </SearchIconContainer>
            </Searchbar>
        </CenterHoriz>

        <CenterHoriz>
            <ResultsContainer>
            {searchResults.map((location, index) => (
            <LocationCard key={index} location={location} />
            ))}
        </ResultsContainer>
        </CenterHoriz>
    </>
  )
}