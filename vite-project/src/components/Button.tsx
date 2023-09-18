function Button() {

    const handleClick = () => {
        alert ("Alerta")
    }

    return (
        <>
            <button onClick={handleClick}>Clique aqui</button>
            <button onClick={() => alert("Outro alerta")}>Outro clique aqui</button>
        </>
    )
}

export default Button;