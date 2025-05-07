import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";


function Layout() {
  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  )
}

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path:"/",
          element: <HomePage/>
        },
        {
          path:"/register",
          element: <RegisterPage/>
        },
        {
          path: "/login",
          element: <LoginPage/>
        },
        {
          path: "/dashboard",
          element: <DashboardLayout/>,
          children: [
            {
              path: "me",
              element: <ProfilePage/>
            },
          ]
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}/>
);
}

export default App
