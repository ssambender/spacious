import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ParticleBackground from "@/components/Dashboard/particlebackground"
import React, { useEffect, useRef } from 'react';

const NavbarBG = styled.div`
    z-index: 1;
    position: absolute;
    top: 0;
    width: 100%;
    height: 65px;
    background: #191919;
`;

const MapContainer = styled.div`
  height: calc(100vh - 65px);
  margin-top: 65px;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  /* filter: brightness(0.5); */
`;

export default function Map() {
    const router = useRouter();
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
    <>
        <Head>
            <title>Spacious | Map</title>
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

        <Navbar/>
        <NavbarBG />

        <ParticleBackground />

        <MapContainer id="map" />
    </>
  )
}