import React, { useState } from "react";
import styles from '../styles/TaskForm.module.css';
import { v4 as uuidv4} from 'uuid';

export function TaskForm(props) {

    const [input, setInput] = useState('');

    const handleChange = e => {
       setInput(e.target.value);
    }

    const handleShipping = e => {
       e.preventDefault();
         const newTask ={
            id: uuidv4(),
            text: input,
            completed: false
        }

      props.onSubmit(newTask); 
      document.querySelector('input').value=''
    }

    return(
       <form onSubmit={handleShipping} className={styles.taskForm}>
            <input
                className={styles.taskInput}
                type='text'
                placeholder="Escreva uma tarefa"
                name="text"   
                onChange={handleChange}     
            />
            <button className={styles.taskButton}>
                Adicionar tarefa
            </button>
       </form>
    )
}