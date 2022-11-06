const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api',apiRoutes);

router.unsubscribe((req,res)=>{
    res.status(404).send('Error has occurred');
});

module.exports = router;