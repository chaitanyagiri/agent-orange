const express = require('express'),
app           = express(),
path          = require('path');

// Static
app.use(express.static(path.join(__dirname, 'server/static')));
app.use(express.static(path.join(__dirname, 'client/dist')));


app.listen(process.env.PORT || 3100, process.env.IP, () => {
  console.log(`The server is running on ${process.env.PORT}`)
})