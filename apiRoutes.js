const fs = require("fs");
var notes = require("./db/db.json")

module.exports = (app) => {
    app.get("/api/notes", function(req, res) {
        return res.json(notes)
    })
}



//     let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

//     app.get("/api/notes", (req, res) => {
//         return res.json(noteList);
//     });
// }