const express = require('express')
const mongo = require("mongodb").MongoClient;
const app = express()

const url = 'mongodb+srv://admin:pmvXGKaoInJ0UFgw@testercluster.jepemrd.mongodb.net/test?retryWrites=true&w=majority'

let db, people
mongo.connect(
    url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) {
            console.error(err)
            return
        }
        db = client.db("people")
        people = db.collection("people")
    }
)
app.use(express.json())
app.post("/add", (req, res) => {
    const name = req.body.name
    const number = req.body.number
    const id = req.body.id
    console.log("adding")
    console.log(name, number, id)
    people.insertOne({name: name, number: number, id: id }, (err, result) => {
        if (err) {
          console.error(err)
          res.status(500).json({ err: err })
          return
        }
        console.log(result)
        res.status(200).json({ ok: true })
      })
})

app.get("/all", (req, res) => {
    people.find().toArray((err,items) => {
        if (err) {
            console.error(err)
            res.status(500).json({ err: err })
            return
          }
          res.status(200).json({ people: items })
    })
})
app.delete("/delete", (req, res) => {
    people.deleteOne({name: "John"})
})
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
// adding something
// add this thing
// third thing
// fourth thing
// fifth thing
// sixth thing
// seventh thing
// eigth thing