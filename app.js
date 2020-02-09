var express  = require('express')
var app = express()
var path = require('path')
require('ejs')
var bodyParser = require('body-parser')
require('dotenv').config()
var mongoose = require('mongoose') // 몽고디비 접속을 위한 라이브러리
var apiRouter = require('./router/api-routes')


app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs');
var cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.use(cors()) // Use this after the variable declaration
app.use('/api', apiRouter)

var password = process.env.PASSWORD
mongoose.connect(`mongodb+srv://root:1234@cluster0-tecvg.mongodb.net/mydata?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// mongoose.connect('mongodb+srv://root:1234@gary-z7vzy.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true})

var db = mongoose.connection

if(!db) {
    console.log('Error Connecting MONGDB')
}
else {
    console.log('DB Connected Successfully')
}
// var port = process.env.PORT || 3000;
var port = 8008;
app.listen(port, ()=>{
    console.log(`Server is Starting at http://localhost${port}`)
})
