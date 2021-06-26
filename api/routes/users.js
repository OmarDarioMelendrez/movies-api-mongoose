const express = require('express')
const router = express.Router();
const {
    getAllUsers,
    getSigleUser,
    createUser, 
    updateUser, 
    deleteUser
} = require('../controllers/userControllers');
const {auth} = require('../controllers/authControllers');


router.get('/',auth, getAllUsers);
router.get('/:id',auth, getSigleUser);
router.post('/register', createUser);
router.put('/:id',auth, updateUser);
router.delete('/:id',auth, deleteUser);

module.exports = router