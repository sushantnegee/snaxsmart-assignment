const express = require('express');
const { getMachineById, createMachines, getMachines, updateMachineById, softDeleteById } = require('../controllers/machineControllers');
const { checkMachine } = require('../middlewares/machineMiddleware');

const router = express.Router();
console.log('routes')

router.post('/',createMachines)
router.get('/',getMachines)
router.get("/:id",checkMachine,getMachineById)
console.log('below  routes')
// router.patch("/:id",checkMachine,updateMachineById)
// router.delete("/:id",checkMachine,softDeleteById)

// router.route('/:id').get(checkMachine,getMachineById)
// router.route('/:id').patch(checkMachine,updateMachineById)
// router.route('/:id').delete(checkMachine,softDeleteById)

module.exports = router

