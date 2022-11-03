import React from "react";
import styles from '../styles/Tasks.module.css';
import { RiDeleteBinFill } from 'react-icons/ri'

export function Tasks({id, text, completed, completedTask, deleteTask}) {
    return (
        <div className={completed ? styles.taskContainerCompleted : styles.taskContainer}>
            <div onClick={() => completedTask(id)} className={styles.taskText}>
                {text}
            </div>
            <div className={styles.taskIconContainer}>
               <RiDeleteBinFill onClick={() => deleteTask(id)}
                className={styles.taskIcon} />
            </div>
        </div>
    )
}