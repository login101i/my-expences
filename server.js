const path = require('path')
// to był ostatni krok 

const express=require('express')
const dotenv=require('dotenv')
const colors=require('colors')
const morgan=require('morgan')
// z folderu config
const connectDB=require('./config/db')

dotenv.config({path:'./config/config.env'})

// z folde
connectDB()

const transactions=require('./routers/transactions')

const app=express()

app.use(express.json())

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use('/api/v1/transactions', transactions)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*', (req,res)=>res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}


app.get('/', (req,res)=>res.send("hello"))

const PORT=process.env.PORT||5000
app.listen(PORT, console.log(`Server działa w ${process.env.NODE_ENV}  na porcie ${PORT}`.yellow.bold))

