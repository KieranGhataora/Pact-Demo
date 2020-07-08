const express = require('express')
const app = express()
const port = 3000

const dog = {
    Type: "Canine",
    Legs: 4,
    Description: "a domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, non-retractable claws, and a barking, howling, or whining voice."
}

const cat = {
    Type: "Feline",
    Legs: 4,
    Description: "a small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws. It is widely kept as a pet or for catching mice, and many breeds have been developed."
}

const horse = {
    Type: "Equidae",
    Legs: 4,
    Description: "The horse is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal belonging to the taxonomic family Equidae. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Eohippus, into the large, single-toed animal of today."
}

const human = {
    Type: "Primate",
    Legs: 2,
    Description: "Homo sapiens is the only extant human species, all of whose members are of the subspecies Homo sapiens sapiens. The name is Latin for wise man, and was introduced in 1758 by Carl Linnaeus. Extinct species of the genus Homo include Homo erectus and a number of other species."
}

app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  });
 

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/dog', (req, res) => res.send(dog))
app.get('/cat', (req, res) => res.send(cat))
app.get('/horse', (req, res) => res.send(horse))
app.get('/human', (req, res) => res.send(human))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

