import styled from 'styled-components'
import './App.css'
import Hero from './Components/Hero'
import About from './Components/About'
import Footer from './Components/Footer'
import Projects from './Components/Projects'


const Body = styled.div`
  background-color: var(--background-light);
  width: 100vw;
  overflow: hidden;
`

function App() {
  return (
      <Body id="#body">
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
        <Footer></Footer>
      </Body>
  )
}

export default App
