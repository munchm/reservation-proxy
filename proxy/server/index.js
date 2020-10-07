const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname + '/../public')));



app.get('/api/reviews/:id', (req, res) => {

  axios.get(`http://localhost:5555/api/reviews/${req.params.id}`, { params: { text: req.query.text } })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(401).send(err);
    });


});

app.get('/photos/:id', (req, res) => {

  axios.get(`http://localhost:3001/photos/${req.params.id}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(401).send(err);
    });


});

app.get('/getRestaurants', (req, res) => {

  axios.get(`http://localhost:3000/getRestaurants`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(401).send(err);
    });

});




app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});