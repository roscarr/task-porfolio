import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Archivos from "./pages/Archivos";
import TaskForm from "./pages/TaskForm";

function App() {
  return (
    <div className=" bg-[#EDF1D6] h-screen   ">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Archivos />} />
          <Route path="/add" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
