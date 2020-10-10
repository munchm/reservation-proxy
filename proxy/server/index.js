const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname + '/../public')));



app.get('/api/reviews/:id', (req, res) => {

  axios.get(`http://13.52.246.213/api/reviews/${req.params.id}`, { params: { text: req.query.text } })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(401).send(err);
    });


});

app.get('/photos/:id', (req, res) => {

  axios.get(`http://18.216.243.227/photos/${req.params.id}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(401).send(err);
    });


});

app.get('/getRestaurants', (req, res) => {

  axios.get(`http://34.212.131.243/getRestaurants`)
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