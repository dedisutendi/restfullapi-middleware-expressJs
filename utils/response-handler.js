/*Disini gua buat 2 buah fungsi untuk handling response dari server. Kenapa perlu dipisah? supaya kalian terbiasa ngoding terstruktur dengan file yang terpisah sesuai dengan kebutuhannya. Dan supaya mempermudah kalian juga kalau seumpama lagi ngelakuin maintenance project.*/

const responseData = function (response, statusCode, values) {
  var data = {
    success: true,
    data: values,
  };
  response.status(statusCode).json(data);
  response.end();
};

const responseMessage = function (response, statusCode, message) {
  var data = {
    success: true,
    message: message,
  };
  response.status(statusCode).json(data);
  response.end();
};

module.exports = { responseData, responseMessage };
