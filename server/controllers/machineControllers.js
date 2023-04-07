const Machine = require('../models/machineModel')


async function checkMachine(req, res, next) {
    let machine;
    try {
      machine = await Machine.findById(req.params.id);
      if (machine == null || machine.isDeleted) {
        return res.status(404).json({ message: 'Machine not found' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    res.machine = machine;
    next();
  }

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

module.exports = {createMachines,getMachines,getMachineById,updateMachineById,checkMachine}
