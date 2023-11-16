import React from 'react';

interface CabinetDisplayProps {
  cabinetNumber: string;
}

const CabinetDisplay: React.FC<CabinetDisplayProps> = ({ cabinetNumber }) => {
  const renderColumn = (start: number, end: number) => {
    const boxes = Array.from({ length: end - start + 1 }, (_, index) => start + index);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '8px' }}>
        {boxes.map((number) => (
          <div
            key={number}
            style={{
              width: '50px',
              height: '50px',
              border: '1px solid black',
              textAlign: 'center',
              backgroundColor: number.toString() === cabinetNumber ? 'lightblue' : 'white',
              marginBottom: '8px', 
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
    <div style={{ display: 'flex', justifyContent: 'center', width: '400px' }}>
      {renderColumn(1, 4)}
      {renderColumn(5, 8)}
      {renderColumn(9, 12)}
      {renderColumn(13, 15)}
    </div>
  );
};

export default CabinetDisplay;
