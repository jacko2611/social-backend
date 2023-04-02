const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// Home route for users
router.route('/')
.get(getAllUsers)
.post(createUser);

// Gets the user by ID
router.route('/:userId')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// Gets the friend by ID
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);

module.exports = router;