const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var axios = require('axios');
const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.get('/', (req, res) => res.render('pages/index'))


app.get('/top-headlines', (req, res) => {

  var config = {
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines?country=th&apiKey=d1ce6f9ee18d4edcae3c9a15ed977a17',
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    console.log('res ok');
    res.send(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  

})


app.listen(PORT, () => console.log(`Listening on ${PORT}`))


