import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";
import TaskForm from "./components/TaskForm";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<TaskList />} />

          <Route path="//tasks/new" element={<TaskForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
