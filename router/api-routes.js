var router = require('express').Router();

var contactController = require('../utils/contactController')
//default api response

router.get('/',(req, res)=>{
    res.json({
        status:"API It's Working",
        message:"Wecome to RESTHUB API world"
    })
})

router.route('/todo')
    .get(contactController.viewTodo)
    .post(contactController.newTodo)
    
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.newUser)

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete)

// router.get('/contacts/:contact_id' , contactController.view)



module.exports=router;
