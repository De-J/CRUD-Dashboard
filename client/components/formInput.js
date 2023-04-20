import { useState } from "react";

const FormInput = (props) => {
    const [focus, setFocus] = useState(false);
    const { id, err, label, ...inputTagAttr } = props;

    const handleFocus = (e) => {
        setFocus(true);
    };

    return (
        <div className="flex flex-col">
            <label className="text-xs">{label}</label>
                <input className="p-2 rounded-md my-1 mx-0"
                  {...inputTagAttr} 
                  onBlur={handleFocus} 
                  focus={focus.toString()}/>
            
            <span className="text-xs p-1 text-red-500 hidden">{err}</span>
        </div>
    );
};

export default FormInput;
