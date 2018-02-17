const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const request = require('request');
const parse = require('body-parser');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('MUTHUAPHUCKIN DB CONNECTED')
});

let playerSchema = new mongoose.Schema({
  // TODO: your schema here!
  player_id: { type: Number, unique: true },
  firstName: String,
  lastName: String,
  position: String,
  rookieYear: Number,
  usedYet: { type: Boolean, default: false },
  failure: { type: Boolean, default: false }
});

let Player = mongoose.model('Player', playerSchema);

let save = (body, callback) => {
  console.log('database/index.js - Save - firing');
  for (let i = 0; i < body.length; i++){
      Repo.create({ 

        player_id: body[i].personId,
        firstName: body[i]firstName,
        lastName: body[i]lastName,
        position: body[i]pos,
        rookieYear: body[i]nbaDebutYear,
        usedYet: { type: Boolean, default: false },
        failure: { type: Boolean, default: false }

      }, function (err) {
    if (err) {
      console.log('WARNING! Player(s) not saved!');
    }
    })
  }
   callback()
}

let scrapePlayerAPI = (username, callback) => {

  let options = {
    method: 'get',
    url: 'http://data.nba.net/10s/prod/v1/2017/players.json',
    headers: {
     // 'User-Agent': 'request',
     // 'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, function (error, response, body) {
    parsedBody = JSON.parse(body); 
    if (error){
      console.log(error)
    }
    else{
      console.log('parsedBody:', parsedBody); 
      db.save(parsedBody, callback);
    }
  });

}

module.exports.save = save;
module.exports.db = db;