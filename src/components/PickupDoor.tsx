import React, { useState, useEffect } from 'react';
import CabinetDisplay from './CabinetDisplay';
import axios from 'axios';

interface PickupDoorProps {
  onPickupDoorClose: () => void;
  pickupCode: string;
}

const PickupDoor: React.FC<PickupDoorProps> = ({ onPickupDoorClose, pickupCode }) => {
  // Assigning a temporary door number between 1 and 15
  const fakeDoorNumber = Math.floor(Math.random() * 15) + 1;

  const [doorNumber, setDoorNumber] = useState<string | null>(null);
  const [pickupStatus, setPickupStatus] = useState<string | null>(null);

  useEffect(() => {
    // Fetch door number from the backend
    // axios.get('http://localhost:3000/door-number') // Replace with actual endpoint
    //   .then((response) => {
    //     // Assuming the door number is in the response data
    //     setDoorNumber(response.data.doorNumber);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching door number:', error);
    //   });

    // Use the temporary door number
    setDoorNumber(fakeDoorNumber.toString());
  }, []); // Empty dependency array to ensure the effect runs only once

  const handlePickupDoorClose = () => {
    // Send HTTP POST request to confirm pickup
    axios.post('http://localhost:3000/confirm-pickup', { pickupCode, doorNumber }) // Replace with actual endpoint
      .then((response) => {
        setPickupStatus(response.data.status);
      })
      .catch((error) => {
        console.error('Error confirming pickup:', error);
      });

    // Close the pickup door
    onPickupDoorClose();
  };

  return (
    <div>
      {doorNumber && <p>DOOR {doorNumber} OPEN FOR PICKUP</p>}
      {pickupStatus && <p>Status: {pickupStatus}</p>}
      {doorNumber && <CabinetDisplay cabinetNumber={doorNumber} />} {/* Use CabinetDisplay for consistency */}
      <button onClick={handlePickupDoorClose}>CLOSE PICKUP DOOR</button>
    </div>
  );
};

export default PickupDoor;
