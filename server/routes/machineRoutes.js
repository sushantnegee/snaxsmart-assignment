const express = require('express');
const { getMachineById, createMachines, getMachines, checkMachine, updateMachineById } = require('../controllers/machineControllers');
const router = express.Router();

router.post('/machines',createMachines)
router.get('/machines',getMachines)
router.get('/machines:id',checkMachine,getMachineById)
router.patch('/machines:id',checkMachine,updateMachineById)
