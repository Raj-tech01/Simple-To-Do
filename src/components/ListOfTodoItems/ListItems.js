import React, { useState } from 'react';
import './ListItems.css';

export default function Header(props){
    return (
            <div className="list-container">
                    {
                        props.list.map(d=><div className="list-item"><li>{d}</li></div>)
                    }
            </div>
        )
}