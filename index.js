const express = require('express')
const app = express()
const port = 5000
app.use(express.json())

let userdata =
    [
        {
            id: 1,
            name: "Raman"
        },
        {
            id: 2,
            name: "Sidhan"
        }
    ]

// app.get
app.get('/user', (req, res) => {
    res.json({
        status: "success",
        data: userdata
    })
})

// app.post
app.post('/create-user', (req, res) => {
    console.log(req.body)
    userdata.push(req.body)
    res.json({
        message: "post created",
        post: req.body
    })
})

// app.Update
app.put('/update-user/:id', (req, res) => {
    console.log(req.params.id)
    let user = userdata.find((e) => e.id == req.params.id)
    if (!user) {
        res.json({
            message: "user not found"
        })
    }
    else {
        user.name = req.body.name
        res.json({
            message: "Update Successfully",
            data: user
        })
    }
})

// app.Delete
app.delete('/delete-user/:id', (req, res) => {
    console.log(req.params.id)
    let user = userdata.filter((e) => e.id != req.params.id)
    console.log(user)
    userdata = user
    res.json({
        message: "Delete Successfully"
    })
})


app.listen(port, () => {
    console.log("Server is Running In", port)
})