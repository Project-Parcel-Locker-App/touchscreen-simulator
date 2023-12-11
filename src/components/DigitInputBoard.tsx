import React, { useState } from 'react';

interface DigitInputBoardProps {
  onDigitClick: (digit: number) => void;
  onClearClick: () => void;
}

const DigitInputBoard: React.FC<DigitInputBoardProps> = ({ onDigitClick, onClearClick }) => {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [hoveredDigit, setHoveredDigit] = useState<number | null>(null);

  const renderDigitButtons = (start: number, end: number) => (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      {digits.slice(start, end).map((digit) => (
        <button
          key={digit}
          onClick={() => onDigitClick(digit)}
          onMouseEnter={() => setHoveredDigit(digit)}
          onMouseLeave={() => setHoveredDigit(null)}
          style={{
            width: '50px',
            height: '50px',
            margin: '5px',
            backgroundColor: hoveredDigit === digit ? '#870939' : '#D3D3D3',
            color: hoveredDigit === digit ? '#fff' : '#000',
          }}
        >
          {digit}
        </button>
      ))}
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {renderDigitButtons(0, 3)}
      {renderDigitButtons(3, 6)}
      {renderDigitButtons(6, 9)}
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <button
          onClick={() => onDigitClick(0)}
          onMouseEnter={() => setHoveredDigit(0)}
          onMouseLeave={() => setHoveredDigit(null)}
          style={{
            width: '50px',
            height: '50px',
            margin: '5px',
            backgroundColor: hoveredDigit === 0 ? '#870939' : '#D3D3D3',
            color: hoveredDigit === 0 ? '#fff' : '#000',
          }}
        >
          0
        </button>
        <button
          onClick={onClearClick}
          onMouseEnter={() => setHoveredDigit(-1)}  // Use a different value to represent the clear button
          onMouseLeave={() => setHoveredDigit(null)}
          style={{
            width: '110px',
            height: '50px',
            margin: '5px',
            backgroundColor: hoveredDigit === -1 ? '#870939' : '#D3D3D3',
            color: hoveredDigit === -1 ? '#fff' : '#000',
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default DigitInputBoard;
