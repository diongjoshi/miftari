import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import Contact from "./Components/Contact/Contact";
import Company from "./Components/Company/Company";
import Home from "./Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/company", element: <Company /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
