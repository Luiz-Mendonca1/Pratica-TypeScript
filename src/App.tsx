import { useState } from 'react'
import './App.css'

export default function App(){
  const [input, setInput] = useState('')
  const [idade, setIdade] = useState('')

  function mostraAl(){
    console.log(input)
  }

  return(
    <div>
      <h1> use state</h1>

      <input placeholder='digite o nome ' 
      value={input} 
      onChange={(e)=>setInput(e.target.value)}/>

      <input placeholder='digite o nome ' 
      value={idade} 
      onChange={(e)=>setIdade(e.target.value)}/>

      <br/>
      <button onClick={mostraAl}>Mostrar aluno</button>
    </div>
  )
}
