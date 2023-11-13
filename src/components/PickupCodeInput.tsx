// PickupCodeInput.tsx
import React, { useState } from 'react';

interface PickupCodeInputProps {
  onPickupCodeSubmit: (pickupCode: string) => void;
}

const PickupCodeInput: React.FC<PickupCodeInputProps> = ({ onPickupCodeSubmit }) => {
  const [pickupCode, setPickupCode] = useState('');

  const handleSubmit = () => {
    // Validate and submit pickup code
    if (pickupCode.length === 4) {
      onPickupCodeSubmit(pickupCode);
      setPickupCode('');
    } else {
      // Handle invalid code
      alert('Invalid Pickup Code! Please enter a 4-character code.');
    }
  };

  return (
    <div>
      <h2>Pickup Code Input</h2>
      <input
        type="text"
        value={pickupCode}
        onChange={(e) => setPickupCode(e.target.value)}
        placeholder="Enter Pickup Code"
      />
      <button onClick={handleSubmit}>Submit Pickup Code</button>
    </div>
  );
};

export default PickupCodeInput;
