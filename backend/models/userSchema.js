import mongoose from "mongoose";
mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'port2',
}, err => err ? console.log(err) : 
    console.log('Connected to yourDB-name database'));
 
// Schema for users of app
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    message: {
        type: String,
        required: true,
    },
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();
export default User