import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";


// export function Counter() {
//     console.log('Counter')
//     let[ data, setData] = useState(1);
//
//     return <div onClick={()=> {setData(data + 1)}}>{data}</div>
// }

export type FilterValuesType = 'All' | 'Active' | 'Completed';

function App() {


    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'Redux', isDone: false}
    ]);

    let [filter, setFilter] = useState<FilterValuesType>('All')

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(el => el.id !== id)
        setTasks(filteredTasks)
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let tasksForTodoList = tasks;
    if (filter === 'Completed') {
        tasksForTodoList = tasks.filter(el => el.isDone === true)
    }
    if (filter === 'Active') {
        tasksForTodoList = tasks.filter(el => el.isDone === false)
    }


    return (
        <div className="App">
            <Todolist title={'What to learn'}
                      tasks={tasksForTodoList}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />


        </div>
    );
}

export default App;
