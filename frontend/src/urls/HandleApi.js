import axios from 'axios'

// const baseurl = "http://localhost:3000";
const baseurl = "https://todoapp-mern-sxqe.onrender.com"

const getAllToDo = (setToDo) => {
  axios.get(baseurl)
    .then(({ data }) => {
      console.log("data............", data);
      if (Array.isArray(data)) {
        setToDo(data); 
      } else {
        setToDo([]); 
        console.error("Expected array but got:", data);
      }
    })
    .catch((err) => {
      console.error("Error fetching todos:", err);
      setToDo([]); // fallback on error
    });
};


const addToDo = (text, setText, setToDo) => {
  axios.post(`${baseurl}/save`, { text }).then(() => {
    setText("");
    getAllToDo(setToDo);
  });
};

// Define update and delete if needed
const updateToDo = (toDoId, text, setToDo, setText,setIsUpdating) => {
  axios.post(`${baseurl}/update`, { _id: toDoId, text })
    .then(() => {
        setText("");
        setIsUpdating(false)
        getAllToDo(setToDo);
    });
};

const deleteToDo = (id, setToDo) => {
  axios.delete(`${baseurl}/delete/${id}`).then(() => {
    getAllToDo(setToDo);
  });
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
