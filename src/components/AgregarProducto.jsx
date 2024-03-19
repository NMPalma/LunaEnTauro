import { useState } from 'react';
import Header from './Header';
import opcionesData from "/src/opciones.json"

export const AgregarProducto = () => {
    const [marcaSeleccionada, setMarcaSeleccionada] = useState('');
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    // Estado para mantener el contador de productos
    const [contadorProductos, setContadorProductos] = useState(1);
    const opciones = opcionesData

    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar la lógica para enviar los datos del formulario
        // Por ahora, simplemente incrementamos el contador de productos
        setContadorProductos(contadorProductos + 1);
        console.log('Producto agregado:', {
            marca: marcaSeleccionada,
            categoria: categoriaSeleccionada
            // Agrega más campos según sea necesario
        });
    };
    // Función para manejar la selección de imagen
    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        // Aquí puedes manejar el archivo seleccionado (por ejemplo, subirlo a un servidor)
        console.log('Archivo seleccionado:', file);
    };
    return (
        <div>
            <Header />
            <div className="addProductContainer">
                <form action="" className="addForm" onSubmit={handleSubmit}>
                    <div className="formGroup">
                        <label className="labelForm">ID:</label>
                        <input type="text" className="inputForm" value={contadorProductos} readOnly />
                    </div>
                    <div className="formGroup">
                        <label className="labelForm">Marca:</label>
                        <select className="inputForm" value={marcaSeleccionada} onChange={(e) => setMarcaSeleccionada(e.target.value)}>
                            <option value="">Seleccionar marca</option>
                            {opciones.marcas.map((marca, index) => (
                                <option key={index} value={marca}>{marca}</option>
                            ))}
                        </select>
                    </div>
                    <div className="formGroup">
                        <label className="labelForm">Nombre:</label>
                        <input type="text" className="inputForm" />
                    </div>
                    <div className="formGroup">
                        <label className="labelForm">Precio:</label>
                        <input type="text" className="inputForm" />
                    </div>
                    <div className="formGroup">
                        <label className="labelForm">Descripcion:</label>
                        <input type="text" className="inputForm" />
                    </div>
                    <div className="formGroup">
                        <label className="labelForm">Imagen:</label>
                        <input type="file" id='imagenInput' className="inputForm" onChange={handleFileSelect} />
                        <label htmlFor="imagenInput">Seleccionar archivo</label>
                    </div>
                    <div className="formGroup">
                        <label className="labelForm">Categoria:</label>
                        <input type="text" className="inputForm" />
                    </div>
                    <div className="formGroup">
                        <label className="labelForm">Aroma:</label>
                        <input type="text" className="inputForm" />
                    </div>
                    <button type="submit">Agregar producto</button>
                </form>
            </div>
        </div>
    );
};
