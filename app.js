const express = require("express");
const bodyParser = require("body-parser");
const restfullapiRouter = require("./routes/restfullapi-router");
const errorHandler = require("./middleware/error");
const app = express();
//menyiapkan port server
const PORT = process.env.PORT || 3000;

//pengaturan body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set routing
app.use("/api/restfullapi", restfullapiRouter);

// set error middleware
app.use(errorHandler);

// Buat dan Running servernya
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
