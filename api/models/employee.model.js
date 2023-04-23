import mongoose from "mongoose";
const { Schema } = mongoose;

const coordinates = new Schema({
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
})

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
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    img_url: {
        type: String,
        required: true
    },
    coordinates: {
        type: coordinates,
        required: true
    }
},
    { 
        timestamps: true
    }
);

export default mongoose.model("Employee", EmpSchema)