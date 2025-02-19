# News-Blog

Blog web application using Node.js, Express.js, and EJS

# Project Structure

news-blog/
| app.js # Main server file
│ package.json
│ posts.json # Stores blog posts
│
├── public/
|── styles.css # CSS for styling
│
└── views/
├── home.ejs # Homepage to list posts
├── create.ejs # Form to create a new post
└── edit.ejs # Form to edit an existing post

# npm dependancy install

npm install express ejs body-parser

# Features Implemented

Post Creation: Create new posts with a title and content.
Post Viewing: View all posts on the homepage.
