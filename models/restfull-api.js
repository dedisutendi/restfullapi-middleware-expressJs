const koneksi = require("../config/database");
const { responseData, responseMessage } = require("../utils/response-handler");

//fungsi insert data
exports.insertResfullApi = (response, statement, data) => {
  // jalankan query
  koneksi.query(statement, data, (err, rows, field) => {
    // error handling
    if (err) {
      return response
        .status(500)
        .json({ message: "Gagal insert data!", error: err });
    }

    // jika request berhasil
    responseMessage(response, 201, "Berhasil insert data!");
  });
};

exports.getResfullApi = (response, statement) => {
  // jalankan query
  koneksi.query(statement, (err, rows, field) => {
    // error handling
    if (err) {
      return response
        .status(500)
        .json({ message: "Ada kesalahan", error: err });
    }

    // jika request berhasil
    responseMessage(response, 200, rows);
  });
};

exports.updateRestfullApi = (response, querySearch, queryUpdate, id, data) => {
  // jalankan query untuk melakukan pencarian data
  koneksi.query(querySearch, id, (err, rows, field) => {
    // error handling
    if (err) {
      return response
        .status(500)
        .json({ message: "Ada kesalahan", error: err });
    }

    // jika id yang dimasukkan sesuai dengan data yang ada di db
    if (rows.length) {
      // jalankan query update
      koneksi.query(queryUpdate, [data, id], (err, rows, field) => {
        // error handling
        if (err) {
          return response
            .status(500)
            .json({ message: "Ada kesalahan", error: err });
        }

        // jika update berhasil
        responseMessage(response, 200, "Berhasil update data!");
      });
    } else {
      return response
        .status(404)
        .json({ message: "Data tidak ditemukan!", success: false });
    }
  });
};

exports.deleteRestfullApi = (response, querySearch, queryDelete, id) => {
  // jalankan query untuk melakukan pencarian data
  koneksi.query(querySearch, id, (err, rows, field) => {
    // error handling
    if (err) {
      return response
        .status(500)
        .json({ message: "Ada kesalahan", error: err });
    }

    // jika id yang dimasukkan sesuai dengan data yang ada di db
    if (rows.length) {
      // jalankan query delete
      koneksi.query(queryDelete, id, (err, rows, field) => {
        // error handling
        if (err) {
          return response
            .status(500)
            .json({ message: "Ada kesalahan", error: err });
        }

        // jika delete berhasil
        responseMessage(response, 200, "Berhasil hapus data!");
      });
    } else {
      return response
        .status(404)
        .json({ message: "Data tidak ditemukan!", success: false });
    }
  });
};
