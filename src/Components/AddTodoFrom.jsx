import React, { useState } from 'react';

const AddTodoFrom = ({onAdd}) => {

    const [name , setName]= useState("");
    const [descripation, setDescripation] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(name || descripation){
            setError("please fill in fields");
            return;
        }

        onAdd({name, descripation});
        setName("");
        setDescripation("");
        setError("");
    };
    return (
        <div className='add- todo'>
            
            <from onSubmit ={handleSubmit}>
                <div>
                    <input type="text" placeholder='Todo Name' value={name} onChange={(e)=>{
                        setName(e.target.value)}}/>
                        
                        <input  placeholder='description' value={descripation} onChange={(e)=>{
                        setDescripation(e.target.value)}}/>
                        <buton type ="submit">Add Todo</buton>
                </div>
                {error && <p className='error-message danget'>{error}</p>}
            </from>
        </div>
    );
};

export default AddTodoFrom;