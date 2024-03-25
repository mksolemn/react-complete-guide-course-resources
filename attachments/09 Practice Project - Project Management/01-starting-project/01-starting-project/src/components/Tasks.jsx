import NewTasks from "./NewTask.jsx";
import Button from "./Button.jsx";

export default function Tasks({tasks, onAdd, onDelete}) {
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTasks onAdd={onAdd}/>
        {
            tasks.length === 0 &&
            <p className="text-stone-800  mb-4">No tasks yet.</p>
        }
        {
            tasks.length > 0 &&
            <ul>
                {tasks.map(task => {
                    return <li key={task.id} className="flex justify-between my-4">
                        <span>{task.text}</span>
                        <button onClick={() => onDelete(task.id)}>Clear</button>
                    </li>
                })
                }
            </ul>
        }
    </section>
}