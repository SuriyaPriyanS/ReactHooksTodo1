import React, { useState } from 'react';

const Input = ({addTodo}) => {

    const [title,setTitle]=useState('');
    const [descripation, setDescripation] = useState('');
    const handleSubmit=()=>{
        addTodo(title,descripation)
        setTitle('')
        setDescripation('')
    }

    

    
    return (
        

        <div className='input-container text-lg-center  '>

            <h1>Todo1
                
                
                 </h1>
            
            
            <input type='text' value ={title} placeholder='enter todo title' onChange={e=>setTitle(e.target.value)}/>
            <input type='text'  value = {descripation}placeholder='enter todo description'onChange={e=>setDescripation(e.target.value)}/>
        <button onClick={handleSubmit}>Add Todo</button>
          
            
        </div>

        
    );
};

export default Input;