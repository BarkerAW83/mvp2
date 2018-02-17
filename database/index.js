const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
import { data, stats } from 'nba.js';
const request = require('request');
const parse = require('body-parser');

 var leagueRoster = nba.stats.allPlayers({ Season: '2017-18' }, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(res);
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MUTHUAPHUCKIN DB CONNECTED')
});

let playerSchema = new mongoose.Schema({
  // TODO: your schema here!
  player_id: { type: Number, unique: true },
  firstName: String,
  lastName: String,
  position: String,
  rookieYear: Number,
  college: String,
});

let Player = mongoose.model('Player', playerSchema);

let save = (body, college, callback) => {
  console.log('Save firing');
  for (let i = 0; i < body.length; i++){
      if (collegeName === term)
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

let scrapePlayerAPI = (college, callback) => {

  let options = {
    method: 'get',
    url: 'http://data.nba.net/10s/prod/v1/2017/players.json'
    // headers: {
    //  'User-Agent': 'request',
    //  'Authorization': `token ${config.TOKEN}`
    // }
  };

  request(options, function (error, response, body, college) {
    parsedBody = JSON.parse(body); 
    if (error){
      console.log(error)
    }
    else{
      console.log('parsedBody:', parsedBody); 
      db.save(parsedBody, college, callback);
    }
  });

}

module.exports.save = save;
module.exports.db = db;
module.exports.leagueRoster = leagueRoster;