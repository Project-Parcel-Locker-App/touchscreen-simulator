// PickupDoor.tsx
import React from 'react';

interface PickupDoorProps {
  onPickupDoorClose: () => void;
}

const PickupDoor: React.FC<PickupDoorProps> = ({ onPickupDoorClose }) => {
  return (
    <div>
      {/* TS2: Enter pickup code */}
      <p>DOOR XX OPEN FOR PICKUP</p>
      {/* Assume there's a button to close the door */}
      <button onClick={onPickupDoorClose}>CLOSE CABINET DOOR</button>
    </div>
  );
};

export default PickupDoor;
