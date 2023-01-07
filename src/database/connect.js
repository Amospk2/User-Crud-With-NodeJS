const mongoose = require('mongoose');


const connectToDatabase = async () => {

    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.hg9yu7b.mongodb.net/database?retryWrites=true&w=majority`, (error)=>{
        if(error)
        {
            return console.log("Ocorreu um erro.", error);
        }

        console.log("Conexão feita com sucesso.");
    });
};

module.exports = connectToDatabase