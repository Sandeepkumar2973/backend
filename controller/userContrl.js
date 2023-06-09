const userModel = require('../models/userModel');

const registerController = async (req,res) =>{
    try {
        const existUser = await userModel.findOne({email:req.body.email});
        if(existUser){
            return res.status(200).send({
                message:'user Already exist', 
                success:false
            })
        }
        const newUser = new userModel(req.body)
        await newUser.save();
        res.status(201).send({
            message:'Register SuccessFully', success:true,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false, 
            message:`Register Controller${error.message}`});
        }

}
const getAllusersContrlr = async(req, res) => {
    try {
        const users = await userModel.find();
        if(users.length >0){
            res.send(users)
         }else{
            res.send({result:"No users Found"})
         }
        
        // res.status(200).send({
        //     success:true,
        //     message:'users data',
        //     data: users,
        // })
        // console.log(users,'hello');
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error while fetching users',
            error
        })
    }
}


module.exports =  {registerController, getAllusersContrlr};