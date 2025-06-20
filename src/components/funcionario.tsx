interface FuncPromp{
  nome: string,
  idade: number
}

export function Funcionario({nome, idade}: FuncPromp){
  return(
    <div>
      <h2>Funcionario: {nome}</h2>
      <h3>idade: {idade}</h3>
    </div>
  )
}