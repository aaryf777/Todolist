import React, { useState } from 'react';
import ReactDom from 'react-dom';
import Todoitem from './Todoitem';


function Todoapp() {

    let curr_key = 0;
    const options = { weekday: "long", month: "short", day: "numeric" };
    const today = new Date().toLocaleDateString("en-US", options);
    const [inputValue, setInputValue] = useState("");
    const [inputlist, setInputlist] = useState([]);


    const itemEvent = (event) => {
        setInputValue(event.target.value);
    };

    const addItem = () => {
        setInputlist((oldVal) => {
            return [...oldVal, inputValue]

        });
        setInputValue('');


    }

    const deleteItem = (index) => {
        console.log('clicked');
        setInputlist((oldItem) => {
            return oldItem.filter((currElem, indNo) => {
                if (indNo != index) {
                    return currElem;
                }
            })
        })




    }


    return (

        <>
            <div className="headcontainer">
                <div className="date">
                    {today}

                </div>

                <div className="inputblock">
                    <button onClick={addItem}>+</button>
                    <input type='text' onChange={itemEvent} placeholder="Add todo item" value={inputValue} />

                </div>

                <ol>

                    {
                        inputlist.map((itemVal, ind) => {
                            return <Todoitem
                                text={itemVal}
                                index={ind}
                                onSelect={deleteItem}
                                key={curr_key++}
                            />


                        })
                    }

                </ol>
            </div>
        </>

    );
};
export default Todoapp;


