import React from 'react';
import './Tasks.scss';
import Task from "./Task";
import {AddTaskForm} from "./index";
const Tasks = ({list, onRemoveTask, onAddTask, onCompleteTask, onEditTask}) => {
    return (
        <div className={"tasks"}>
            <div className="tasks-header">
                <h2>{list.name}</h2>
            </div>
            <div className="tasks-items">
                {list.tasks && !list.tasks.length && <h1>No tasks</h1>}
                {
                    list.tasks && list.tasks.map(task => <Task key = {task.id}list={list} task = {task} onRemove = {onRemoveTask} onCompleteTask = {onCompleteTask} onEdit={onEditTask}/> )
                }
                <AddTaskForm key = {list.id} list = {list} onAddTask = {onAddTask} />
            </div>
        </div>


    )

}
export default Tasks;