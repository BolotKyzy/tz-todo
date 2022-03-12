import React from "react";
import './Menu.scss';
import ProgressBar from "./ProgressBar";

const Menu = ({days, onClickItem, activeItem}) => {

    const onClickTheItem = (item) =>  {
        if(typeof onClickItem === "function")  onClickItem(item)
    };

    return <ul className = "list">
        {
            days.map((item, index) => {
                let sumOfCompleted = item.tasks.filter(i => i.completed == true);
                <ProgressBar/>
                return (
                    <li  key = {index} onClick={() => onClickTheItem(item)} className={activeItem && activeItem.id === item.id ? "active" : "" }>
                        <ProgressBar name = {item.name} percentage = {(sumOfCompleted.length*100)/item.tasks.length}/>
                        <span>{item.name}</span>
                    </li>
                )
            })
        }
    </ul>
}
export default Menu;