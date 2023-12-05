import './App.css'
import TitleComponent from './components/Title/Title'
import Header from './Layout/Header/Header'

function App() {

  return (
    <>
      <Header />

      <TitleComponent 
            titulo="Primer titulo" 
            icono="fa-solid fa-house" />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae soluta quam assumenda, saepe ipsum libero ipsam ad doloribus blanditiis distinctio quos alias sapiente eos doloremque quis facilis hic! Numquam, voluptates.
      </p>

      <TitleComponent titulo="Segundo elemento title" />

      <TitleComponent 
            titulo="Tercer titulo" 
            icono="fa-brands fa-discord" />

      <TitleComponent 
            titulo="Otro titulo cualquiera"  icono="fa-solid fa-star" />

      <TitleComponent titulo="Segundo elemento title" />

    </>
  )
}

export default App
