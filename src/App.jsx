import styled from 'styled-components'
import './App.css'
import Hero from './Components/Hero'

const Body = styled.div`
  background-color: var(--background-light);
  width: 100vw;
`

function App() {
  return (
      <Body id="#body">
        <Hero>
          
        </Hero>
      </Body>
  )
}

export default App
