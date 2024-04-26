import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TaskEditPage } from "./pages/TaskEditPage";
import { TaskCreatePage } from "./pages/TaskCreatePage";
import { Page404 } from "./pages/Page404";
import TasksProvider from "./components/Context/TasksContext";

function App() {
  return (
    <TasksProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks/:taskId/edit" element={<TaskEditPage />} />
          <Route path="/tasks/create" element={<TaskCreatePage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </TasksProvider>
  );
}

export default App;
