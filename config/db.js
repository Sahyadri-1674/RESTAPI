const mongoose = require('mongoose')
const colors = require('colors')

const connectToDB = async() => {
    try{
       await  mongoose.connect(process.env.MONGO_URL)
       console.log(`CONNECTED TO MONGO DB ${mongoose.connection.host}`.bgMagenta.white)
    }catch(error){
        console.log(`MONGO CONNECT ERROR ${error}`.bgRed.white)
    }
}

module.exports = connectToDB