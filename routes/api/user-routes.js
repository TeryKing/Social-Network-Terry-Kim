const router = require('express').Router();
//making routes for users
const {
    getAllUsers,
    getUsersById,
    createUsers,
    addFriend,
    deleteFriend,
    deleteUsers,
    updateUsers
} = require('../../controllers/user-controller');

router.route('/').get(getAllUsers).post(createUsers);
router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports=router;