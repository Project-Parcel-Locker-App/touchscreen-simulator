import React, { useState } from 'react';
import axios from 'axios';
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
    const lastFilledIndex = deliveryCode.reduceRight((acc, digit, index) => {
      if (acc === -1 && digit !== '') {
        return index;
      }
      return acc;
    }, -1);

    if (lastFilledIndex !== -1) {
      const updatedCode = [...deliveryCode];
      updatedCode[lastFilledIndex] = '';
      setDeliveryCode(updatedCode);
    }
  };

  const handleSubmit = () => {
    // Validate and submit delivery code
    if (deliveryCode.every((digit) => digit !== '')) {
      const code = deliveryCode.join('');

      // Send HTTP POST request
      axios.post('http://localhost:3000/submit-delivery-code', { code })
        .then((response) => {
          // Add necessary logic based on the backend response
          console.log('Delivery code submission successful:', response.data);
          // Add other necessary logic here if needed
        })
        .catch((error) => {
          console.error('Error submitting delivery code:', error);
          // Add error handling logic here if needed
        });

      // Notify the parent component of the delivery code submission
      onDeliveryCodeSubmit(code);

      // Clear the input
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
