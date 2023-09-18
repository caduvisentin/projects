type InputProps = {
    onChange: () => void;
}

function Input({onChange}: InputProps) {



    return (
        <>
            <h1>Digite alguma coisa</h1>
            <input type="text" name="AlgumaCoisa" onChange={onChange} />
        </>
    )
    
}

export default Input;