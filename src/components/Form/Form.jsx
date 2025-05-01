import { useState } from 'react';

export function MyForm() {
  const [inputValue, setInputValue] = useState('');

 const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted value:', inputValue);
    // Do something with the value
  };

  return (
    <form >
      <label>
        Input:
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleChange} 
        />
      </label>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}