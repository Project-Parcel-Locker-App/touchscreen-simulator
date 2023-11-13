// ParcelLockerSelector.tsx
import React from 'react';

interface ParcelLockerSelectorProps {
  onSelectLocker: (lockerNumber: number) => void;
}

const ParcelLockerSelector: React.FC<ParcelLockerSelectorProps> = ({ onSelectLocker }) => {
  return (
    <div>
      {/* TS1: Select parcel locker for simulation */}
      <p>Select parcel locker for simulation</p>
      {/* Assume there are five lockers, and you can click on each to select */}
      {Array.from({ length: 5 }, (_, index) => (
        <button key={index} onClick={() => onSelectLocker(index + 1)}>
          Parcel Locker {index + 1}
        </button>
      ))}
    </div>
  );
};

export default ParcelLockerSelector;
