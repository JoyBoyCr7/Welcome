const express = require('express')

const app = express()

app.use('/image',express.static('/Users/ronardnyongkah/Rononmak/images/facebook.png'))

app.get(`/:${'id'}`, (req, res, next) => {
    console.log(`ello ${req.params.id}`)
    // res.send('Welcome back Rond')
    
})

app.get('/', (req, res, next) => {
    res.send('Welcome back Ronard')
    next()
},
 (req, res) => {
    console.log(req.params)
  })

app.post('/')

const Port = process.env.Port || 4000;

app.listen(Port, () => {
    console.log(`app listening on port ${Port}`)
})

