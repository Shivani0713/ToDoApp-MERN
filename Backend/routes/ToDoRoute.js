const {Router} = require('express')
const { getToDo, saveToDo, updateToDo, deleteToDo } = require('../controllers/ToDoControllers')

const router = Router()

// router.get('/',(req,res) =>{
//     res.json({message:"Hello"})
// })

router.get('/',getToDo)
router.post('/save',saveToDo)
router.post('/update',updateToDo)
router.delete('/delete/:id', deleteToDo);

module.exports = router