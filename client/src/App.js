import { useEffect } from 'react';
import DashboardPage from './pages/dashboard/DashboardPage.jsx';
import LoginPage from './pages/login/LoginPage.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from 'react-redux';

const App = () => {
  const loggedInUserData = useSelector((state) => {
    return state.Reducers.user;
  });
  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(loggedInUserData));
  }, [loggedInUserData]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={loggedInUserData ? <DashboardPage /> : <LoginPage />} />
        <Route path="/login" element={loggedInUserData ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="/dashboard" element={loggedInUserData ? <DashboardPage /> : <LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

