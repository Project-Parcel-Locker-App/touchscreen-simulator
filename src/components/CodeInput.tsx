import React, { useState } from 'react';
import axios from 'axios';
import DigitInputBoard from './DigitInputBoard';

interface CodeInputProps {
  onCodeSubmit: (Code: string) => void;
}

const CodeInput: React.FC<CodeInputProps> = ({ onCodeSubmit }) => {
  const [Code, setCode] = useState<string[]>(Array(4).fill(''));

  const handleDigitClick = (digit: number) => {
    const updatedCode = [...Code];
    const firstEmptyIndex = updatedCode.findIndex((value) => value === '');

    if (firstEmptyIndex !== -1) {
      updatedCode[firstEmptyIndex] = digit.toString();
      setCode(updatedCode);
    }
  };

  const handleClearClick = () => {
    const lastFilledIndex = Code.reduceRight((acc, digit, index) => {
      if (acc === -1 && digit !== '') {
        return index;
      }
      return acc;
    }, -1);

    if (lastFilledIndex !== -1) {
      const updatedCode = [...Code];
      updatedCode[lastFilledIndex] = '';
      setCode(updatedCode);
    }
  };

  const handleSubmit = () => {
    // Validate and submit delivery code
    if (Code.every((digit) => digit !== '')) {
      const code = Code.join('');

      // Send HTTP POST request
      axios.post('http://localhost:3000/submit-code', { code })
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
      onCodeSubmit(code);

      // Clear the input
      setCode(Array(4).fill(''));
    } else {
      // Handle invalid code
      alert('Invalid Code! Please enter a 4-digit code.');
    }
  };

  return (
    <div>
      <h2>Code Input</h2>
      <div className="code-container">
        {Code.map((digit, index) => (
          <span key={index} style={{ margin: '0 4px' }}>{digit || '_'}</span>
        ))}
      </div>
      <DigitInputBoard onDigitClick={handleDigitClick} onClearClick={handleClearClick} />
      <button onClick={handleSubmit}>Submit Code</button>
    </div>
  );
};

export default CodeInput;
 

/* 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DigitInputBoard from './DigitInputBoard';

interface CodeInputProps {
  onCodeSubmit: (Code: string) => void;
}

const CodeInput: React.FC<CodeInputProps> = ({ onCodeSubmit }) => {
  const [Code, setCode] = useState<string[]>(Array(4).fill(''));

  useEffect(() => {
    return () => {
      // アンマウント時にクリーンアップ処理を行う（例: キャンセル処理など）
    };
  }, []);

  const handleDigitClick = (digit: number) => {
    const updatedCode = [...Code];
    const firstEmptyIndex = updatedCode.findIndex((value) => value === '');

    if (firstEmptyIndex !== -1) {
      updatedCode[firstEmptyIndex] = digit.toString();
      setCode(updatedCode);
    }
  };

  const handleClearClick = () => {
    const lastFilledIndex = Code.reduceRight((acc, digit, index) => {
      if (acc === -1 && digit !== '') {
        return index;
      }
      return acc;
    }, -1);

    if (lastFilledIndex !== -1) {
      const updatedCode = [...Code];
      updatedCode[lastFilledIndex] = '';
      setCode(updatedCode);
    }
  };

  const handleSubmit = async () => {
    const code = Code.map(num => num.toString()).join('');
    console.log('Submitting delivery code:', code);

    try {

      console.log('code', code);
      const response = await axios.post('http://localhost:3000/api/parcels/codes', { parcel_code: code });
      // 成功時の処理
      console.log('Delivery code submission successful:', response.data);
      onCodeSubmit(code);
      setCode(Array(4).fill('')); // 入力をクリア
    } catch (error) {
      // エラー時の処理
      console.error('Error submitting delivery code:', error);
      // alert('Error submitting delivery code. Please try again.'); // またはエラーメッセージ表示
    }
  };

  return (
    <div>
      <h2>Input your Code</h2>
      <div className="code-container">
        {Code.map((digit, index) => (
          <span key={index} style={{ margin: '0 4px' }}>{digit || '_'}</span>
        ))}
      </div>
      <DigitInputBoard onDigitClick={handleDigitClick} onClearClick={handleClearClick} />
      <button onClick={handleSubmit}>Submit Code</button>
    </div>
  );
};

export default CodeInput;
 */