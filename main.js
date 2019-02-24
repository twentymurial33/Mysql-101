var mysql =require ("mysql");

var connection=mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"root",
    database:"playlistDB"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("errored");
    queryAllSongs();
    queryDanceSongs();
    })

function queryAllSongs(){
    connection.query("SELECT * FROM songs", function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
        }
        console.log("-----------------------------------");
      });   
}

function queryDanceSongs() {
    connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
      }
    });
}

// console.log(query.sql);
