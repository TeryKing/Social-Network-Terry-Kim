const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsByID,
    createThoughts,
    addReaction,
    deleteReaction,
    deleteThoughts,
    updateThoughts,
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts);
router.route('/:id').get(getThoughtsByID).put(updateThoughts).delete(deleteThoughts);
router.route('/:userId').post(createThoughts);
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports=router;