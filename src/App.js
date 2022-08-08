import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Summary from "./components/Summary";
import "./App.css";

const App = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "someting 1",
      completeness: false,
    },

    {
      id: 2,
      text: "someting 2",
      completeness: false,
    },
  ]);

  const [taskCounter, setCounter] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [IndexOfEdit, setIndexOfEdit] = useState();
  const [value, setValue] = useState("");
  const [summaryButton, setSummaryButton] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);

  //delete
  const deleteTask = (id) => {
    const ToDo = [...tasks];

    if (ToDo.find((x) => x.id === id).completeness) {
      setCounter(taskCounter - 1);
    }

    setTask(tasks.filter((task) => task.id !== id));
  };
  //add
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const completeness = false;

    const newTask = { completeness, id, ...task };

    setTask([...tasks, newTask]);
  };
  const checkTask = (id) => {
    const newToDo = [...tasks];

    newToDo.find((x) => x.id === id).completeness = !newToDo.find(
      (x) => x.id === id
    ).completeness;
    newToDo.find((x) => x.id === id).completeness
      ? setCounter(taskCounter + 1)
      : setCounter(taskCounter - 1);
    AddToSummary();
  };

  const UpdateTask = () => {
    const newToDo = [...tasks];
    newToDo[IndexOfEdit].text = value;
    setTask(newToDo);
  };
  const RemoveTasks = () => {
    setCounter(0);
    setTask([]);
  };

  const AddToSummary = () => {
    setCompletedTasks(tasks.filter((task) => task.completeness !== false));
    console.log(completedTasks);
  };
  const clearTasks = () => {
    tasks
      .filter((task) => task.completeness !== false)
      .forEach((element) => {
        checkTask(element.id);
      });
    setCounter(0);
  };

  const ShowSummary = () => {
    setSummaryButton(true);
    AddToSummary();
  };
  const backToList = () => {
    setSummaryButton(false);
  };
  if (summaryButton) {
    return (
      <div class="container">
        <h1 className="header">Summary</h1>

        <p className="text">List of items completed:</p>

        <Summary items={completedTasks} />

        <button className="btn" onClick={backToList}>
          {" "}
          Back{" "}
        </button>
      </div>
    );
  } else {
    return (
      <div className="container">
        <Header />
        <AddTask
          onAdd={addTask}
          tasks={tasks.length}
          taskCounter={taskCounter}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setValue={setValue}
          value={value}
          UpdateTask={UpdateTask}
        />

        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onUpdate={UpdateTask}
          checkTask={checkTask}
          setIsEditing={setIsEditing}
          setIndexOfEdit={setIndexOfEdit}
          setValue={setValue}
        />

        <button className="btn" onClick={clearTasks}>
          Clear all{" "}
        </button>
        <button className="btn" onClick={RemoveTasks}>
          {" "}
          Remove all{" "}
        </button>
        <button className="btn" onClick={ShowSummary}>
          Summary
        </button>
      </div>
    );
  }
};

export default App;
