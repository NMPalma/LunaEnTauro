import Header from "./components/Header";
import { useState } from "react";

export function Productos() {
    const [mostrarMarcas, setMostrarMarcas] = useState(false);
    const [mostrarProductos, setMostrarProductos] = useState(false);
    const [tituloActivo, setTituloActivo] = useState(null);

    const toggleMarcas = () => {
        setMostrarMarcas(!mostrarMarcas);
        if (mostrarProductos) {
            setMostrarProductos(false);
        }
        setTituloActivo('marcas');
    };

    const toggleProductos = () => {
        setMostrarProductos(!mostrarProductos);
        if (mostrarMarcas) {
            setMostrarMarcas(false);
        }
        setTituloActivo('productos');
    };
    return (
        <div>
            <Header />
            <div className="productos-container">
                <div className="sidebar">
                    <h2
                        onClick={toggleMarcas}
                        className={tituloActivo === 'marcas' ? 'activo' : ''}
                    >
                        Marcas
                    </h2>
                    <ul className={mostrarMarcas ? 'mostrar' : ''}>
                        <li>Marca 1</li>
                        <li>Marca 2</li>
                        <li>Marca 3</li>
                        {/* Agrega más marcas según sea necesario */}
                    </ul>
                    <h2
                        onClick={toggleProductos}
                        className={tituloActivo === 'productos' ? 'activo' : ''}
                    >
                        Productos
                    </h2>
                    <ul className={mostrarProductos ? 'mostrar' : ''}>
                        <li>Producto 1</li>
                        <li>Producto 2</li>
                        <li>Producto 3</li>
                        {/* Agrega más productos según sea necesario */}
                    </ul>
                </div>
            </div>
        </div>
    )
}