const express = require("express")
const app = express()
const ejs = require('ejs')
const url = 'mongodb+srv://kader:0000@cluster0.kmkbloc.mongodb.net/Blog?retryWrites=true&w=majority'
const mongoose = require('mongoose')
mongoose.connect(url, {'useNewUrlParser': true, 'useUnifiedTopology': true})
.then((result)=>{console.log('connected with mongodb')})
.catch((err)=>{console.log(err)})
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
const Blog = require("./models/blog")
app.get('/',((req, res)=>{

    // create array blog like set schema blog 
    // const blogs = [
    //     {
    //         title : "Facebook", 
    //         snippet : "silicon valley",
                    
    //     }
    // ]
    // const blogs = new Blog({
    //     title:'Facebook',
    //     snippet:'Tech',
    //     body:'SOftware',
    // })
    // blogs.save()
    // res.render('index.ejs', {title:'home', blogs})
    res.redirect('/blogs')
}))

app.get('/blogs',((req, res)=>{
    Blog.find()
    .then((result)=>{
        res.render('index.ejs', {title:'blogs', blogs: result})
    })
    .catch((err)=>{console.log(err)})

}))

app.post('/blogs',((req, res)=>{

    console.log(req.body)

    // add data from form post to 

    const blog = new Blog(req.body)
    blog.save()
        .then((result)=>{
            res.redirect('/blogs')
        })
        .catch((err)=>{console.log(err)})


}))
app.get('/create',((req, res)=>{
    res.render('create.ejs', {title:'new blog'})

}))
app.get('/add',((req, res)=>{
    const blog = new Blog({
        title:'Facebook',
        snippet:'Tech',
        body:'SOftware',
    })

    blog.save()
    .then((result)=>{console.log(result)})
    .catch((err)=>{console.log(err)})
    
}))

// to find you data set in model and set it 
app.get('/find',((req, res)=>{
    Blog.find()
    .then((result)=>{res.send(result)})
    .catch((err)=>{console.log(err)})
}))

// if you want to find your element just bY ID

app.get('/id', (req, res)=>{
    Blog.findById("637dee5cc946a74d45ba9607")
    .then((result)=>{res.send(result)})
    .catch((err)=>{console.log(err)})
})




app.get('/about',((req, res)=>{
    res.render('about.ejs', {title:'about'})
}))
app.get('/404',((req, res)=>{
    res.render('404.ejs', {title:'not found'})
}))
app.listen(5000, (res, req)=>{
    console.log('connected to server')
})



































































// const express = require('express')
// const { ClientSession } = require('mongodb')
// const dotenv = require('dotenv').config()
// const mongoose = require("mongoose")
// const app = express()
// const clientModel = require('./models/client')
// const ejs = require('ejs')
// const bodyParser = require('body-parser')
// const path = require('path')
// const { json } = require('body-parser')
// // const result = require('./views/result')

// mongoose.connect('mongodb+srv://problem:1680@problem.u5mwtm6.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
    
// })
// .then((result)=>console.log("connected to mongodb"))
// .catch((err)=>console.log(err))

// app.set('view engine', 'ejs')
// app.use(express.static('public'))
// app.use(express.urlencoded({extended: true}))  // convert data from your file post to this file as object

// app.get('/p', (req, res)=>{
//     const ClientData = new clientModel({
//         Name:"abdekader", 
//         Age:"22"
//     })
//     ClientData.save()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })


// app.get('/', (req, res)=>{
//     res.render('login.ejs')
// })

// app.post('/', (req, res)=>{
//     // create a new instance of blog
//     const clientdata = new clientModel(req.body)
//     clientdata.save()
//     .then((result)=>{
//         res.redirect('/')
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
    
// })
// // app.use('/result', (req, res)=>{
// //     res.send(req.body)
// // })
// app.listen('5000', ()=>{
//     console.log('ffffffff')
// })








