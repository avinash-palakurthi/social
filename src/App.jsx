import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/loginPage/Login";
import Register from "./components/registerPage/Register";

function App() {
  return (
    <div>
      <h1>hello</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
