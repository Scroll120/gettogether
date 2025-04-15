import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";


function Layout() {
  return (
    <>
      <p>NavBar...</p>
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
