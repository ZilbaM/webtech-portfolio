import styled from 'styled-components'
import mediamap from '../assets/projects/mediamap.jpeg'
import mit from '../assets/projects/music_interactive_theory.webp'
import papertextureblue from '../assets/papertextureblue.png'

const ProjectsSection = styled.div`
  background-color: var(--background-light);
  width: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
`

const ProjectsTitle = styled.div`
`

const ProjectsTitleText = styled.h2`
  background-color: var(--secondary);
  width: min-content;
  position:relative;
  &:after {
      content: "";
      width:100%;
      height:100%;
      position:absolute;
      background-image: url(${papertextureblue});
      mix-blend-mode: overlay;
      background-size: 400%;
      background-repeat: repeat;
      top:0;
      right:0;
  }
  margin:0 auto;
  padding: 1rem;
  color: var(--background-light);
  font-family: 'Sen';
  font-size: 5rem;
  font-style: normal;
  font-weight: 400;
`

const ProjectsWrapper = styled.div`
  margin: 0 auto;
  width:70%;
  display:flex;
  flex-direction: column;
  gap: 5rem;
`

const ProjectContainer = styled.div`
  width:100%;
  display:flex; 
`

const ProjectImage = styled.img`
  aspect-ratio: .8 ;
  width: 30vw;
  object-fit: cover;
`

const ProjectDescription = styled.div`
  padding: 5%;
  display:flex;
  flex-direction: column;
  gap: 2rem;
`

const ProjectItemTitle= styled.h3`
  font-size:4rem;
  background-color: var(--light-accent);
  color: var(--secondary);
  font-weight: 400;
  padding: .5rem 2rem;
  font-family: "EB Garamond";
  transform: translate(-30%);
  white-space: pre-wrap;
`

const ProjectItemText = styled.p`
  width: fit-content;
  text-align: justify;
  white-space: pre-wrap;
  font-family: Sen;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const ProjectLink = styled.a`
  width:fit-content;
  background-color: var(--secondary);
  color: var(--background-light);
  text-align: justify;
  font-family: Sen;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  padding: 1rem 2rem;
  transition: all .3s ease-in-out;
  &:hover {
    background-color: var(--light-accent);
    color: var(--text-dark);
  }
`
    
function Projects({children}) {
  return (
      <ProjectsSection>
        <ProjectsTitle>
          <ProjectsTitleText>{"<projects>"}</ProjectsTitleText>
        </ProjectsTitle>
          <ProjectsWrapper>
            <ProjectContainer className='container'>
              <ProjectImage src={mediamap}></ProjectImage>
              <ProjectDescription>
                <ProjectItemTitle>Mediamap.</ProjectItemTitle>
                <ProjectItemText>{'A tangible interface to make urban\nplanning more accessible.\n\nUsing physical interactions to\n change digital data.'}</ProjectItemText>
                <ProjectLink href='#'>See more</ProjectLink>
              </ProjectDescription>
            </ProjectContainer>
            <ProjectContainer className='container'>
              <ProjectImage src={mit}></ProjectImage>
              <ProjectDescription>
                <ProjectItemTitle className='align-end'>{"Music Interactive\nTheory."}</ProjectItemTitle>
                <ProjectItemText>{'An immersive learning experience to foster creativity.\n\nMusic theory directly on the instrument, experiment as you learn.'}</ProjectItemText>
                <ProjectLink href='#'>See more</ProjectLink>
              </ProjectDescription>
            </ProjectContainer>
          </ProjectsWrapper>
      </ProjectsSection>
  )
}

export default Projects
