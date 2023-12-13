// App.tsx
import React, { useState } from 'react';
import ParcelLockerSelector from './components/ParcelLockerSelector.tsx';
import PickupDoor from './components/PickupDoor.tsx';
import DeliveryDoor from './components/DeliveryDoor.tsx';
import CodeInput from './components/CodeInput.tsx';
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

  const handleCodeSubmit = (code: string) => {
    if (code === '1234') {
      setAction('receive');
    } else if (code === '5678') {
      setAction('send');
    } else {
      alert('Invalid Action Code! Please enter "1234" for receive or "5678" for send.');
    }
  };

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
            <CodeInput onCodeSubmit={handleCodeSubmit} />
          )}
          {action === 'send' && (
            <PickupDoor
              pickupCode="your_pickup_code"  // 実際のピックアップコードを追加
              correctLockerNumber={2683}      // 実際の正しいロッカーナンバーを追加
              onPickupDoorClose={handlePickupDoorClose}
            />
          )}
          {action === 'receive' && (
            <DeliveryDoor
              deliveryCode="your_delivery_code"  // 実際のデリバリーコードを追加
              onDeliveryDoorClose={handleDeliveryDoorClose}
            />
)}
        </>
      )}
    </>
  );
}

export default App;
