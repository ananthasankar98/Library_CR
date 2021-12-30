const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ananthasankar98:anantha@123@cluster0.tk4we.mongodb.net/Library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const NewSchema = new Schema({
    title: String,
    author: String,
    image: String
});

const Bookdata = mongoose.model('bookdata', NewSchema);

module.exports = Bookdata;