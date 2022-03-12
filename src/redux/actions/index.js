import axios from "axios";

const fetchData = () => dispatch => {
    axios.get("http://localhost:3002/days?_embed=tasks")
        .then(res => {
            dispatch(getData(res.data))
        })
}

const getData = (items) => ({
    type: 'FETCH_DATA',
    payload: items
})
const deleteTask = (obj) => {

    if(window.confirm("Do you really want to delete this task?")) {
        axios
            .delete("http://localhost:3002/tasks/"+obj[1].id)

            .catch(() => {
            alert("Не удалось удалить задачу!");
        })
        return {
            type: 'DELETE_THE_TASK',
            payload: obj
        }

    }
}
const addTask = (obj) => {

    return {
        type: 'ADD_NEW_TASK',
        payload: obj

    }
}
const completeTask = (obj) => {
    axios
        .patch('http://localhost:3002/tasks/' + obj[1], {
            completed: obj[2]
        })
        .catch(() => {
            alert('Не удалось обновить задачу');
        });
    return {
        type: 'TO_COMPLETE_TASK',
        payload: obj
    }

}

export {
    fetchData,
    deleteTask,
    addTask,
    completeTask,
    }