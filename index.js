const express = require("express");
const app = express();

app.all("/", async (req, res) => {
    
  const data = await fetch("http://ipwho.is").then((d) => d.json());
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

app.listen(process.env.PORT || 3000)
