import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import BodData from "./pages/BodData";
import ApplicationLog from "./pages/ApplicationLog";
import BIMainMenu from "./pages/BIMainMenu";
import { ToastContainer } from "react-toastify";
// import ComingSoon from "./pages/ComingSoon";

const App = () => {
  const isAuth = localStorage.getItem("auth");

  return (
    <div className="bg-gray">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route
          path="/"
          element={isAuth ? <Dashboard /> : <Navigate to="/login" />}
        >
          <Route index element={<Home />} />

          <Route path="bodData" element={<BodData />} />
          {/* <Route path="reportBuilder" element={<ComingSoon />} />
          <Route path="salesCompareReport" element={<ComingSoon />} />
          <Route path="osReportBuilder" element={<ComingSoon />} />
          <Route path="osSalesCompareReport" element={<ComingSoon />} /> */}

          <Route path="mainMenu" element={<BIMainMenu />} />

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
