import React, {useState} from 'react';

const Tasks = () => {

    const [tasksList, setTasksList] = useState ([]) 
    const [newTask,setNewTask] = useState('')
    
    function addTask(){
        
        setTasksList([...tasksList,newTask]);
        
    }

    function enterDone(e){
        if (e.key == 'Enter'){
            setTasksList([...tasksList, newTask]);
            setNewTask('');
        }

    }

    const deletTask = (index) => {
        
        setTasksList(tasksList.filter((_, i) => i !== index));
    
    }

    return (
        <>
        <div className="container-fluid todolist">
            <h1>todos</h1>
            
            <input 
            type="text"
            name="task" 
            placeholder="What needs to be done?" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
            onKeyDown={enterDone} />
            
            <ul>

                {tasksList.map((task, index) => 
                <li className="items" key={index}>
                    <span>{task}</span>
                    <button className="delete-button" onClick={()=> deletTask(index)} >x</button>
                </li>)}

                {/* <li><button onClick={addTask} >Add to do</button></li> */}

                <li><p className="itemsleft">{tasksList.length}items left</p></li>
            </ul>
         
            
            
        </div>
        </>
    );

};


export default Tasks 