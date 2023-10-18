import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <footer>
                Todos os direitos reservados © Cafetería Agreste.
            </footer>
        </>
    )
}

export default Layout;