import React, { useState } from 'react';
import Header from '../Header/Header';
import ListItems from '../ListOfTodoItems/ListItems';

export default function Home(){
    const [listItems, setListItems] = useState([])

    const updateData = (item) => {
        setListItems(oldArray => [...oldArray, item]);
    }

    return (
        <div>
            <Header updateList={updateData}/>
            <ListItems list={listItems}/>   
        </div>
    )
}