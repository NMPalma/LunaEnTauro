import { Link } from 'react-router-dom'
import "/src/index.css"

const Header = () => {
    return (
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/agregar-producto">Agregar producto</Link>
        </nav>
    )
}

export default Header