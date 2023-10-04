import { useState } from 'react'
import './App.css'

function App() {
  const [formInfo, setFormInfo] = useState({
    name:"",
    email:"",
    schooling:"médio",
    resume:"",
  });
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState(false);


  const resetForm = () => {
    setFormInfo({name:"", email:"", schooling:"médio", resume:"",})
  }

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateEmail(formInfo.email)) {
      alert("E-mail inválido!")
      setError(false);
    }
    if (terms) {
      if (validateEmail(formInfo.email)) {
        alert(
          `Nome: ${formInfo.name}\nE-mail: ${formInfo.email}\nEscolaridade: ${formInfo.schooling}\nExperiências: ${formInfo.resume}`
        );
        resetForm();
        setTerms(false);
        setError(false);
      }
    } else {
      setError(true);
    }
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  }

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Nome:
          <input name="name" type="text" value={formInfo.name} onChange={handleChange} />
        </label>
        <label>
          E-mail:
          <input name="email" type="text" value={formInfo.email} onChange={handleChange} />
        </label>
        <label>
          Escolaridade:
          <select name="schooling" value={formInfo.schooling} onChange={handleChange}>
            <option value="Médio">Médio</option>
            <option value="Superior">Superior</option>
            <option value="Pós-graduação">Pós-graduação</option>
          </select>
        </label>
        <label>
          Resumo das experiências:
          <textarea name="resume" value={formInfo.resume} onChange={handleChange}></textarea>
        </label>
        <label>
          <input type="checkbox" checked={terms} onChange={() => setTerms(!terms)} /> Aceito os termos e condições.
        </label>
        <button>Enviar</button>
      </form>

      {error && (
        <h4>Você precisa aceitar os termos e condições!</h4>
      )}

    </>
  )
}

export default App
