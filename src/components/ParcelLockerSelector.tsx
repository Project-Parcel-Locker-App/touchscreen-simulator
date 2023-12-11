import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

interface ParcelLockerSelectorProps {
  onSelectLocker: (lockerNumber: number) => void;
}

const LockerButton = styled.button`
  margin: 10px;  // ボタンの間隔を調整する値
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;  // マウスオーバー時の色の変化をアニメーション化
  &:hover {
    background-color: #870939;  
    color: #fff;  
  }
`;

const ParcelLockerSelector: React.FC<ParcelLockerSelectorProps> = ({ onSelectLocker }) => {
  const [lockers, setLockers] = useState<number[]>([]);

  useEffect(() => {
    const fakeLockers = [1, 2, 3, 4, 5];
    setLockers(fakeLockers);
  }, []);

  const handleLockerSelection = (lockerNumber: number) => {
    axios.post('http://localhost:3000/select-locker', { lockerNumber })
      .then((response) => {
        console.log('Locker selection successful:', response.data);
      })
      .catch((error) => {
        console.error('Error selecting locker:', error);
      });

    onSelectLocker(lockerNumber);
  };

  return (
    <div>
      <p>Select parcel locker for simulation</p>
      {lockers.map((lockerNumber) => (
        <LockerButton key={lockerNumber} onClick={() => handleLockerSelection(lockerNumber)}>
          Locker {lockerNumber}
        </LockerButton>
      ))}
    </div>
  );
};

export default ParcelLockerSelector;
