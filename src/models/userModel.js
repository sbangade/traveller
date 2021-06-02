import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UsersSchema = new Schema({
    
},{collection : 'registers'});

export const PassengerSchema = new Schema({
    PickUp: {
        type: String,
        required: 'Enter your pickup location'
    },
    DropOff: {
        type: String,
        required: 'Enter your drop off location'
    },
    Time: {
        type: Number
    },
    Description: {
        type: String,
       required: 'Enter your description'
    }
});
