import React, { useState } from "react";
import Button from "../components/button";
import InputField from "../components/inputField";
import ItemChart from "../components/itemChart";


function TodoList() {
    const [isEditing, setIsEditiing] = useState(false);
    const [todoList, setTodoList] = useState([]);
    const [todoListItem, setTodoListItem] = useState("");

    const handleIsEditing = () => {
        setIsEditiing(!isEditing);
    }

    const handleClearList = () => {
        setIsEditiing(!isEditing);
        setTodoList([]);
        setTodoListItem("");
    }

    const handleList = (item) => {
        if (todoListItem !== "" && todoList.length < 20){
            setTodoList([...todoList, {item: todoListItem}]);
        }
    }

    const handleInput = (e) => {
        setTodoListItem(e.target.value)
    }


    return (
        <div>
            {
                isEditing ? 
                <div>
                    <InputField value={todoListItem} onChange={handleInput} />
                    <Button text="Add to List" onClick={handleList} />
                    <Button text="Clear List" onClick={handleClearList}/>
                    <ItemChart list={todoList}/>
                </div>
                : <Button text="Create List" onClick={handleIsEditing} />
            }
        </div>
    );
}

export default TodoList;
