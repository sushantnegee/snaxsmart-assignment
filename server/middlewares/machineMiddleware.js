const Machine = require('../models/machineModel')

const checkMachine= async(req, res, next)=> {
    console.log('inside checkmachine middleware')
    let machine;
    try {
      machine = await Machine.findById(req.params.id);
      if (machine == null || machine.isDeleted) {
        // return res.status(404).json({ message: 'Machine not found' });
        throw new Error('Machine not found')
      }
    } catch (err) {
    //   return res.status(500).json({ message: err.message });
    throw new Error(err.message)
    }
    
    res.machine = machine;
    next();
  }

 module.exports = {checkMachine}