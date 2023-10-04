import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [schooling, setSchooling] = useState("Médio");
  const [resume, setResume] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState(false);


  const resetForm = () => {
    setName("");
    setEmail("");
    setSchooling("Médio");
    setResume("");
    setTerms(false);
    setError(false);
  }

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      alert("E-mail inválido!")
      setError(false);
    }
    if (terms) {
      if (validateEmail(email)) {
        alert(
          `Nome: ${name}\nE-mail: ${email}\nEscolaridade: ${schooling}\nExperiências: ${resume}`
        );
        resetForm();
      }
    } else {
      setError(true);
    }
  }

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Nome:
          <input type="text" value={name} onChange={({ target }) => setName(target.value)} />
        </label>
        <label>
          E-mail:
          <input type="text" value={email} onChange={({ target }) => setEmail(target.value)} />
        </label>
        <label>
          Escolaridade:
          <select value={schooling} onChange={({ target }) => setSchooling(target.value)}>
            <option value="Médio">Médio</option>
            <option value="Superior">Superior</option>
            <option value="Pós-graduação">Pós-graduação</option>
          </select>
        </label>
        <label>
          Resumo das experiências:
          <textarea value={resume} onChange={({ target }) => setResume(target.value)}></textarea>
        </label>
        <label>
          <input type="checkbox" checked={terms} onChange={() => setTerms((prev) => !prev)} /> Aceito os termos e condições.
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
