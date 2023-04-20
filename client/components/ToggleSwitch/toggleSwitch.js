import './toggleSwitch.css';
import { useState } from 'react';

const ToggleSwitch = () => {
  const [state, setState] = useState(false);

  return (
    <div className="flex items-center gap-x-1"> 
      <div>Add</div>
      <div className="my-1">
        <label className="switch">
          <input 
            type="checkbox" 
            checked={state}
            onChange={(e) => setState(!state)}/>
          <span className="slider round"></span>
        </label>
      </div>
      <div>Edit</div>
    </div>
  );
}

export default ToggleSwitch;
