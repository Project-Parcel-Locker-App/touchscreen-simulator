import React from 'react';

interface CabinetDisplayProps {
  cabinetNumber: string;
}

const CabinetDisplay: React.FC<CabinetDisplayProps> = ({ cabinetNumber }) => {
  const renderRow = (start: number, end: number) => {
    const boxes = Array.from({ length: end - start + 1 }, (_, index) => start + index);

    return (
      <div style={{ display: 'flex' }}>
        {boxes.map((number) => (
          <div
            key={number}
            style={{
              width: '50px',
              height: '50px',
              border: '1px solid black',
              textAlign: 'center',
              backgroundColor: number.toString() === cabinetNumber ? 'lightblue' : 'white',
              margin: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {number}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '400px' }}>
      {renderRow(1, 5)}
      {renderRow(6, 10)}
      {renderRow(11, 15)}
    </div>
  );
};

export default CabinetDisplay;
