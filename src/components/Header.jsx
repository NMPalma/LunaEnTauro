import { Link } from 'react-router-dom'
import "/src/index.css"

const Header = () => {
    return (
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/contacto">Contacto</Link>
        </nav>
    )
}

export default Header