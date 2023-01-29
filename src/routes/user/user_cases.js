//routers 

const { Router } = require("express");
const router = Router();
const response = require("../../network/response");
const config = require("../../../config");


router.get('/login',
(req,res) =>{
    let query = "SELECT * FROM user";
    config.api.db.query(query, function (err, result) {      
        if(err) throw err;
        res.json(result[0]);
    });
   
});

router.post('/crear', (req,res) =>{
    const {id, name} =  req.body;

    if(id && name){
        const newUser = {...req.body};
        config.api.db.push(newUser);
        res.json(config.api.db);
    }else{
        res.send("error");

    }

});


router.delete('/:id',(req,res) =>{
    const {id} = req.params;
    
    underscore.each(config.api.db, (user,i) =>{

        if(user.id == id){
            config.api.db.splice(i,1);
        }
    });
     res.send(config.api.db);
});

module.exports = router;