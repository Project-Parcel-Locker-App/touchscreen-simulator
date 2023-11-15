import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ParcelLockerSelectorProps {
  onSelectLocker: (lockerNumber: number) => void;
}

const ParcelLockerSelector: React.FC<ParcelLockerSelectorProps> = ({ onSelectLocker }) => {
  const [lockers, setLockers] = useState<number[]>([]);

  // Fetch the list of locker numbers from the backend
  useEffect(() => {
    // axios.get('http://localhost:3000/lockers')  // Commented out for now as the backend is incomplete
    //   .then((response) => setLockers(response.data))
    //   .catch((error) => console.error('Error fetching lockers:', error));
    // Set fake locker numbers for now
    const fakeLockers = [101, 102, 103, 104, 105];
    setLockers(fakeLockers);
  }, []);

  const handleLockerSelection = (lockerNumber: number) => {
    // Send the selected locker information to the backend
    axios.post('http://localhost:3000/select-locker', { lockerNumber })  // Specify the actual endpoint here
      .then((response) => {
        // Add necessary processing based on the backend response
        console.log('Locker selection successful:', response.data);
        // Add additional processing here if needed
      })
      .catch((error) => {
        console.error('Error selecting locker:', error);
        // Add error handling here if necessary
      });

    // Notify the parent component of the locker selection
    onSelectLocker(lockerNumber);
  };

  return (
    <div>
      <p>Select parcel locker for simulation</p>
      {lockers.map((lockerNumber) => (
        <button key={lockerNumber} onClick={() => handleLockerSelection(lockerNumber)}>
          Parcel Locker {lockerNumber}
        </button>
      ))}
    </div>
  );
};

export default ParcelLockerSelector;
