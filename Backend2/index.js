const express = require("express");

const server = express();


const mongoose = require("mongoose")

// Schema

const userSchema = new mongoose.Schema(
    {
        
        FirstName:{
            type: String,
            required: true
        },
        LastName:{
            type: String,
            required : false
        },
        email:{
            type: String,
            require: true,
            unique: true
        },
        jobTitle:{
            type:String,
        },
        gender:{
            type: String,
            required: true
        }
    }
)

// Connection
mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1') 
.then(()=>{console.log("MongoDb connected")})
.catch(err => console.log(" Mongoose error",err));
// mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1')
//     .then(() => {
//         console.log("MongoDb connected");
//     })
//     .catch(err => console.log("Mongoose error:", err)); // Add this line for error handling

//Schema Model

const User = mongoose.model("user", userSchema)




const Mens = [
  
        {
          image:
            "https://images.bewakoof.com/t640/men-s-black-straw-hat-crew-graphic-printed-oversized-t-shirt-630819-1708598320-1.jpg",
          name: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
          price: "Rs 599",
          size: "M",
          Color: "Black",
          gender: "Male",
          Category: "T-shirt",
        },
        {
          image:
            "https://images.bewakoof.com/t640/men-s-black-one-piece-graphic-printed-oversized-t-shirt-630630-1709105339-1.jpg",
          name: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
          price: "Rs 599",
          size: "L",
          Color: "Black",
          gender: "Male",
          Category: "T-shirt",
        },
        {
          image:
            "https://images.bewakoof.com/t640/men-s-blue-pirate-crew-graphic-printed-oversized-t-shirt-630626-1709104734-1.jpg",
          name: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
          price: "Rs 599",
          size: "S",
          Color: "Blue",
          gender: "Male",
          Category: "T-shirt",
        },
        {
          image:
            "https://images.bewakoof.com/t640/men-s-red-weapon-xi-graphic-printed-t-shirt-630777-1706686786-1.jpg",
          name: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
          price: "Rs 599",
          size: "L",
          Color: "Red",
          gender: "Male",
          Category: "T-shirt",
        },
        {
          image:
            "https://images.bewakoof.com/t640/men-s-white-customizable-oversized-t-shirt-592598-1685445506-1.jpg",
          name: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
          price: "Rs 599",
          size: "M",
          Color: "White",
          gender: "Male",
          Category: "T-shirt",
        },
        {
          image:
            "https://images.bewakoof.com/t640/men-s-green-moss-head-graphic-printed-oversized-t-shirt-627751-1700720357-1.jpg",
          name: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
          price: "Rs 599",
          size: "M",
          Color: "White",
          gender: "Male",
          Category: "T-shirt",
        },
        {
          image:
            "https://images.bewakoof.com/t640/unisex-purple-can-graphic-printed-t-shirt-547990-1680607259-1.jpg",
          name: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
          price: "Rs 599",
          size: "M",
          Color: "Purple",
          gender: "Male",
          Category: "Vest",
        },
        {
          image:
            "https://images.bewakoof.com/t640/unisex-purple-gojo-satoru-graphic-printed-t-shirt-597955-1690875381-1.jpg",
          name: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
          price: "Rs 599",
          size: "M",
          Color: "Purple Gojo",
          gender: "female",
          Category: "Vest",
        },
        {
          image:
            "https://images.bewakoof.com/t640/unisex-off-white-being-bong-graphic-printed-t-shirt-581126-1705483610-1.jpg",
          name: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
          price: "Rs 599",
          size: "M",
          Color: "White",
          gender: "female",
          Category: "vest",
        },
      
];
server.listen(7000, () => {
    console.log("Server is running on 7000 port number");
  });
server.get("/", (request, response) => {
  response.send(Mens);
});

