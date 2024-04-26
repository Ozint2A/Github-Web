import "../../styles/index.css";
import { Task } from "../Task/Task";
export function TaskList(props) {
  return <h1 className="task-list-titre">{props.titre}</h1>;
}
