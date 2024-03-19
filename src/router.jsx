import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Productos } from "./components/Productos";
import { Contacto } from "./components/Contacto";
import { AgregarProducto } from "./components/AgregarProducto";

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/productos", element: <Productos /> },
    { path: "/contacto", element: <Contacto /> },
    { path: "/agregar-producto", element: <AgregarProducto /> },
])
