import { Button } from "../components/Button";
import Link from "../components/Link";
import { Navbar } from "../components/Navbar";
import { TaskList } from "../components/TaskList/TaskList";
import { useState, useContext, useEffect } from "react";
import { TasksContext } from "../components/Context/TasksContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export function TaskCreatePage() {
  const navigate = useNavigate();

  const { taskId } = useParams();
  const { tasks, setTasks } = useContext(TasksContext);
  const [nomTache, setNomTache] = useState("");
  const [descriptionTache, setDescriptionTache] = useState("");

  const info = (e) => {
    e.preventDefault();
    const today = new Date();

    const newTask = {
      id: tasks.length + 1,
      titre: nomTache,
      date: today.toLocaleDateString("fr-FR", { timeZone: "Europe/Paris" }),
      description: descriptionTache,
      terminer: false,
    };

    setTasks([...tasks, newTask]);
    navigate("/");

    console.log("Tâche modifié :", newTask);
  };
  return (
    <main>
      <Navbar nom="Todo" />
      <div className="main">
        <TaskList titre="Créer une nouvelle tâche" />
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
            <label>Contenu</label>
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
            <Button type="submit">Créer une tâche</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
