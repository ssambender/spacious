import React from 'react';
import styled from 'styled-components';

const LocationContainer = styled.div`
  background-color: var(--background);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  width: 300px;
  color: white;
`;

const LocationTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.2em;
`;

const LocationInfo = styled.p`
  margin: 5px 0;
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.7);
`;

const LocationCard = ({ location }) => {
    const coordinatesArray = location.coordinates.split(',');
    const joinedCoordinates = coordinatesArray.join(', ');

    return (
        <LocationContainer>
            <LocationTitle>{location.title}</LocationTitle>
            <LocationInfo>Coordinates: {joinedCoordinates}</LocationInfo>
            <LocationInfo>Seller: {location.seller}</LocationInfo>
            <LocationInfo>
                Start Date: {new Date(location.dateStart * 1000).toLocaleDateString()}
            </LocationInfo>
            <LocationInfo>
                End Date: {new Date(location.dateEnd * 1000).toLocaleDateString()}
            </LocationInfo>
            <LocationInfo>Price: ${location.price}</LocationInfo>
        </LocationContainer>
    );
};

export default LocationCard;
