import Danielv2 from './components/Danielv2';
import './App.css'
import Perfil from './components/Perfil';

const App = () => {

  return (
    <>
      <Perfil nameUser='Daniel' profession='Estudiante' completeModules={1} isActive/>
      <Perfil nameUser='Alberto' profession='Estudiante' completeModules={3} isActive = {false}/>
      <Perfil nameUser='Jorge' profession='Estudiante' completeModules={4} isActive/>
      <Perfil nameUser='Sonia' profession='Estudiante' completeModules={2} isActive = {false}/>

    </>
  )
}

export default App
