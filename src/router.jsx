import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Productos } from "./Productos";
import { Contacto } from "./components/Contacto";

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/productos", element: <Productos /> },
    { path: "/contacto", element: <Contacto /> },
])
