const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize');
const tedData = require('../config/database').tedData
router.get('/getData',async(req,res)=>{
     await tedData.findAll().then((result)=>{
         res.status( 200 ).json(result)
        })
        .catch((err)=>res.status( 400 ).send("err"))
})
router.get(`/search/:searchValue`,async(req,res)=>{
    await tedData.findAll({
        where:{
            [Sequelize.Op.or]: [{ main_speaker:req.params.searchValue}, {event: req.params.searchValue}]
        }
    }).then((result)=>{res.status(200).json(result)}).catch((err)=>res.status(400).send("Searched value is not available"))
})
router.get(`/details/:id`, async(req,res)=>{
    console.log('h-------')
    await tedData.findAll({
        where:{
            id:req.params.id
        }
    }).then((result)=>{res.status(200).json(result)}).catch((err)=>{res.status( 400 ).send("err")})
})
module.exports = router