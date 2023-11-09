import React, { useState } from "react";
import Button from "./button";
import InputField from "./inputField";
import ItemChart from "./itemChart";


function List() {
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
        setTodoList([...todoList, {item: todoListItem}]);
    }

    const handleInput = (e) => {
        setTodoListItem(e.target.value)
    }

    return (
        <div>
            {
                isEditing ? 
                <div>
                    <ItemChart list={todoList} />
                    <InputField value={todoListItem} onChange={handleInput} />
                    <Button text="Add to List" onClick={handleList} />
                    <Button text="Clear List" onClick={handleClearList}/>
                </div>
                : <Button text="Create List" onClick={handleIsEditing} />
            }
        </div>
    );
}

export default List;
