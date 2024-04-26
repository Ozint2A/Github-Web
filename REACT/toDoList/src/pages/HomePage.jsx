import Layout from "../components/Layout/Layout";
import { useState, useContext } from "react";
import { Navbar } from "../components/Navbar";
import { Task } from "../components/Task/Task";
import { TaskList } from "../components/TaskList/TaskList";
import "../styles/index.css";
import { TasksContext } from "../components/Context/TasksContext";

export function HomePage() {
  const { tasks, setTasks } = useContext(TasksContext);
  const tacheFini = tasks.filter((tache) => tache.terminer === true);
  const tacheEnCours = tasks.filter((tache) => tache.terminer === false);
  return (
    <main>
      <Navbar nom="Todo" />
      <Layout>
        <TaskList titre="Tâches en cours" />
        <div className="task_list">
          {tacheEnCours.map((tache) => (
            <Task key={tache.id} task={tache} />
          ))}
        </div>
        <TaskList titre="Tâches terminées" />
        <div className="task_list">
          {tacheFini.map((tache) => (
            <Task key={tache.id} task={tache} />
          ))}
        </div>
      </Layout>
    </main>
  );
}
