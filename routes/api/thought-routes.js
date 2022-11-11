const router = require('express').Router();
//making routes for thoughts and reactions
const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    addReaction,
    deleteReaction,
    deleteThoughts,
    updateThoughts,
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts);
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts);
router.route('/:userId').post(createThoughts);
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports=router;