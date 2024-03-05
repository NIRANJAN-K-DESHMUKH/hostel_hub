import DashboardPage from './pages/dashboard/dashboardPage.jsx';
import LoginPage from './pages/login/LoginPage.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

