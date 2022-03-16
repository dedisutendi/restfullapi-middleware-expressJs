const {
  insertResfullApi,
  getResfullApi,
  updateRestfullApi,
  deleteRestfullApi,
} = require("../models/restfull-api");

// create bootcamp
exports.createData = (req, res) => {
  // buat variabel penampung data dan query sql
  const data = { ...req.body };
  const querySql = "INSERT INTO restfull_api SET ?";

  insertResfullApi(res, querySql, data);
};

exports.getData = (req, res) => {
  // buat query sql
  const querySql = "SELECT * FROM restfull_api";

  getResfullApi(res, querySql);
};

exports.updateData = (req, res) => {
  // buat variabel penampung data dan query sql
  const data = { ...req.body };
  const querySearch = "SELECT * FROM restfull_api WHERE id = ?";
  const queryUpdate = "UPDATE restfull_api SET ? WHERE id = ?";

  updateRestfullApi(res, querySearch, queryUpdate, req.params.id, data);
};

exports.deleteData = (req, res) => {
  // buat query sql untuk mencari data dan hapus
  const querySearch = "SELECT * FROM restfull_api WHERE id = ?";
  const queryDelete = "DELETE FROM restfull_api WHERE id = ?";

  deleteRestfullApi(res, querySearch, queryDelete, req.params.id);
};
