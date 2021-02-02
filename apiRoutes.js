const fs = require("fs");
var notes = require("./db/db.json")

module.exports = (app) => {
    app.get("/api/notes", function(req, res) {
        return res.json(notes)
    })

    app.post("/api/notes", function(req, res) {
    let newNote = req.body;
    newNote.id = notes.length + 1;
    
    
    notes.push(newNote)
    console.log(newNote);
    res.json(newNote);
    })

    app.delete("/api/notes/:id", function(req, res) {
        var delNote = req.params.id;
        

        console.log(delNote);
        notes.splice((req.params.id - 1), 1)
        for (var i = 0; i < notes.length; i++) {
        notes.id = i + 1
        }
        console.log(notes)
        res.json(notes)
      
        // for (var i = 0; i < characters.length; i++) {
        //   if (chosen === characters[i].routeName) {
        //     return res.json(characters[i]);
        //   }
        // }
      
        // return res.json(false);
      

    })
}
//     let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

//     app.get("/api/notes", (req, res) => {
//         return res.json(noteList);
//     });

// }