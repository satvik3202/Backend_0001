require('dotenv').config();
const express = require('express')   //created a object from the express 
const app = express()        //we create a variable using express which has so many functions
const port = 3000      //it is a virtual port where we will listen the request

const data={
  "login": "satvik3202",
  "id": 143734234,
  "node_id": "U_kgDOCJE12g",
  "avatar_url": "https://avatars.githubusercontent.com/u/143734234?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/satvik3202",
  "html_url": "https://github.com/satvik3202",
  "followers_url": "https://api.github.com/users/satvik3202/followers",
  "following_url": "https://api.github.com/users/satvik3202/following{/other_user}",
  "gists_url": "https://api.github.com/users/satvik3202/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/satvik3202/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/satvik3202/subscriptions",
  "organizations_url": "https://api.github.com/users/satvik3202/orgs",
  "repos_url": "https://api.github.com/users/satvik3202/repos",
  "events_url": "https://api.github.com/users/satvik3202/events{/privacy}",
  "received_events_url": "https://api.github.com/users/satvik3202/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Satvik Chauhan",
  "company": null,
  "blog": "",
  "location": "Phagwara,Jalandhar,Punjab",
  "email": null,
  "hireable": null,
  "bio": "*Enthusiast and dedicated B.Tech learner, Passionate about coding languages and software development. Beginner in JAVA, Python, C++, analyzing Data structures, ",
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-08-31T15:34:10Z",
  "updated_at": "2025-11-05T19:53:58Z"
}





//get request runs at the home route and res.send is run and helloworld is sent
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//we can create out own :
app.get('/twitter', (req,res)=> {
    res.send('satvik_4344')
})
//we will create more
app.get('/login', (req,res)=>{
    res.send('<h1>Please login at my website</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai Aur Code</h2>');
})


app.get('/github',(req,res)=>{
  res.json(data);
})

//listens to the port
//we will provide the port
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
 