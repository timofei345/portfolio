import { Header } from "././components/header/Header"
import './App.css'
import { About } from "./components/about/About"
import { MainPage } from "./components/mainPage/MainPage"
import { Skills } from "./components/skills/Skills"

function App() {
  

  return (
    <section>
      <Header/>
      <MainPage />
      <About/>
      <Skills />
      
      
    </section>
    
  )
}

export default App
