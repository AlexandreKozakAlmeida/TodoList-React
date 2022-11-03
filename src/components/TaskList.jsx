
import styles from '../styles/TaskList.module.css';
import React, { useState } from "react";
import { TaskForm } from "./TaskForm";
import { Tasks } from "./Tasks";


export function TaskList() {
 
    const[tasks, setTasks] = useState([]);

    const addTask = task => {
      if(task.text.trim()) {
        task.text = task.text.trim();
        const updatedTasks = [task, ...tasks];
        setTasks(updatedTasks);
    }
     
    }

    const deleteTask = id => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    }

    const completedTask = id => {
        const updatedTasks = tasks.map(task => {
            if(task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
      <>
        <TaskForm onSubmit={addTask} />
        <div className={styles.taskListContainer}>
            {
                tasks.map((task) => 
               <Tasks key={task.id}
               id={task.id}
               text={task.text}
               completed={task.completed}
               deleteTask={deleteTask}
               completedTask={completedTask}
               />
                )  
            }
        </div>
      </>
    )
}