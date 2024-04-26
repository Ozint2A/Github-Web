import React, { useState } from "react";
import "../../styles/index.css";
import Link from "../Link";
import { TasksContext } from "../../components/Context/TasksContext";
import { useContext, useEffect } from "react";

export default function Modal({ modal, onClick, taskId }) {
  const { tasks, setTasks } = useContext(TasksContext);

  // const tache = tasks.find((tache) => tache.id === parseInt(taskId));

  const handleDelete = () => {
    const deleting = tasks.filter((tache) => tache.id !== parseInt(taskId));
    setTasks(deleting);
  };
  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={onClick} className="overlay"></div>
          <div className="modal-content">
            <h2>Voulez-vous vraiment supprimer cette tâche ?</h2>
            <div className="modal-link">
              <Link nom="Retour" onClick={onClick} />
              <Link
                nom="Supprimer"
                color="error"
                onClick={() => handleDelete()}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
