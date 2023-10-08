const mongodb = require('mongoose');

mongodb.connect('mongodb+srv://dandudeepika57:JFTPulKZhYgM5Zoc@cluster0.oqoljuw.mongodb.net/?retryWrites=true&w=majority');

const connectParams = {
    useNewUrlParser:true,
    useUnifiedTopology:true
}

const db = mongodb.connection ;

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("connected to database : mongoDB");
});

module.exports = mongodb ;