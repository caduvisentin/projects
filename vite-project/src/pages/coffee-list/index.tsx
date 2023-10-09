import { coffeeList } from "../../data.ts";
import { Link } from "react-router-dom";

function CoffeeList() {
    return(
        <>
            <h1>Coffee List</h1>
            <main>
                <ul>
                    {
                        coffeeList.map((coffee) => (
                            <Link to={`/coffees/${coffee.slug}`} key={coffee.id}>
                                <li>{coffee.title}</li>
                            </Link>
                        ))
                    }
                </ul>
            </main>
        </>
    )
}

export default CoffeeList;