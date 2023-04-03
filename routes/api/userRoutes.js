const router = require('express').Router();

const {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// Home route for users
router.route('/')
.get(getUsers)
.post(addUser);

// Gets the user by ID
router.route('/:userId')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// Gets the friend by ID
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;