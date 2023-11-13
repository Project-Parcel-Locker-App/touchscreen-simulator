// DeliveryDoor.tsx
import React from 'react';

interface DeliveryDoorProps {
  onDeliveryDoorClose: () => void;
}

const DeliveryDoor: React.FC<DeliveryDoorProps> = ({ onDeliveryDoorClose }) => {
  return (
    <div>
      {/* TS3: Enter delivery code */}
      <p>DOOR XX OPEN FOR DELIVERY</p>
      {/* Assume there's a button to close the door */}
      <button onClick={onDeliveryDoorClose}>CLOSE CABINET DOOR</button>
    </div>
  );
};

export default DeliveryDoor;
