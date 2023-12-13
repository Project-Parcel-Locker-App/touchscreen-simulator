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
/* import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

interface ParcelLockerSelectorProps {
  onSelectLocker: (lockerNumber: number) => void;
}

const LockerButton = styled.button`
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #870939;  
    color: #fff;  
  }

  height: 100px;
  width: 200px;
  & > div {
  
`;

const ParcelLockerSelector: React.FC<ParcelLockerSelectorProps> = ({ onSelectLocker }) => {
  const [lockers, setLockers] = useState<any[]>([]);

  useEffect(() => {
    const endpoint = 'http://localhost:3000/api/lockers/';

    axios.get(endpoint)
      .then((response) => {
        const lockerData = response.data;

        if (Array.isArray(lockerData)) {
          setLockers(lockerData.slice(0, 5));
        } else if (typeof lockerData === 'object' && lockerData.lockers) {
          setLockers(lockerData.lockers.slice(0, 5));
        } else {
          console.error('Invalid data format.');
        }
      })
      .catch((error) => {
        console.error('Error fetching lockers:', error);
      });
  }, []);

  return (
    <div>
      <p>Select parcel locker for simulation</p>
      {lockers.map((locker) => (
        <LockerButton key={locker.locker_id} onClick={() => onSelectLocker(locker.locker_id)}>
          <div>
            <div>Locker {locker.locker_id}</div>
            <div>{locker.street}</div>
            <div>{locker.zip_code}</div>
            <div>{locker.city}</div>
          </div>
        </LockerButton>
      ))}
    </div>
  );
};

export default ParcelLockerSelector;
 */