
import React, { useState } from 'react';
import DigitInputBoard from './DigitInputBoard';

interface DeliveryCodeInputProps {
  onDeliveryCodeSubmit: (deliveryCode: string) => void;
}

const DeliveryCodeInput: React.FC<DeliveryCodeInputProps> = ({ onDeliveryCodeSubmit }) => {
  const [deliveryCode, setDeliveryCode] = useState<string[]>(Array(4).fill(''));

  const handleDigitClick = (digit: number) => {
    const updatedCode = [...deliveryCode];
    const firstEmptyIndex = updatedCode.findIndex((value) => value === '');

    if (firstEmptyIndex !== -1) {
      updatedCode[firstEmptyIndex] = digit.toString();
      setDeliveryCode(updatedCode);
    }
  };

  const handleClearClick = () => {
    setDeliveryCode(Array(4).fill(''));
  };

  const handleSubmit = () => {
    // Validate and submit delivery code
    if (deliveryCode.every((digit) => digit !== '')) {
      onDeliveryCodeSubmit(deliveryCode.join(''));
      setDeliveryCode(Array(4).fill(''));
    } else {
      // Handle invalid code
      alert('Invalid Delivery Code! Please enter a 4-digit code.');
    }
  };

  return (
    <div>
      <h2>Delivery Code Input</h2>
      <div className="code-container">
        {deliveryCode.map((digit, index) => (
          <span key={index} style={{ margin: '0 4px' }}>{digit || '_'}</span>
        ))}
      </div>
      <DigitInputBoard onDigitClick={handleDigitClick} onClearClick={handleClearClick} />
      <button onClick={handleSubmit}>Submit Delivery Code</button>
    </div>
  );
};

export default DeliveryCodeInput;
