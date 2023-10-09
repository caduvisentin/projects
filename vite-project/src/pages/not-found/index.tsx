import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            Página não encontrada.
            <Link to={"/"}><p>Voltar para a página principal</p></Link>
        </>
    )
}

export default NotFound;