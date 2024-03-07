import React, { useState } from 'react';

function TaskManager() {
    const [tasks, setTasks] = useState([
        id,
        title,
        completed,
    ]);

    const [taskId, setTaskId] = useState(0);

    const addTask = () => {
        setTasks({
            ...tasks,


        });
    };

    const toggleTask = (id) => {
        const foundTask = tasks.map((task) => {
            if (task.id === id) {

            }
        });
    };

    return (
        <div>
            <button inClick={addTask}>Add Task</button>
        </div>
    );
}

export default TaskManager;
