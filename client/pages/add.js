import { useState } from "react";
import DropdownList from '../components/DropdownList';
import FormInput from "../components/FormInput";
import newRequest from '../utils/newRequest';

const inputs = [
  {
      id: 1,
      name: "fname",
      type: "text",
      placeholder: "First name",
      label: "First name",
      err: "First name should be 3-16 characters",
      required: true,
      pattern: `^[A-Za-z0-9]{3,16}$`
  },
  {
      id: 2,
      name: "lname",
      type: "text",
      placeholder: "Last name",
      label: "Last name",
      err: "Last name should be 3-16 characters",
      required: true
  },
  {
      id: 3,
      name: "phone",
      type: "tel",
      placeholder: "Phone",
      label: "Phone",
      err: "It should be a valid phone number",
      required: true
  },
  {
      id: 4,
      name: "age",
      type: "number",
      placeholder: "Age",
      label: "Age",
      err: "Age should be a valid number",
      required: true
  },
  {
      id: 5,
      name: "dept",
      form: "employee",
      options: ["HR", "Product", "Sales"],
      label: "Department",
  },
  {
      id: 6,
      name: "status",
      form: "employee",
      options: ["Contract", "Full-time", "Remote"],
      label: "Status",
  }
];

export default function Add() {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    phone: "",
    age: "",
    dept: "HR",
    status: "Contract"
  });

  const [check, setCheck] = useState(true);
  const [id, setId] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(values);
      const path = (check) ? "/update" : "/add";
      const data = (check) ? {values, id} : {values};
      // console.log(path, data);
      const res = await newRequest.post(path, data);
      console.log(res);
    }
    catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="ml-16 flex flex-col justify-center items-center
                    h-screen">
      
      {/* Toggle Switch */}
      <div className="flex items-center gap-x-1">
        <div>Add</div>
        <div className="my-1">
          <label className="switch">
            <input
              type="checkbox"
              checked={check}
              onChange={(e) => setCheck(!check)} />
            <span className="slider round"></span>
          </label>
        </div>
        <div>Edit</div>
      </div>


      <form
        className="w-1/4 bg-gray-500 p-3 rounded-xl"
        onSubmit={handleSubmit}>
        
        {(!check) || 
          (<FormInput
            label="ID" 
            value={id}
            placeholder="E.g. 642040efe060c1197686f21c" 
            onChange={e => setId(e.target.value)}
            />)
        }
        
        {inputs.map(input =>

          input.form ?
            (<DropdownList
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />)
            :
            (<FormInput
              {...input}
              value={values[input.name]}
              onChange={onChange} />)
        )}
        <button
          className="text-lg font-bold w-full h-50 
          cursor-poiner rounded-md">Submit</button>
      </form>
    </div>
  );
}