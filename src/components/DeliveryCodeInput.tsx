// DeliveryCodeInput.tsx
import React, { useState } from 'react';

interface DeliveryCodeInputProps {
  onDeliveryCodeSubmit: (deliveryCode: string) => void;
}

const DeliveryCodeInput: React.FC<DeliveryCodeInputProps> = ({ onDeliveryCodeSubmit }) => {
  const [deliveryCode, setDeliveryCode] = useState('');

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
        onChange={(e) => setDeliveryCode(e.target.value)}
        placeholder="Enter Delivery Code"
      />
      <button onClick={handleSubmit}>Submit Delivery Code</button>
    </div>
  );
};

export default DeliveryCodeInput;
