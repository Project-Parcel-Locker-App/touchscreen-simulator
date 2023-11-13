// DeliveryCodeInput.tsx
import React, { useState } from 'react';
import DigitInputBoard from './DigitInputBoard';

interface DeliveryCodeInputProps {
  onDeliveryCodeSubmit: (deliveryCode: string) => void;
}

const DeliveryCodeInput: React.FC<DeliveryCodeInputProps> = ({ onDeliveryCodeSubmit }) => {
  const [deliveryCode, setDeliveryCode] = useState('');

  const handleDigitClick = (digit: number) => {
    if (deliveryCode.length < 4) {
      setDeliveryCode((prevCode) => prevCode + digit.toString());
    }
  };

  const handleClearClick = () => {
    setDeliveryCode('');
  };

  const handleSubmit = () => {
    // Validate and submit delivery code
    if (deliveryCode.length === 4) {
      onDeliveryCodeSubmit(deliveryCode);
      setDeliveryCode('');
    } else {
      // Handle invalid code
      alert('Invalid Delivery Code! Please enter a 4-character code.');
    }
  };

  return (
    <div>
      <h2>Delivery Code Input</h2>
      <input
        type="text"
        value={deliveryCode}
        readOnly
        placeholder="Enter Delivery Code"
      />
      <DigitInputBoard onDigitClick={handleDigitClick} onClearClick={handleClearClick} />
      <button onClick={handleSubmit}>Submit Delivery Code</button>
    </div>
  );
};

export default DeliveryCodeInput;
