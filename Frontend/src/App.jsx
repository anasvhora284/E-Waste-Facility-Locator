import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home_page";
import LoginPage from "./pages/login_page";
import SignupPage from "./pages/signup_page";
import UserSide from "./pages/userSide";
import AboutPage from "./pages/about_page";
import ContactPage from "./pages/contact_page";
import LocateFacilityPage from "./pages/locate_facility";
import AdminSide from "./pages/adminSide";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/UserSide",
    element: <UserSide />,
  },
  {
    path: "/AdminSide",
    element: <AdminSide />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/locateFacility",
    element: <LocateFacilityPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
