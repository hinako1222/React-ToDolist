import React,{ useState } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import {nanoid} from "nanoid";

function App(props) {
  const [tasks,setTasks] = useState(props.tasks);
  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  const taskList = tasks.map(task => (
    <Todo id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    />
  ));
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task' ;
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  return (
    <div className="toodoapp stack-large">
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
     <h2 id="list-heading">
       {headingText}
     </h2>
     <ul
      role="list"
      className="todo-list stack-large stack-exceptoon"
      aria-labelledby="list-heading"
     >
       {taskList}
       </ul>
    </div>
  );
}

export default App;
