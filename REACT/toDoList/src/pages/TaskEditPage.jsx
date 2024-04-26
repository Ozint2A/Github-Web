import { useParams } from "react-router-dom";
import { TaskList } from "../components/TaskList/TaskList";
import { Navbar } from "../components/Navbar";
import "../styles/index.css";
import Link from "../components/Link";
import { Button } from "../components/Button";
import { useState, useContext, useEffect } from "react";
import { TasksContext } from "../components/Context/TasksContext";
import { useNavigate } from "react-router-dom";

export function TaskEditPage() {
  const navigate = useNavigate();

  const { taskId } = useParams();
  const { tasks, setTasks } = useContext(TasksContext);

  const tache = tasks.find((tache) => tache.id === parseInt(taskId));
  const [nomTache, setNomTache] = useState(tache.titre);
  const [descriptionTache, setDescriptionTache] = useState(tache.description);

  const info = (e) => {
    e.preventDefault();
    const tasksModif = [...tasks];

    const index = tasksModif.findIndex(
      (tache) => tache.id === parseInt(taskId)
    );
    tasksModif[index] = {
      ...tasksModif[index],
      titre: nomTache,
      description: descriptionTache,
    };
    setTasks(tasksModif);
    navigate("/");

    console.log("Tâche modifié :", tasksModif[index]);
  };

  return (
    <main>
      <Navbar nom="Todo" />
      <div className="main">
        <TaskList titre="Modifier Nom de la tâche" />
        <form className="edit-main" onSubmit={info}>
          <div className="edit-header">
            <label>Titre</label>
            <textarea
              className="text_area"
              name="titre"
              id="titre"
              cols="30"
              rows="2"
              value={nomTache}
              onChange={(e) => setNomTache(e.target.value)}
            ></textarea>
          </div>
          <div className="edit-body">
            <label>Description</label>
            <textarea
              className="text_area"
              name="description"
              id="description"
              cols="30"
              rows="5"
              value={descriptionTache}
              onChange={(e) => setDescriptionTache(e.target.value)}
            ></textarea>
          </div>
          <div className="edit-action">
            <Link nom="Retour à la liste des tâches" to="/" />
            <Button type="submit">Modifier</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
