import axios from 'axios'

const baseUrl = 'https://fullstack-todoapp-backend-vj6r.onrender.com'

const getAllToDo = (setToDo) => {
    axios.get(baseUrl)
    .then(({data}) => {
        console.log('data ----->', data);
        setToDo(data);
    })
}

const addToDo = (text, setText, setToDo) => {
    axios
    .post(`${baseUrl}/save`, {text})
    .then(({data}) => {
        console.log('data ----->', data);
        setText('');
        getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateTodo = (toDOId, text, setToDo, setText, setIsUpdating) => {
    axios
    .post(`${baseUrl}/update`, {_id: toDOId, text})
    .then(({data}) => {
        setText('');
        setIsUpdating(false)
        getAllToDo(setToDo)  ;
    })
    .catch((err) => console.log(err));
};


const deleteTodo = (_id,setToDo) => {
    axios
    .post(`${baseUrl}/delete`, {_id})
    .then(({data}) => {
        getAllToDo(setToDo)  ;
    })
    .catch((err) => console.log(err));
};

export {getAllToDo, addToDo, deleteTodo ,updateTodo}