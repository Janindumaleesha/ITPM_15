//import auth modals
const authmodals = require('../modals/auth.modals')

//user login
userLogin=async( req , res )=>{

    try{
        const {email,password} = req.body

        const loginUser = await usermodals.findOne({email:email,password:password})
        if(loginUser){
            res.status(200).send('User login successfull')
        }
        else{
            res.status(404).send('User login unsuccessfull')
        }
        // UserModal.findOne({email:email,password:password}).then((user)=>{
        //     if(user){
        //         res.send('User login successfull')
        //     }
        //     else{
        //         res.send('User login unsuccessfull')
        //     }
        // })
    }
    catch(err){
        req.status(500).send(err)
    }

}

module.exports = {
    userLogin
}