import { Route } from "react-router-dom"
import RegisterUserPage from "../pages/register-user.index";
import HomePage from "../pages/home.index";
import HistoryPage from "../pages/history.index";

const UnauthRoutes = [
    <Route key="register-user" path="/register-user" element={<RegisterUserPage />} />,
    <Route key="home" path="/home" element={<HomePage />} />,
    <Route key="history" path="/history" element={<HistoryPage />} />,
]

export default UnauthRoutes;