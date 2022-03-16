const koneksi = require("../config/database");
const { responseData, responseMessage } = require("../utils/response-handler");
const ErrorResponse = require("../utils/errorResponse");

//fungsi insert data
exports.insertResfullApi = (response, statement, data, next) => {
  // jalankan query
  koneksi.query(statement, data, (err, rows, field) => {
    // error handling
    if (err) {
      return next(new ErrorResponse(err.message, 500));
    }

    // jika request berhasil
    responseMessage(response, 201, "Berhasil insert data!");
  });
};

exports.getResfullApi = (response, statement, next) => {
  // jalankan query
  koneksi.query(statement, (err, rows, field) => {
    // error handling
    if (err) {
      return next(new ErrorResponse(err.message, 500));
    }

    // jika request berhasil
    responseMessage(response, 200, rows);
  });
};

exports.updateRestfullApi = (
  response,
  querySearch,
  queryUpdate,
  id,
  data,
  next
) => {
  // jalankan query untuk melakukan pencarian data
  koneksi.query(querySearch, id, (err, rows, field) => {
    // error handling
    if (err) {
      return next(new ErrorResponse(err.message, 500));
    }

    // jika id yang dimasukkan sesuai dengan data yang ada di db
    if (rows.length) {
      // jalankan query update
      koneksi.query(queryUpdate, [data, id], (err, rows, field) => {
        // error handling
        if (err) {
          return next(new ErrorResponse(err.message, 500));
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

exports.deleteRestfullApi = (response, querySearch, queryDelete, id, next) => {
  // jalankan query untuk melakukan pencarian data
  koneksi.query(querySearch, id, (err, rows, field) => {
    // error handling
    if (err) {
      return next(new ErrorResponse(err.message, 500));
    }

    // jika id yang dimasukkan sesuai dengan data yang ada di db
    if (rows.length) {
      // jalankan query delete
      koneksi.query(queryDelete, id, (err, rows, field) => {
        // error handling
        if (err) {
          return next(new ErrorResponse(err.message, 500));
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
