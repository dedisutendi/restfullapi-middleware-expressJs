const mysql = require("mysql");

//konfigurasi koneksi
const koneksi = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "restfull_api",
  multipleStatements: true,
});

//jalankan koneksi databse
koneksi.connect((err) => {
  if (err) throw err;
  console.log("Database Sudah terkoneksi");
});

module.exports = koneksi;
