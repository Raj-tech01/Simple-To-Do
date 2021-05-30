import React, { useState } from 'react';
import './ListItems.css';

export default function Header(props){
    return (
            <div className="list-container">
                    {
                        props.list.map((d,indexItem)=>{
                        return(<div key={indexItem} className="list-item-container">
                               <li  className="list-item"><i className="fa fa-times overlay" aria-hidden="true" onClick={()=>props.onRemove(indexItem)}/>{d}</li>
                            </div>)})
                    }
            </div>
        )
}