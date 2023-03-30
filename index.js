const express = require("express");
const app = express();

app.all("/*", async (req, res) => {
   
  const url = req.url.split('xx')[1] || "http://ipwho.is"
  
  console.log(req.url)

  const data = await fetch(url).then((d) => d.json());
  const headers = {
    "Access-Control-Allow-Origin": req.headers.origin || "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "text/plain",
  };

  res.writeHead(200, headers);
  res.end(JSON.stringify({ ...data }));
  // res.end(JSON.stringify({ time: Date.now(), context:{answer:true } }));
  // res.send({...data})
    
});

app.get("/", (req,res)=> {

  console.log(req.headers['user-agent'])
  console.log(req.url)
  console.log(Date.now())
  console.log(req.query)
  console.error('this is an error')
  return res.send('ok')
})

app.listen(process.env.PORT || 3000)
