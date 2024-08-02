const express = require("express");
const server = express();

server.listen(5000, () => {
    console.log("Server is running on 5000 port...");
});

server.get("/", (req, res) => {
    res.send("Server is running on 5000 port...");
});

server.get("/products", (req, res) => {
    const props = [
        {
            "id": 10,
            "title": "HP Pavilion 15-DK1056WM",
            "description": "HP Pavilion 15-DK1056WM Gaming...",
            "price": 1099,
            "discountPercentage": 6.18,
            "rating": 4.43,
            "stock": 89,
            "brand": "HP Pavilion",
            "category": "laptops",
            "thumbnail": "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
            "images": [
              "https://cdn.dummyjson.com/product-images/10/1.jpg",
              "https://cdn.dummyjson.com/product-images/10/2.jpg",
              "https://cdn.dummyjson.com/product-images/10/3.jpg",
              "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg"
            ]
          },
          {
            "id": 9,
            "title": "Infinix INBOOK",
            "description": "Infinix Inbook X1 Ci3 10th 8GB...",
            "price": 1099,
            "discountPercentage": 11.83,
            "rating": 4.54,
            "stock": 96,
            "brand": "Infinix",
            "category": "laptops",
            "thumbnail": "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
            "images": [
              "https://cdn.dummyjson.com/product-images/9/1.jpg",
              "https://cdn.dummyjson.com/product-images/9/2.png",
              "https://cdn.dummyjson.com/product-images/9/3.png",
              "https://cdn.dummyjson.com/product-images/9/4.jpg",
              "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg"
            ]
          }
    ]
    res.send(props);
});
