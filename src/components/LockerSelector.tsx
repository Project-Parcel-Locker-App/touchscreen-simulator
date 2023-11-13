// LockerSelector.tsx
import React, { useState } from 'react';

const LockerSelector: React.FC = () => {
  const [selectedLocker, setSelectedLocker] = useState<number | null>(null);

  const handleLockerSelect = (lockerNumber: number) => {
    setSelectedLocker(lockerNumber);
  };

  return (
    <div>
      <h2>Select Parcel Locker</h2>
      {[1, 2, 3, 4, 5].map((lockerNumber) => (
        <button key={lockerNumber} onClick={() => handleLockerSelect(lockerNumber)}>
          Locker {lockerNumber}
        </button>
      ))}
      {selectedLocker && <p>Selected Locker: {selectedLocker}</p>}
    </div>
  );
};

export default LockerSelector;
