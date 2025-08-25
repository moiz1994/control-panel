import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import BodData from "./pages/BodData";
import ApplicationLog from "./pages/ApplicationLog";

const App = () => {
  const isAuth = localStorage.getItem("auth");

  return (
    <div className="bg-gray">
      <Routes>
        <Route
          path="/"
          element={isAuth ? <Dashboard /> : <Navigate to="/login" />}
        >
          <Route index element={<Home />} />
          <Route path="bodData" element={<BodData />} />
          <Route path="applicationLogs" element={<ApplicationLog />} />
        </Route>

        <Route
          path="/login"
          element={!isAuth ? <Login /> : <Navigate to="/" />}
        />

        <Route path="*" element={<Navigate to={isAuth ? "/" : "/login"} />} />
      </Routes>
    </div>
  );
};

export default App;
