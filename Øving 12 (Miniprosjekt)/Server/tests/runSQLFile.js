var mysql = require("mysql");
var fs = require("fs");
//var path = require("path");

/*
*Slik Nils hadde det:
* Fjern var path = require("path");
* let sql = fs.readFileSync(filename, "utf8");
*/


module.exports = function run(filename, pool, done) {
  console.log("runsqlfile: reading file " + filename);
  let sql = fs.readFileSync(filename, "utf8");
  pool.getConnection((err, connection) => {
    if (err) {
      console.log("runsqlfile: error connecting");
      done();
    } else {
      console.log("runsqlfile: connected");
      connection.query(sql, (err, rows) => {
        connection.release();
        if (err) {
          console.log(err);
          done();
        } else {
          console.log("runsqlfile: run ok");
          done();
        }
      });
    }
  });
};
