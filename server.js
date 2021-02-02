const express = require('express');
const app = express();
const path = require('path');


const PORT = process.env.PORT || 8000;


app.use(express.static(__dirname + '/public'));
app.use(express.static('./'));

//for json parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./apiRoutes")(app);
require("./htmlRoutes")(app);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
