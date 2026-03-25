import { useReducer, useState } from "react";
import Header from "./components/Header";
import Kanban from "./components/Kanban/Kanban";
import ListView from "./components/List/ListView";
import Timeline from "./components/Timeline/Timeline";

import { reducer } from "./store/reducer";
import { generateTasks } from "./data/generateTask";

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    tasks: generateTasks(500),
  });

  const [view, setView] = useState("kanban");

  return (
    
    <div className="p-4">
      
      <Header view={view} setView={setView} />

      {view === "kanban" && (
        <Kanban tasks={state.tasks} dispatch={dispatch} />
      )}
      {view === "list" && (
        <ListView tasks={state.tasks} dispatch={dispatch} />
      )}
      {view === "timeline" && <Timeline tasks={state.tasks} />}
    </div>
  );
}
