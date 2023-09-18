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

  return (
    <>
      <Button />
      <Input 
        onChange={handleChange}
      />
      <ButtonTwo onClick={handleClick}>
        Texto HandleClick
      </ButtonTwo>
    </>
  )
}

export default App
