import { useReducer, useState } from "react";
import Header from "./components/Header";
import Kanban from "./components/Kanban/Kanban";
import ListView from "./components/List/ListView";
import { reducer } from "./store/reducer";
import { generateTasks } from "./data/generateTask";
import "./App.css";

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    tasks: generateTasks(),
  });

  const [view, setView] = useState("kanban");

  return (
    <div className="app">
      <Header view={view} setView={setView} />

      {view === "kanban" && <Kanban tasks={state.tasks} dispatch={dispatch} />}
      {view === "list" && <ListView tasks={state.tasks} dispatch={dispatch} />}
    </div>
  );
}
