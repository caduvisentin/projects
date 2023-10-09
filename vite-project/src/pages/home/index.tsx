import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return(
        <>
            <h1>Home page</h1>
            <h2>Coffeeteria</h2>
            <button onClick={() => navigate("/coffees")}>Conheça nossos produtos</button>
        </>
    )
}

export default Home;