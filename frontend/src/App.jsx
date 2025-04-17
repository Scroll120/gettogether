import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";


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
      ],
    },
  ]);

  return (
    <RouterProvider router={router}/>
);
}

export default App
