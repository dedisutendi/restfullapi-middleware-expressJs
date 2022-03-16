const {
  insertResfullApi,
  getResfullApi,
  updateRestfullApi,
  deleteRestfullApi,
} = require("../models/restfull-api");
const { validateRestfullapi } = require("../utils/validation");
const ErrorResponse = require("../utils/errorResponse");

// create bootcamp
exports.createData = (req, res, next) => {
  // buat variabel penampung data dan query sql
  const data = { ...req.body };
  const querySql = "INSERT INTO restfull_api SET ?";

  // validasi
  var errors = validateRestfullapi(data);
  if (errors) {
    return next(new ErrorResponse(errors[0], 400));
  }

  insertResfullApi(res, querySql, data, next);
};

exports.getData = (req, res, next) => {
  // buat query sql
  const querySql = "SELECT * FROM restfull_api";

  getResfullApi(res, querySql, next);
};

exports.updateData = (req, res, next) => {
  // buat variabel penampung data dan query sql
  const data = { ...req.body };
  const querySearch = "SELECT * FROM restfull_api WHERE id = ?";
  const queryUpdate = "UPDATE restfull_api SET ? WHERE id = ?";

  updateRestfullApi(res, querySearch, queryUpdate, req.params.id, data, next);
};

exports.deleteData = (req, res, next) => {
  // buat query sql untuk mencari data dan hapus
  const querySearch = "SELECT * FROM restfull_api WHERE id = ?";
  const queryDelete = "DELETE FROM restfull_api WHERE id = ?";

  deleteRestfullApi(res, querySearch, queryDelete, req.params.id, next);
};
