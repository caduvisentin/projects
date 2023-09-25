import './App.css'
import Button from './components/Button'
import Input from './components/Input';
import ButtonTwo from './components/button/index';

function App() {
  
  const handleChange = () => {
    alert("Mudança");
  }

  const handleClick = () => {
    alert("Alerta Handle Click");
  }

  const handleChange2 = (event:React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  return (
    <>
      <Button />
      <Input 
        onChange={handleChange}
      />
      <ButtonTwo onClick={handleClick}>
        Texto HandleClick
      </ButtonTwo>
      <input type="text"
        onChange={(event) => handleChange2(event)}>

      </input>
    </>
  )
}

export default App
