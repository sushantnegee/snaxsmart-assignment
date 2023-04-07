const Machine = require('../models/machineModel')

const createMachines = async (req,res)=>{
    try {
        const machine = await Machine.create(req.body);
        res.status(201).json(machine);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
}

const getMachines = async ()=>{
    try {
        const machines = await Machine.find();
        res.json(machines);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}

const getMachineById = async (req,res)=>{
    res.json(res.machine);
}

const updateMachineById = async (req, res) => {
    try {
      const updatedMachine = await res.machine.updateOne(req.body);
      res.json(updatedMachine);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  const softDeleteById = async (req, res) => {
    try {
      await res.machine.updateOne({ isDeleted: true });
      res.json({ message: 'Machine deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

module.exports = {createMachines,getMachines,getMachineById,updateMachineById,softDeleteById}
