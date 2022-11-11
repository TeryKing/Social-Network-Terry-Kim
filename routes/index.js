const router = require('express').Router();

const apiRoutes = require('./api');
//api connection
router.use('/api',apiRoutes);

router.use((req,res)=>{
    res.send('Wrong Routes');
});

module.exports = router;