import React from 'react';

const FilterTodo = ({statusFilter,onStatusFilterChange}) => {

    const getSelecClassName = ()=>{
        if(statusFilter === "completed"){
            return "btn btn -success";
        }
        else if (statusFilter === "notCompleted"){
            return "btn btn-danger";
        }
        return "btn btn-info";
    }
    return (
        <div className='todo-title'>
            <div className='my-todos'>
                <label>My Todo</label>
                </div>
                <div className='filter-todo'>
                    <label>Status Filter</label>
                    <select className={getSelecClassName()} value ={statusFilter} onChange={(e)=>onStatusFilterChange(e.target.value)}>
                     <option value="all " className='all bg-light'>
                        All
                     </option>
                     <option value= "completed"className="complete bg-success text-white">
                        Completed
                     </option>

                     <option value= "notcompleted"className="complete bg-danger text-white">
                       not Completed
                     </option>

                    </select>
                </div>
            </div>
        
    );
};

export default FilterTodo;