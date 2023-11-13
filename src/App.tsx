// App.tsx
import React, { useState } from 'react';
import ParcelLockerSelector from './components/ParcelLockerSelector.tsx';
import PickupDoor from './components/PickupDoor.tsx';
import DeliveryDoor from './components/DeliveryDoor.tsx';
import DeliveryCodeInput from './components/DeliveryCodeInput.tsx';
import './App.css';

function App() {
  const [selectedLocker, setSelectedLocker] = useState<number | null>(null);
  const [action, setAction] = useState<'send' | 'receive' | null>(null);

  const handleSelectLocker = (lockerNumber: number) => {
    setSelectedLocker(lockerNumber);
    setAction(null); // Clear the action when a locker is selected
  };

  const handlePickupDoorClose = () => {
    setSelectedLocker(null);
    setAction(null); // Clear the action when the pickup door is closed
  };

  const handleDeliveryDoorClose = () => {
    setSelectedLocker(null);
    setAction(null); // Clear the action when the delivery door is closed
  };

  // Temporary code, use the commented-out section below in practice
  const handleDeliveryCodeSubmit = (deliveryCode: string) => {
    // Check for the receive code (using '1234' as a placeholder)
    if (deliveryCode === '1234') {
      setAction('receive');
    }
    // Check for the send code (using '5678' as a placeholder)
    else if (deliveryCode === '5678') {
      setAction('send');
    } else {
      // Handle the case of an invalid code
      alert('Invalid Action Code! Please enter "1234" for receive or "5678" for send.');
    }
  };

  /* 
  const handleDeliveryCodeSubmit = (deliveryCode: string) => {
    // Check for the send code
    if (deliveryCode === 'send') {
      setAction('send');
    }
    // Check for the receive code
    else if (deliveryCode === 'receive') {
      setAction('receive');
    } else {
      // Handle the case of an invalid code
      alert('Invalid Action Code! Please enter "send" or "receive".');
    }
  };
  */

  return (
    <>
      {selectedLocker === null && (
        <>
          <ParcelLockerSelector onSelectLocker={handleSelectLocker} />
        </>
      )}
      {selectedLocker !== null && (
        <>
          {action === null && (
            <DeliveryCodeInput onDeliveryCodeSubmit={handleDeliveryCodeSubmit} />
          )}
          {action === 'send' && (
            <PickupDoor onPickupDoorClose={handlePickupDoorClose} />
          )}
          {action === 'receive' && (
            <DeliveryDoor onDeliveryDoorClose={handleDeliveryDoorClose} />
          )}
        </>
      )}
    </>
  );
}

export default App;
