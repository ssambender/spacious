import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Link from 'next/link';
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
    background: linear-gradient(145deg, var(--main-color-1) 30%, var(--main-particle-2) 100%);
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

export default function Find() {
  return (
    <>
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
                    To when?<input type='date'></input>
                </SearchbarSec>
                <SearchbarDivide />
                <SearchIconContainer>
                    <SearchbarSearch>
                        a
                    </SearchbarSearch>
                </SearchIconContainer>
            </Searchbar>
        </CenterHoriz>
    </>
  )
}
