import React, { useState, useEffect } from 'react';
import CabinetDisplay from './CabinetDisplay';
import axios from 'axios';

interface DeliveryDoorProps {
  onDeliveryDoorClose: () => void;
  deliveryCode: string;
}


const DeliveryDoor: React.FC<DeliveryDoorProps> = ({ onDeliveryDoorClose, deliveryCode }) => {
  // Assigning a temporary cabinet number between 1 and 15
  const fakeCabinetNumber = Math.floor(Math.random() * 15) + 1;

  const [cabinetNumber, setCabinetNumber] = useState<string | null>(null);
  const [deliveryStatus, setDeliveryStatus] = useState<string | null>(null);

  useEffect(() => {
    // Fetch cabinet number from the backend
    // axios.get('http://localhost:3000/cabinet-number')
    //   .then((response) => {
    //     // Assuming the cabinet number is in the response data
    //     setCabinetNumber(response.data.cabinetNumber);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching cabinet number:', error);
    //   });

    // Use the temporary cabinet number
    setCabinetNumber(fakeCabinetNumber.toString());
  }, []); // Empty dependency array to ensure the effect runs only once

  const handleDeliveryDoorClose = () => {
    //Send HTTP POST request to confirm delivery
    axios.post('http://localhost:3000/confirm-delivery', { deliveryCode, cabinetNumber })
      .then((response) => {
        setDeliveryStatus(response.data.status);
      })
      .catch((error) => {
        console.error('Error confirming delivery:', error);
      });

    // Close the cabinet door
    onDeliveryDoorClose();
  };

  return (
    <div>
      {cabinetNumber && <p>DOOR {cabinetNumber} OPEN FOR DELIVERY</p>}
      {deliveryStatus && <p>Status: {deliveryStatus}</p>}
      {cabinetNumber && <CabinetDisplay cabinetNumber={cabinetNumber} />}
      <button onClick={handleDeliveryDoorClose}>CLOSE CABINET DOOR</button>
    </div>
  );
};

export default DeliveryDoor;
