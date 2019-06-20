const express = require('express')
const app = express();
const port = 1128;
const cheerio = require('cheerio');
const axios = require('axios');




app.use(express.static('public'));

app.get('/api/quotes', (req, res) => {
  axios.get('http://fuckinghomepage.com/random')
   .then(data => {
    //    console.log(data.data);
       const $ = cheerio.load(data.data);
       const didYouKnowElement = $("small > a").first();
       const didYouKnowURL = didYouKnowElement.attr('href');
       const didYouKnow = didYouKnowElement.text().trim();
       const motivational = $('div.PostBody').children().eq(2).text();
       

       res.send({
           phrase : didYouKnow,
           url: didYouKnowURL,
           motivational: motivational
       })
   })
   .catch(err => {
      console.log(err, 'err retriveing html');
   })
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))