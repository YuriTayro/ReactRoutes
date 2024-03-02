
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './NavBar'


function App() {
  
  return (
    <>
    
    <h1>Cabeçalho</h1>
    <NavBar/>
    <Outlet/>
    <p>Rodapé</p>  
    </>

  
  )
}

export default App
