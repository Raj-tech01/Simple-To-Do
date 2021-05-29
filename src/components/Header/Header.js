import React, { useState } from 'react';
import './Header.css';

export default function Header(props){
    const [item, setItem] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()
        if(item !== ""){
            props.updateList(item)
            setItem('')
        }
    }

    return (
            <div className="header-container">
                <div>
                    To-Do Event
                </div>
                <div className="input-box">
                    <form onSubmit={(e)=>onSubmit}>
                       <input type="text" className="input-box" value={item} onChange={(e)=>setItem(e.target.value)} placeholder="Add items here"/>
                       <button className="button-add" onClick={onSubmit}>Add</button>
                    </form>
                </div>
            </div>
        )
}