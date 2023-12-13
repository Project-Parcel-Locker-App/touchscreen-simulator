// PickupDoor.tsx
import React, { useState, useEffect } from 'react';
import CabinetDisplay from './CabinetDisplay';
import axios from 'axios';
import ThankYouPage from './error/ThankYouPage';
import IncorrectLockerPage from './error/IncorrectLockerPage'; // 追加

interface PickupDoorProps {
  onPickupDoorClose: () => void;
  pickupCode: string;
  correctLockerNumber: number; 
  
  // 追加: 正しいロッカー番号
}

const PickupDoor: React.FC<PickupDoorProps> = ({ onPickupDoorClose, pickupCode, correctLockerNumber }) => {
  const fakeDoorNumber = Math.floor(Math.random() * 15) + 1;

  const [doorNumber, setDoorNumber] = useState<number | null>(null);
  const [pickupStatus, setPickupStatus] = useState<string | null>(null);
  const [pickupCompleted, setPickupCompleted] = useState(false);
  const [incorrectLocker, setIncorrectLocker] = useState(false); // 追加
 

  useEffect(() => {
    setDoorNumber(fakeDoorNumber);
  }, []);

  const handlePickupDoorClose = () => {
    axios.post('http://localhost:3000/confirm-pickup', { pickupCode, doorNumber })
      .then((response) => {
        setPickupStatus(response.data.status);
      })
      .catch((error) => {
        console.error('Error confirming pickup:', error);
      });

    onPickupDoorClose();
    
    if (doorNumber === correctLockerNumber) {
      setPickupCompleted(true);
    } else {
      setIncorrectLocker(true);
    }
  };

  return (
    <div>
      {incorrectLocker ? (
        <IncorrectLockerPage />
      ) : pickupCompleted ? (
        <ThankYouPage />
      ) : (
        <>
          {doorNumber && <p>DOOR {doorNumber} OPEN FOR PICKUP</p>}
          {pickupStatus && <p>Status: {pickupStatus}</p>}
          {doorNumber && <CabinetDisplay cabinetNumber={doorNumber.toString()} />}
          <button onClick={handlePickupDoorClose}>CLOSE PICKUP DOOR</button>
        </>
      )}
    </div>
  );
};

export default PickupDoor;
