import { useState } from 'react';
import './App.css'

function App() {
  
  const toolKit = [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Node',
    'Testes automatizados',
  ];

  const [index, setIndex] = useState(0);

  const [ferramentas, setFerramentas] = useState("");

  const handleNextClick = () => {
    if (index+1 < toolKit.length) {
      setIndex(index+1)
    } else {
      setIndex(0)
    }
  }

  const handlePrevClick = () => {
    if (index-1 >= 0) {
      setIndex(index-1)
    } else {
      setIndex(toolKit.length-1)
    }
  }

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setFerramentas(event.target.value)
    console.log(ferramentas)
  }

  const handleClickEnvia = () => {
    toolKit.push(ferramentas)
  }

  return (
    <>
      <h1>Caixa de ferramentas</h1>
      <h2>{toolKit[index]}</h2>
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
      <input type="text" 
      onChange={(event) => handleChange(event)} />
      <button onClick={handleClickEnvia}>Add Ferramentas</button>
    </>
  )
}

export default App
