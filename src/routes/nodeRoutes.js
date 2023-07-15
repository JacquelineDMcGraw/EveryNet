const express = require('express');
const router = express.Router();

const nodeController = require('../../controllers/nodeController');

router.get('/', nodeController.getAllNodes);
router.get('/:id', nodeController.getNodeById);  
router.post('/', nodeController.createNode);
router.put('/:id', nodeController.updateNode);
router.delete('/:id', nodeController.deleteNode);

module.exports = router;
