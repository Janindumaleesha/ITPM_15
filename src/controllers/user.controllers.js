//import user modals
const usermodals = require('../modals/user.modals')
//import auth modals
const authmodals = require('../modals/auth.modals')

//user register
userRegister=async( req , res )=>{

    try{
        const alreadyUser = await usermodals.findOne({email:req.body.email})
        if(!alreadyUser){
            const userRegister = await usermodals.create(req.body)
            const authUser = await authmodals.create({userId:userRegister._id,password:req.body.password})
            if(userRegister && authUser){
                res.status(201).send(userRegister)
            }
            else{
                res.status(404).send('Something went wrong')
            }
            // UserModal.create(req.body).then((user)=>{
            //     res.send(user)
            // }).catch((err)=>{
            //     res.status(201).send(err)
            // })
        }
        else{
            res.status(401).send('This user is already existed')
        }
    }
    catch(err){
        req.status(500).send(err)
    }

}

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
    userRegister,
    userLogin
}