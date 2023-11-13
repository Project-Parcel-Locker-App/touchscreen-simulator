// DigitInputBoard.tsx
import React from 'react';

interface DigitInputBoardProps {
  onDigitClick: (digit: number) => void;
  onClearClick: () => void;
}

const DigitInputBoard: React.FC<DigitInputBoardProps> = ({ onDigitClick, onClearClick }) => {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="digit-input-board">
      {digits.map((digit) => (
        <button key={digit} onClick={() => onDigitClick(digit)}>
          {digit}
        </button>
      ))}
      <button onClick={onClearClick}>Clear</button>
    </div>
  );
};

export default DigitInputBoard;
