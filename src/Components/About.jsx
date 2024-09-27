import styled from 'styled-components'
import papertexture from '../assets/papertexture.png'

const HeroSection = styled.div`
  background-color: var(--secondary);
  width: 100vw;
  height: 100vh;
  clip-path: polygon(0 0, 100% 2rem, 100% 100%, 0 100%);
  &:after {
    content: "";
    width:100%;
    height:100%;
    position:absolute;
    background-image: url(${papertexture});
    mix-blend-mode: overlay;
    background-size: cover;
    right:0;
    clip: auto;
  }
`
    
function About({children}) {
  return (
    <>
        <HeroSection>
            
        </HeroSection>
    </>
  )
}

export default About
