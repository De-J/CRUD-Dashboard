import Employee from "../models/employee.model.js";

export const getEmp = async (req, res) => {
    // console.log(req);
    try {
        const query = {};
        const arr = await Employee.find(query);
        // console.log(arr);
        res.status(200).send(arr);
    }
    catch (error) {
        console.log(error);
        res.status(500).send();
    }
}

export const createEmp = async (req, res) => {
    console.log(req);
    const newEmp = new Employee({
        ...req.body.values
    });

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
        console.log(req);
        await Employee.findOneAndDelete({ "_id": req.body.val });
        res.status(200).send("Employee record has been deleted");
    }
    catch (error) {
        console.log(error);
        res.status(500).send();
    }
}

