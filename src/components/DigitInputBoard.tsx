import React from 'react';

interface DigitInputBoardProps {
  onDigitClick: (digit: number) => void;
  onClearClick: () => void;
}

const DigitInputBoard: React.FC<DigitInputBoardProps> = ({ onDigitClick, onClearClick }) => {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        {digits.slice(0, 3).map((digit) => (
          <button key={digit} onClick={() => onDigitClick(digit)} style={{ width: '50px', height: '50px', margin: '5px' }}>
            {digit}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        {digits.slice(3, 6).map((digit) => (
          <button key={digit} onClick={() => onDigitClick(digit)} style={{ width: '50px', height: '50px', margin: '5px' }}>
            {digit}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        {digits.slice(6, 9).map((digit) => (
          <button key={digit} onClick={() => onDigitClick(digit)} style={{ width: '50px', height: '50px', margin: '5px' }}>
            {digit}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        
        <button onClick={() => onDigitClick(0)} style={{ width: '50px', height: '50px', margin: '5px' }}>
          0
        </button>
        <button onClick={onClearClick} style={{ width: '110px', height: '50px', margin: '5px' }}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default DigitInputBoard;




/* 
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

 */