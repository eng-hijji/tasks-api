let express=require('express');
let router=express.Router();
let auth=require('../middleware/user.auth');
let users=require('../mockData/users')



router.get('/',auth,(req,res)=>{
console.log('users returned');
res.status(200).json({message:"welcome we'll get you the users as soom as possible"})
})
router.get('/:userId',auth,(req,res)=>{
  let id=req.params.userId;
let user=users.find((item)=>{
  return item.id===id
})
if(!user){
  res.status(401).json({message:'no user found'})
}
res.status(200).json({user:user})
})


module.exports={router}