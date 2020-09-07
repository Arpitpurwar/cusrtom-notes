module.exports=(app)=>{
 const note = require('../controllers/notes.controller');
// Create a new Note
 app.post('/notes',note.create);
  // Retrieve all Notes
 app.get('/notes',note.findAll);
// retrieve specific note
app.get('/notes/:noteId',note.findOne);
// update specfic note
app.put('notes/:noteId',note.update);
// delete specfic note
app.delete('/notes/:noteId',note.delete);
}