import { Link } from "react-router-dom";

function Home() {
    return(
        <>
            <h1>Home page</h1>
            <h2>Coffeeteria</h2>
            <Link to={"/coffees"}>
                <button>Conheça nossos produtos</button>
            </Link>
        </>
    )
}

export default Home;