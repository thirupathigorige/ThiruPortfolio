import { useState } from 'react';
import './todo.css';
import { FaPlus, FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

const ToDo = () => {

    const [todoVal, setTodoVal] = useState();
    const [todoList, setTodoList] = useState([]);

    const changeInputHandler = (e) => {
        setTodoVal(e.target.value);
    }

    const handleAddTodo = () => {
        setTodoList([...todoList, todoVal]);
        setTodoVal('');
    }

    const handleDelete = (index) => {
        const filteredList = todoList.filter((li, i) => i !== index);
        setTodoList(filteredList);
    }

    const handleUp = (index) => {
        if(index > 0) {
            const updateTasks = [...todoList];
            [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index - 1], updateTasks[index]];
            setTodoList(updateTasks);
        }
    }

    const handleDown = (index) => {

        if(index < todoList.length) {
            const updateTasks = [...todoList];
            [updateTasks[index], updateTasks[index + 1]] = [updateTasks[index + 1], updateTasks[index]];
            setTodoList(updateTasks);
        }

    }

    return (
        <div className="todo-main">
            <h4>To-Do List</h4>
            <div className="todo-form">
                <input type="text" className='input' placeholder='Add you to-do list here' value={todoVal} onChange={changeInputHandler} />
                <button className='button' onClick={handleAddTodo}><FaPlus /></button>
            </div>
            <div className="todo-list">
                {todoList.map((list, index) =>
                    <li key={index}>{index + 1}. {list}
                        <MdOutlineDelete onClick={() => handleDelete(index)} className='todo-delete' />
                        <FaArrowAltCircleUp onClick={() => handleUp(index)}   className='todo-up' />
                        <FaArrowAltCircleDown onClick={() => handleDown(index)}  className='todo-down' />
                    </li>
                )}
            </div>
        </div>
    )
}

export default ToDo;