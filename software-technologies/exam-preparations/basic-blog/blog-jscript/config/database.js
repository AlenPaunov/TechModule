const mongoose = require('mongoose');

module.exports = (config) => {
    mongoose.connect(config.connectionString);

    let database = mongoose.connection;
    database.once('open',(error)=>{
        if (error){
            console.log(error);
            return;
        }
        console.log("MongoDb is fckin Ready!!!")
    });
    require('./../models/User');
    require('./../models/Article');
};