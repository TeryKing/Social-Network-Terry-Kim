const router = require('express').Router();

const {
    getAllUsers,
    getUsersByID,
    createUsers,
    addFriend,
    deleteFriend,
    deleteUsers,
    updateUsers,
} = require('../../controllers/user-controller');

router.route('/').get(getAllUsers).post(createUsers);
router.route('/:id').get(getUsersByID).put(updateUsers).delete(deleteUsers);
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports=router;