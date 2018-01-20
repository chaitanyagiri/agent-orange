const express = require('express'),
app           = express(),
path          = require('path');

// Static
app.use(express.static(path.join(__dirname, 'server/static')));
app.use(express.static(path.join(__dirname, 'client/dist')));

var PORT = process.env.PORT || 3100;
app.listen(PORT, process.env.IP, () => {
  console.log(`The server is running on ${PORT}`);
})