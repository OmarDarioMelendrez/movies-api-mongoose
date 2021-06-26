const express = require('express')
const router = express.Router();
const {
    getAllUsers,
    getSigleUser,
    createUser, 
    updateUser, 
    deleteUser
} = require('../controllers/userControllers');

router.get('/', getAllUsers);
router.get('/:id', getSigleUser);
router.post('/register', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router