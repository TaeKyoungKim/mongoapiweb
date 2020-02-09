var {Contact} = require('./contactModel')
var {TodoContact} = require('./contactModel')
exports.index = (req , res)=>{
    Contact.find((err, contacts)=>{
            if(err){
                res.json({
                    status:"error",
                    message:err
                })
            }else {
                res.json({
                    status:"success",
                    message:"Contacts retrived successfully",
                    data:contacts
                })
            }
    });
}

exports.newUser =(req, res)=>{
    var contact = new Contact()
    contact.name = req.body.name
    contact.email = req.body.email
    contact.gender = req.body.gender
    contact.phone = req.body.phone

    //save 메서드 사용해서 저장 및 에러 체크
    contact.save((err)=>{
        if(err){
            res.json({
                status:"error",
                message:err
            })
        }else{
            res.json({
                message:"New Contact created",
                data:contact
            })
        }
    })
}
exports.viewTodo = (req, res )=>{
    TodoContact.find((err, contacts) => {
        if (err) {
            res.header("Access-Control-Allow-Origin", "*");
            res.json({
                status: "error",
                message: err
            })
        } else {
            res.header("Access-Control-Allow-Origin", "*");
            res.json({
                status: "200",
                message: "Sucess",
                data: contacts
            })
        }
    })
}

exports.newTodo =(req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    var contact = new TodoContact()
    contact.id = req.body.id 
    contact.title = req.body.title
    contact.status = 'todo'

    //save 메서드 사용해서 저장 및 에러 체크
    contact.save((err)=>{
        if(err){
            res.json({
                status:"error",
                message:err
            })
        }else{
            res.json({
                message:"New Contact created",
                data:contact
            })
        }
    })
}
exports.view =(req , res)=>{
    Contact.findById(req.params.contact_id,(err, result)=>{
        if(!err){
            res.json({
                message:"Contact details loading ...",
                data:result
            })
        } else{
            res.json({
                message:"Contact details failed ..",
                data:err
            })
        }
    })
}

exports.update = (req, res)=>{
    Contact.findById(req.params.contact_id ,(err , result)=>{
        if(!err){
            result.name = req.body.name ? req.body.name : result.name
            result.email = req.body.email
            result.gender = req.body.gender
            result.phone = req.body.phone
            result.save((err)=>{
                if(err){
                    res.json({
                        status:"error",
                        message:err
                    })
                }else{
                    res.json({
                        message:"Contact Modified",
                        data:result
                    })
                }
            })
        } else {
            res.json({
                message:"error",
                data:err
            })
        }
    })
}

exports.delete = (req ,res)=>{
    Contact.remove({_id:req.params.contact_id},(err , result)=>{
        if(!err){
            res.json({
                status:"success",
                message:"contact delete successfull!!"
            })
        } else {
            res.json({
                status:"failed",
                message:err
            })
        }
    })
}