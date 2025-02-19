import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.json());

let blogs =[
    {
        "id": 1,
        "title": "First Blog Post",
        "content": "This is the content of the first blog post.",
        "createdAt": "01-01-2025"
    },
    {
        "id": 2,
        "title": "Second Blog Post",
        "content": "This is the content of the second blog post.",
        "createdAt": "01-01-2025"
    },
       
        {
            "id": 3,
            "title": "Blog Post 3",
            "content": "Content of blog post 3",
            "createdAt": "01-01-2025"
        },
        {
            "id": 4,
            "title": "Blog Post 4",
            "content": "Content of blog post 4",
             "createdAt": "01-01-2025"
        },
        {
            "id": 5,
            "title": "Blog Post 5",
            "content": "Content of blog post 5",
             "createdAt": "01-01-2025"
        },
        {
            "id": 6,
            "title": "Blog Post 6",
            "content": "Content of blog post 6",
             "createdAt": "01-01-2025"
        },
        {
            "id": 7,
            "title": "Blog Post 7",
            "content": "Content of blog post 7",
             "createdAt": "01-01-2025"
        },
        {
            "id": 8,
            "title": "Blog Post 8",
            "content": "Content of blog post 8",
             "createdAt": "01-01-2025"
        },
        {
            "id": 9,
            "title": "Blog Post 9",
            "content": "Content of blog post 9",
             "createdAt": "01-01-2025"
        },
        {
            "id": 10,
            "title": "Blog Post 10",
            "content": "Content of blog post 10",
            "createdAt": "01-01-2025"
        },
        {
            "id": 11,
            "title": "Blog Post 11",
            "content": "Content of blog post 11",
             "createdAt": "01-01-2025"
        },
        {
            "id": 12,
            "title": "Blog Post 12",
            "content": "Content of blog post 12",
            "createdAt": "01-01-2025"
        },
        {
            "id": 13,
            "title": "Blog Post 13",
            "content": "Content of blog post 13",
            "createdAt": "01-01-2025"
        },
        {
            "id": 14,
            "title": "Blog Post 14",
            "content": "Content of blog post 14",
             "createdAt": "01-01-2025"
        },
        {
            "id": 15,
            "title": "Blog Post 15",
            "content": "Content of blog post 15",
             "createdAt": "01-01-2025"
        },
        {
            "id": 16,
            "title": "Blog Post 16",
            "content": "Content of blog post 16",
             "createdAt": "01-01-2025"
        },
        {
            "id": 17,
            "title": "Blog Post 17",
            "content": "Content of blog post 17",
             "createdAt": "01-01-2025"
        },
        {
            "id": 18,
            "title": "Blog Post 18",
            "content": "Content of blog post 18",
             "createdAt": "01-01-2025"
        },
        {
            "id": 19,
            "title": "Blog Post 19",
            "content": "Content of blog post 19",
             "createdAt": "01-01-2025"
        },
        {
            "id": 20,
            "title": "Blog Post 20",
            "content": "Content of blog post 20",
             "createdAt": "01-01-2025"
        },
        {
            "id": 21,
            "title": "Blog Post 21",
            "content": "Content of blog post 21",
             "createdAt": "01-01-2025"
        },
        {
            "id": 22,
            "title": "Blog Post 22",
            "content": "Content of blog post 22",
             "createdAt": "01-01-2025"
        },
        {
            "id": 23,
            "title": "Blog Post 23",
            "content": "Content of blog post 23",
             "createdAt": "01-01-2025"
        },
        {
            "id": 24,
            "title": "Blog Post 24",
            "content": "Content of blog post 24",
             "createdAt": "01-01-2025"
        },
        {
            "id": 25,
            "title": "Blog Post 25",
            "content": "Content of blog post 25",
            "createdAt": "01-01-2025"
        }
]
app.get('/',(req,res)=>{
  res.render("index.ejs",{blogs})
});

app.get('/newBlog',(req,res)=>{
  res.render("create.ejs",{action:"create"});
});

app.post("/createPost",(req,res)=>{
  
    blogs.push( {
        "id": blogs[blogs.length - 1].id + 1,
        "title": req.body.title,
        "content":  req.body.content,
        "createdAt": new Date().getDate()+"-"+(new Date().getMonth()+1)+"-"+new Date().getFullYear()
    });
    res.render("index.ejs",{blogs});
   
})

// Start server
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});

