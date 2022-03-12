import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Menu from "./components/Menu";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import {addTask, completeTask, deleteTask, editTask, fetchData} from "./redux/actions";
import {Tasks} from "./components/Tasks";

function App() {
    const dispatch = useDispatch();
    const days = useSelector(({days}) => days);
    const navigate = useNavigate();
    const location = useLocation();
    const [activeItem, setActiveItem] = React.useState();

    React.useEffect (() => {
        dispatch(fetchData());

    },[]);


    React.useEffect(() => {
        const dayId = location.pathname.split('/days/')[1];
        const day = days.find(day => day.id == dayId);
        setActiveItem(day);
    }, [days, location.pathname])

    const onRemoveTask = (list, task) => {
        dispatch(deleteTask([list, task]));
    }
    const onAddTask = (listId, taskObj) => {
        dispatch(addTask([listId, taskObj]))
    }
    const onCompleteTask = (listId, taskId, isCompleted) => {
        dispatch(completeTask([listId, taskId, isCompleted]))
    }
    const onEditTask = (listId, taskObj) => {
        dispatch(editTask([listId, taskObj]));
    }


    return (
      <div className="todo">
          <div className={"todo__tasks"}>
          <Routes>
          <Route exact path = '/days/:id' element = {
                  days && activeItem && (
                      <Tasks
                          list = { activeItem }
                          onAddTask = {onAddTask}
                          onRemoveTask = {onRemoveTask}
                          onEditTask = {onEditTask}
                          onCompleteTask = {onCompleteTask}
                      />)
              }/>
          </Routes>
      </div>
        <div className="todo__sidebar">
                <Menu
                    days={days}
                    onClickItem={(i) => {
                        navigate(`/days/${i.id}`)
                    } }
                    activeItem = {activeItem}
                />
            </div>
      </div>
  );
}
export default App;
