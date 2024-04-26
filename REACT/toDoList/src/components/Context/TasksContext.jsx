import React, { createContext, useState, useEffect } from "react";
// import { taches } from "../../taches";

// Créez le contexte
export const TasksContext = createContext();

// Créez le provider
function TasksProvider({ children }) {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(storedTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;
