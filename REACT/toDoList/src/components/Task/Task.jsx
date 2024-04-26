import Link from "../Link";
import { useState, useContext } from "react";
import "../../styles/index.css";
import Modal from "../Modal/Modal";
import { TasksContext } from "../Context/TasksContext";

export function Task({ task }) {
  const [modal, setModal] = useState(false);
  const { tasks, setTasks } = useContext(TasksContext);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [isChecked, setIsChecked] = useState(false);

  const info = (e) => {
    setIsChecked(!isChecked);

    const tasksModif = [...tasks];

    const index = tasksModif.findIndex((tache) => tache.id === task.id);
    tasksModif[index] = {
      ...task,
      terminer: !task.terminer,
    };
    setTasks(tasksModif);
  };

  return (
    <div className="task">
      <div>
        <div>
          <input
            type="checkbox"
            name="selectTask"
            id="selectTask"
            checked={task.terminer}
            onChange={info}
          />
        </div>
      </div>

      <div className="task-element">
        <div className="header-element">
          <p
            style={{ textDecoration: task.terminer ? "line-through" : "none" }}
          >
            <strong>{task.titre}</strong>
          </p>
          <div className="liens-element">
            <Link nom="Modifier" to={`/tasks/${task.id}/edit`} />/
            <Link nom="Supprimer" color="error" onClick={toggleModal} />
          </div>
        </div>
        <p style={{ textDecoration: task.terminer ? "line-through" : "none" }}>
          {task.date}
        </p>
        <p
          style={{
            textDecoration: task.terminer ? "line-through" : "none",
            color: task.terminer ? "gray" : "black",
          }}
        >
          {task.description}
        </p>
      </div>
      <Modal modal={modal} onClick={toggleModal} taskId={task.id} />
    </div>
  );
}
