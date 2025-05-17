const ToDoModel = require('../models/ToDoModel')
console.log("------------------------>ToDoModel", ToDoModel);

module.exports.getToDo = async(req,res) =>{
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo = async (req, res) => {
    const { text } = req.body;
    ToDoModel
        .create({ text })
        .then((data) => {
            console.log("Added the text");
            console.log(data);
            res.send(data); // send response here
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Error saving ToDo");
        });
    // Remove the res.send(toDo) here — it is undefined and unnecessary
}


module.exports.updateToDo = async(req,res) =>{
    const { _id,text } = req.body
    console.log("------------------------>req.body", req.body);
    ToDoModel
    .findByIdAndUpdate( _id,{text})
    .then(() => res.send("Updated Successfully!"))
    .catch((err) => console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
  const { id } = req.params; 
  console.log("------------------------>req.params", req.params);
  console.log("------------------------>req.body", req.body);
  console.log("Deleting ID:", id);
  try {
    await ToDoModel.findByIdAndDelete(id);
    res.send("Deleted Successfully!");
  } catch (err) {
    console.error("Error deleting:", err);
    res.status(500).send("Failed to delete");
  }
};
