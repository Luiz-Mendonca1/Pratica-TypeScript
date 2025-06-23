import { useState } from 'react'
import './App.css'

interface cadastrado{
  nome: string
  idade: string
}

export default function App(){
  const [input, setInput] = useState('')
  const [idade, setIdade] = useState('')

  const [info, setInfo] = useState<cadastrado>()

  function mostraAl(){
    setInfo({
      nome: input,
      idade: idade,
    })
  }

  return(
    <div>
      <h1> use state</h1>

      <input placeholder='digite o nome ' 
      value={input} 
      onChange={(e)=>setInput(e.target.value)}/>

      <br/>

      <input placeholder='digite o nome ' 
      value={idade} 
      onChange={(e)=>setIdade(e.target.value)}/>

      <br/>
      <button onClick={mostraAl}>Mostrar aluno</button>

      <hr/>

      <h3>Bem vindo {info?.nome}</h3>
      <h3>Idade: {info?.idade}</h3>
    </div>
  )
}
