/////////////////////////
// DEPENDENCIES
/////////////////////////
const express = require("express")
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const Product = require('./models/Seed')
/////////////////////////
// The Application Object
/////////////////////////
const app = express()
/////////////////////////
// MIDDLEWARE
////////////////////////
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

//////////////////////////
//DATA
/////////////////////////
const turtles = [
    {name: "Leonardo", role: "ninja"},
    {name: "Michaelangelo", role: "ninja"},
    {name: "Donatello", role: "ninja"},
    {name: "Raphael", role: "ninja"},
]

/////////////////////////
// Routes
/////////////////////////
// home route that says "hello world" to test server is working
app.get("/", (req, res) => {
    //res.json let's us send a response as JSON data
    res.json({
        response: "Hello Git This Bread"
    })
})

app.get("/turtles", (req, res) => {
    Product.find({}, (err, foundProducts) => {
        // console.log(foundMemes)
        res.json({
            foundProducts
        });
    })
    
})

app.get("/turtles/:_id", (req, res) => {
    //res.json let's us send a response as JSON data
    Product.findById(req.params._id, (err, foundProducts) => {
        // console.log(foundMemes)
        res.json({
            foundProducts
        });
    })
})

app.post("/turtles", (req, res) =>{

    turtles.push(req.body)

    res.json(turtles)
})

app.put("/turtles/:index", (req, res) =>{

    turtles[req.params.index] = req.body

    res.json(turtles)
})

app.delete("/turtles/:index", (req, res) =>{

    turtles.splice(req.params.index, 1)

    res.json(turtles)
})

app.get( '/seed' , ( req, res ) => {

    const newProducts = [
    {
    _id: "58e913abb7304c0e0f20d0d8",
    name: "Beans",
    description: "A small pile of beans. Buy more beans for a big pile of beans.",
    img: "http://www.rodalesorganiclife.com/sites/rodalesorganiclife.com/files/styles/slideshow-desktop/public/navybeans_peangdao_1100.jpg?itok=QB7fl971",
    price: 5,
    qty: 99,
    __v: 0
    },
    {
    _id: "58e913abb7304c0e0f20d0da",
    name: "Beautiful Bins",
    description: "A stack of colorful bins for your beans and bones.",
    img: "http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg",
    price: 7000,
    qty: 1,
    __v: 0
    },
    {
    _id: "58e913abb7304c0e0f20d0d9",
    name: "Bones",
    description: "It's just a bag of bones.",
    img: "http://bluelips.com/prod_images_large/bones1.jpg",
    price: 25,
    qty: 0,
    __v: 0
    },
    {
    _id: "58e9452e28ccf4146d4c485e",
    name: "Water Rose",
    img: "http://wallpaper-gallery.net/images/water-wallpaper-hd/water-wallpaper-hd-22.jpg",
    description: "Beautiful, ephemeral, assembly required",
    qty: 5,
    __v: 0,
    price: 1000000
    },
    {
    _id: "58e94d443931ca152bdd4478",
    name: "All Natural Organic Non-GM0 Pure 100% Natural Lime",
    img: "http://wallpaper-gallery.net/images/images/images-17.jpg",
    description: "Forget your fears of agricultural genetic engineering and take your taste buds back to the beginning of time with this authentic unaltered fruit",
    price: 17,
    qty: 72,
    __v: 0
    },
    {
    _id: "58e956e73931ca152bdd4479",
    name: "Mantis Shrimp (tamed)",
    img: "http://otlibrary.com/wp-content/gallery/mantis-shrimp/mantis-shrimp.jpg",
    description: "Sustainably raised, cage-free, docile mantis shrimp. Makes a for a cuddly companion as long as you never make direct eye contact! Notice: this item is gluten-free, should your relationship go south",
    price: 887,
    qty: 0,
    __v: 0
    },
    {
    _id: "58e958243931ca152bdd447a",
    name: "Kohlrabi",
    img: "http://canelasf.com/wp-content/uploads/2015/02/kohlrabi.jpg",
    description: "Get a jump on the next superfood craze. Kohlrabi's superiority is marked by its tricky to spell name. Text all your friends: You are going to live forever with the power of kholrabi",
    price: 6,
    qty: 913462,
    __v: 0
    },
    {
    _id: "58e9893444738817298b3a3b",
    name: "Yogalates Fitness Machine 1000",
    img: "https://s-media-cache-ak0.pinimg.com/564x/a8/4f/05/a84f051bf47e41382e4becd4a3d05214.jpg",
    description: "Stop wasting your time doing one exercise at a time! With the YFM1000 you can do yoga and pilates at the same time! ",
    price: 3199,
    qty: 14,
    __v: 0
    },
    {
    _id: "58eba62854241b05b274dc78",
    name: "Bell Jars",
    img: "https://s-media-cache-ak0.pinimg.com/736x/0a/6f/b6/0a6fb62caa11cfdb68c7c12a2620c012.jpg",
    description: "Capture the beauty of anything and don't let it get away! Formaldehyde sold separatey ",
    price: 49.99,
    qty: 49,
    __v: 0
    },
    {
    _id: "58ed05dfa2b6901441a43419",
    name: "Portal to 5th Dimension",
    img: "https://images-assets.nasa.gov/image/PIA20912/PIA20912~thumb.jpg",
    description: "Bored of your neighborhood? Bored of your typical vacation? Go to the 5th dimension",
    price: 1,
    qty: 54,
    __v: 0
    }
    ];
  
  
      Product.create( newProducts , ( err, product ) => {
        if ( err ) { console.log( err ); }
            console.log( "SEED: NEW PRODUCTS CREATED!" );
            res.redirect( '/' );
      });
  });
/////////////////////////
// Listener
/////////////////////////
// We chose a non 3000 port because react dev server uses 3000 the highest possible port is 65535
// Why? cause it's the largest 16-bit integer, fun fact!
// But because we are "elite" coders we will use 1337
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log('linked to mongo')
})
app.listen(1337, () => console.log("Listening on port 1337"))