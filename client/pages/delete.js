import { useState } from 'react';
import newRequest from '../utils/newRequest.js';

export default function Delete() {
  const [val, setVal] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/del", {val});
    }
    catch(err) {
      console.log(err);
    }
  }

  return(
    <form 
      onSubmit={handleSubmit} 
      className="flex justify-center item-center bg-gray-500">
      <input
        className="p-3 my-2.5 mx-1 rounded-md"
        type="text" 
        placeholder="Employee id" 
        onChange={(e) => setVal(e.target.value)}/>
      <button className="text-lg font-bold 
        h-50 cursor-poiner rounded-md">Submit</button>    
    </form>
  );
}
