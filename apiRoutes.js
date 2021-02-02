const fs = require("fs");
var notes = require("./db/db.json")

module.exports = (app) => {
    app.get("/api/notes", function(req, res) {
        return res.json(notes)
    })

    app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    notes.push(newNote)
    console.log(newNote);
    res.json(newNote);
    })
}
//     let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

//     app.get("/api/notes", (req, res) => {
//         return res.json(noteList);
//     });

// }