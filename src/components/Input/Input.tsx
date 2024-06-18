import React from 'react';

interface InputProps {
  value: string;
  setValue: (value: string) => void;
  label: string;
}

const Input: React.FC<InputProps> = ({ value, setValue, label }) => {
  return (
    <>
      <label className="block mb-2">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="p-2 border rounded w-full mb-4"
      />
    </>
  );
};

export default Input;
