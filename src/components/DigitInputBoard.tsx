
import React from 'react';

interface DigitInputBoardProps {
  onDigitClick: (digit: number) => void;
  onClearClick: () => void;
}

const DigitInputBoard: React.FC<DigitInputBoardProps> = ({ onDigitClick, onClearClick }) => {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div>
      <div>
        {digits.map((digit, index) => (
          <React.Fragment key={digit}>
            <button onClick={() => onDigitClick(digit)}>
              {digit}
            </button>
            {index < digits.length - 1 && <span style={{ margin: '0 8px' }} />}
          </React.Fragment>
        ))}
      </div>
      <button onClick={onClearClick}>Clear</button>
    </div>
  );
};

export default DigitInputBoard;

