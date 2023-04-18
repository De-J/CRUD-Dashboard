import mongoose from "mongoose";
const { Schema } = mongoose;

const EmpSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
},
    { 
        timestamps: true
    }
);

export default mongoose.model("Employee", EmpSchema)
