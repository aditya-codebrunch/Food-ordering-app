const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('../public'));
app.use(express.static('../public/images'));

app.get('/', function (req, res) {
  const options = {
      root: '../dist'
  };

  const fileName = 'index.html';
  res.sendFile(fileName, options, function (err) {
      if (err) {
          console.error('Error sending file:', err);
      } else {
          console.log('Sent:', fileName);
      }
  });
});

app.use(express.static('../dist'));

app.get('*', function (req, res) {
  const options = {
      root: '../dist'
  };

  const fileName = 'index.html';
  res.sendFile(fileName, options, function (err) {
      if (err) {
          console.error('Error sending file:', err);
      } else {
          console.log('Sent:', fileName);
      }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
