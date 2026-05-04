const express = require('express')
const app = express()
const port = 5000
app.use(express.json())

let WatchesData = [
    {
        id: 1,
        name: "Hammer 1.0",
        description: "Men's Leather",
        price: 7999
    },
    {
        id: 2,
        name: "Horizonx Smartwatch",
        description: "1.38 IPS Display | Round Dial",
        price: 5599
    },
    {
        id: 3,
        name: "Notion",
        description: "Men's Leather",
        price: 9999
    },
    {
        id: 4,
        name: "Galaxy Fit Pro",
        description: "Fitness Tracker | Heart Rate Monitor",
        price: 3499
    },
    {
        id: 5,
        name: "Aqua Dive Master",
        description: "200m Water Resistant | Stainless Steel",
        price: 12500
    },
    {
        id: 6,
        name: "Classic Roman",
        description: "Men's Analog | Brown Leather Strap",
        price: 4200
    },
    {
        id: 7,
        name: "Vogue Elite",
        description: "Women's Rose Gold | Magnetic Mesh Band",
        price: 6800
    },
    {
        id: 8,
        name: "Titanium X",
        description: "Men's Chronograph | Metal Link Strap",
        price: 15999
    },
    {
        id: 9,
        name: "Neon Sport",
        description: "Digital | Durable Resin Band",
        price: 2199
    },
    {
        id: 10,
        name: "Aero Pilot",
        description: "Aviation Style | Canvas NATO Strap",
        price: 8500
    },
    {
        id: 11,
        name: "Minimalist Zero",
        description: "Unisex | Black Matte Finish",
        price: 3100
    },
    {
        id: 12,
        name: "Lumina Night",
        description: "Glow Dial | Soft Silicone Strap",
        price: 2750
    },
    {
        id: 13,
        name: "Prestige Gold",
        description: "18k Gold Plated | Formal Wear",
        price: 22000
    },
    {
        id: 14,
        name: "Odyssey Smart",
        description: "1.43 AMOLED | Bluetooth Calling",
        price: 8999
    },
    {
        id: 15,
        name: "Velocity Racer",
        description: "Tachymeter Bezel | Red Accents",
        price: 11200
    },
    {
        id: 16,
        name: "Eco Wood",
        description: "Bamboo Face | Vegan Leather",
        price: 4500
    },
    {
        id: 17,
        name: "Midnight Onyx",
        description: "All Black | Stainless Steel",
        price: 9500
    },
    {
        id: 18,
        name: "Pearl Elegance",
        description: "Mother of Pearl Dial | Women's",
        price: 7200
    },
    {
        id: 19,
        name: "Pulse Active",
        description: "SpO2 Monitor | Breathable Sport Band",
        price: 4999
    },
    {
        id: 20,
        name: "Vintage Square",
        description: "Retro Digital | Silver Tone",
        price: 3800
    },
    {
        id: 21,
        name: "Trekker Pro",
        description: "Altimeter & Compass | Rugged Build",
        price: 14500
    },
    {
        id: 22,
        name: "Urban Edge",
        description: "Skeleton Dial | Automatic Movement",
        price: 18999
    },
    {
        id: 23,
        name: "Starlight Slim",
        description: "Ultra-thin Profile | Mesh Bracelet",
        price: 5600
    },
    {
        id: 24,
        name: "Quantum Sync",
        description: "Hybrid Smartwatch | Classic Leather",
        price: 10500
    },
    {
        id: 25,
        name: "Safari Canvas",
        description: "Field Watch | Olive Green",
        price: 3400
    },
    {
        id: 26,
        name: "Crystal Halo",
        description: "Rhinestone Bezel | Women's Luxury",
        price: 13200
    },
    {
        id: 27,
        name: "Apex Runner",
        description: "Built-in GPS | Marathon Series",
        price: 17500
    },
    {
        id: 28,
        name: "Lunar Phase",
        description: "Moonphase Complication | Dress Watch",
        price: 21000
    },
    {
        id: 29,
        name: "Zenith Core",
        description: "Minimalist Dial | Sapphire Glass",
        price: 8900
    },
    {
        id: 30,
        name: "Nova Plus",
        description: "1.91\" HD Screen | Always On Display",
        price: 6499
    }
];

// app.get
app.get('/Watch', (req, res) => {
    console.log(WatchesData)
    res.json({
        status: "success",
        data: WatchesData
    })
})

// app.post
app.post('/create-Watch', (req, res) => {
    console.log(req.body)
    WatchesData.push(req.body)
    res.json({
        message: "post created",
        post: req.body
    })
})

// app.Update
app.put('/update-Watch/:id', (req, res) => {
    console.log(req.params.id)
    let Watch = WatchesData.find((e) => e.id == req.params.id)
    if (!Watch) {
        res.json({
            message: "Watch not found"
        })
    }
    else {
        Watch.name = req.body.name
        res.json({
            message: "Update Successfully",
            data: Watch
        })
    }
})

// app.Delete
app.delete('/delete-Watch/:id', (req, res) => {
    console.log(req.params.id)
    let Watch = WatchesData.filter((e) => e.id != req.params.id)
    console.log(Watch)
    WatchesData = Watch
    res.json({
        message: "Delete Successfully"
    })
})


app.listen(port, () => {
    console.log("Server is Running In", port)
})