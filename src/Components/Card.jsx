import React from 'react';
import './Card.css'

const Card = ({element, index, deleteTodo}) => {
    return (
        <div className='card'> 
        <div key={index}>
            <h1 className='card-title'>My Todos</h1>
            <h1>{element.id}</h1>
            <h1>{element.title}</h1>
           
            <h1>{element.descripation}</h1>
            <div className='card-details text-bg-danger '>
            <p>Status:</p>
            <select className='cardm1 text-bg-danger '>
                <option value={element.completed === 'true'}>Completed</option>
                <option value={element.Completed === 'false'}>Not Completed</option>
            </select>
            </div >
            <div className='card-buttons'>
            <button className='edit'>Edit</button>
            <button className='delete' onClick={()=>deleteTodo(element.id)}>Delete</button>
            </div>
        </div>
        </div>
    );
};

export default Card;