//Styles
import styles from "./TaskForm.module.css"

//Interfaces
import {ITask} from "../Interfaces/Task"

import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react'

interface Props {
    btnText: string;
    taskList: ITask[];
    setTaskList?: React.Dispatch <React.SetStateAction<ITask[]>>
}

const TaskForm = ({btnText, taskList}: Props) => {

    const [id, setId] = useState <number> (0);
    const [title, setTitle] = useState <string> ("");
    const [difficult, setDifficult] = useState <number> (0);

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        const id = Math.floor(Math.random()*1000);

        const newTask: ITask = {id, title, difficult}
        
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "title") {
            setTitle (e.target.value);
        } else {
            setDifficult (parseInt(e.target.value));
        }
    };

    return (
        <>
            <form onSubmit={addTaskHandler} className={styles.form}>
                <div className={styles.input_container}>
                    <label htmlFor="title">Título</label>
                    <input type="text" name='title' placeholder='Título da Tarefa' onChange={handleChange}/>
                </div>
                <div className={styles.input_container}>
                    <label htmlFor="difficult">Dificuldade</label>
                    <input type="text" name='difficult' placeholder='Dificuldade da Tarefa' onChange={handleChange}/>
                </div>
                <input type="submit" value={btnText}/>
            </form>
        </>
    )
}

export default TaskForm