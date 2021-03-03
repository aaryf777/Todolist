import React from 'react';

const TodoItem = (props) => {
    return (
    <>
    <div className = "todostyle">
    <li>{props.text}</li>
    <i className="fa fa-trash-o delete" onClick = {() =>{
        props.onSelect(props.index);
    }} ></i>
    </div>
    </>
    )
}
export default TodoItem;