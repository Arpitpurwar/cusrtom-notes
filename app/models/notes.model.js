const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title:String,
    content:String
},
   { 
       timestamps:true
   });

   module.exports = mongoose.model('Note',NoteSchema);
//    const NoteSchema = mongoose.Schema;
//    const NoteSchema = new Schema({
//   name:{
//       type:String,
//       required:[true,'Name field is required']
//   },
//   rank:{
//     type:String
//   },
//   available:{
//    type:Boolean,
//    default: false
// }
//  })