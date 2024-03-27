var path = require('path')
var express = require('express')
var app = express()
const cors = require('cors')

var dir = path.join(__dirname, 'public')
app.use(cors())


app.use('/static-tv', express.static(dir));
app.use(express.static(dir))



app.listen(3070, function () {
  console.log('Listening on 3070. Static file server is ready! heheh')
})
