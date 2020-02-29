const Sequelize = require('sequelize');
const path = './csv/TED-22kData.csv'
const csv = require('csvtojson')
const  tedModel = require('../models/tedModel')
const sequelize = new Sequelize('postgres', 'nikhila', 'nikhila123', {
    host: 'localhost',
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
const tedData = tedModel(sequelize,Sequelize)
sequelize
    .sync({
        force:false
    })
    .then(() => {
        console.log('Connection has been established successfully.');
        csv().fromFile(path).then((data)=>{
            tedData.findAll().then((res)=>{
                if(res.length<=0){
                    tedData.bulkCreate(data).then(()=>{console.log("res")}).catch((err)=>{console.log(err)})
                }else{
                    console.log(res.length)
                }
            }).catch((err)=>{console.log(err)})
        }).catch(err=>console.log("err"))
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = { sequelize,tedData }