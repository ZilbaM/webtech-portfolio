import styled from 'styled-components'
import './App.css'
import Hero from './Components/Hero'
import About from './Components/About'


const Body = styled.div`
  background-color: var(--background-light);
  width: 100vw;
`

function App() {
  return (
      <Body id="#body">
        <Hero></Hero>
        <About></About>
      </Body>
  )
}

export default App
