import mongoose from 'mongoose';
import { message } from 'statuses';
import { UsersSchema, PassengerSchema} from '../models/userModel';

// mongoose.connect('mongodb+srv://kalironRegister:infotech@cluster0.bo8z8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// var connection = mongoose.connection;

// connection.on('error', console.error.bind(console, 'connection error:'));
// connection.once('open', function () {

//     connection.db.collection("registers", function myfuction(err, collection){
//         collection.find({}).toArray(function(err, data){
//             console.log(data); // it will print your collection data
//             // const getReg = (req, res) => {
//             //     res.send(data)
//             //   }
//             return data;
//         })
//     });

// });


//     console.log("Executing action");
// };

const User = mongoose.model('User', UsersSchema);
const Passenger = mongoose.model('Passenger', PassengerSchema);

export const addUserRequest = (req, res) => {
    let newUser = new Passenger(req.body);
    newUser.save((err, driver) => {
        if (err) {
            res.send(err);
        }
        User.find({Is_driver_or_passenger: {$eq: true}},{"_id":0,"FirstName":1,"LastName":1,"DOB":1,"Is_driver_or_passenger":1,"Image":1,"Mobile":1,"Email":1,"Gender":1,"Car_details":1},(err, login) => {
            if (err) {
                res.send(err);
            }
            res.json(login);
        });
       // res.json(driver);
    });

}

// export const updateDriver = (req, res) => {
//   Driver.findOneAndUpdate({ _id: req.params.productID}, req.body, { new: true, useFindAndModify: false }, (err, product) => {
//       if (err) {
//           res.send(err);
//       }
//       res.json(product);
//   });
// }

export const getDrivers = (req, res) => {
  User.find({},{"_id":0,"FirstName":1,"LastName":1,"DOB":1,"Is_driver_or_passenger":1,"Image":1,"Mobile":1,"Email":1,"Gender":1,"Car_details":1},(err, login) => {
      if (err) {
          res.send(err);
      }
      res.json(login);
  });
}



  

    
