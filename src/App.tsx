import { Header } from './components/header'

export default function App(){
  return(
    <div>
      <h1>Projeto</h1>
      <header></header>
      <Funcionario nome='Andre Young' idade={33}/>
      <Funcionario nome='Andre Felipe' idade={61}/>
      <Funcionario nome='Professor Andre' idade={27}/>
    </div>
  )
}

interface FuncPromp{
  nome: string,
  idade: number
}

function Funcionario({nome, idade}: FuncPromp){
  return(
    <div>
      <h2>Funcionario: {nome}</h2>
      <h3>idade: {idade}</h3>
    </div>
  )
}