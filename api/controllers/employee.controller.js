import Employee from "../models/employee.model.js";
import newRequest from "./utils/geolocation.js";

export const findEmp = async (req, res) => {
    let arr = []
    try {
        for (let key in req.query) {
            let x = await Employee.distinct(key)
            arr.push(x)
            for (let ele of x) {
                const query = {}
                query[key] = ele; // need to set query dynamically
                const records = await Employee.find(query);
                arr.push(records.length)
            }
        }
        res.send(arr)
    }
    catch (err) {
        console.log(err);
    }
}

export const getEmp = async (req, res) => {
    try {
        const query = {};
        const arr = await Employee.find(query);
        res.status(200).send(arr);
    }
    catch (error) {
        console.log(error);
        res.status(500).send();
    }
}

export const createEmp = async (req, res) => {
    const { city, state, country } = req.body.values;
    const path = `search?format=json&q=${city},${state},${country}`

    const { data } = await newRequest.get(path)
    const { lat, lon } = data[0]

    const newEmp = new Employee({
        ...req.body.values, coordinates: { latitude: lat, longitude: lon }
    });

    console.log(newEmp);

    try {
        const savedEmp = await newEmp.save();
        res.status(201).json(savedEmp._id);
    }
    catch (error) {
        console.log(error);
        res.send();
    }
}

export const updateEmp = async (req, res) => {
    try {
        const emp = await Employee.findById(req.body.id);
        if (!emp)
            res.status(404).send("Employee not found");

        await Employee.updateOne(
            { "_id": req.body.id },
            { $set: { ...req.body.values } }
        );
        res.status(200).send("Employee record has been updated");
    }
    catch (error) {
        console.log(error);
        res.status(500).send();
    }
}

export const deleteEmp = async (req, res) => {
    try {
        await Employee.findOneAndDelete({ "_id": req.body.val });
        res.status(200).send("Employee record has been deleted");
    }
    catch (error) {
        console.log(error);
        res.status(500).send();
    }
}

