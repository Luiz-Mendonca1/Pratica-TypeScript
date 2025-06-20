import { Header } from './components/header'
import { Funcionario } from './components/funcionario'
import Footer from './components/footer'
import './App.css'

export default function App(){
  return(
    <div>
      <Header title='Title to header'/>
      <Funcionario nome='Andre Young' idade={33}/>
      <Funcionario nome='Andre Felipe' idade={61}/>
      <Funcionario nome='Professor Andre' idade={27}/>
      <Footer/>
    </div>
  )
}
