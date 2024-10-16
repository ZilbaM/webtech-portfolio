import styled from 'styled-components'
import mediamap from '../assets/projects/mediamap.webp'
import mit from '../assets/projects/music_interactive_theory.webp'
import mediamap_poster from '../assets/mediamap_poster.pdf'

const sizes = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  medium: '1200px',
};

// Helper function for media queries
const media = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  desktop: `(max-width: ${sizes.desktop})`,
  medium: `(max-width: ${sizes.medium})`,
};

const ProjectsSection = styled.div`
  background-color: var(--background-light);
  width: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
`

const ProjectsTitle = styled.div`
`

const ProjectsTitleText = styled.h2`
  background-color: var(--background-light);
  width: min-content;
  position:relative;
  margin:0 auto;
  padding: .5rem 2rem 1rem 2rem ;
  padding-top: .5rem;;
  color: var(--secondary);
  font-family: 'EB Garamond';
  font-size: 4rem;
  font-style: normal;
  font-weight: 500;
  transform: translateY(-10vh);
  border-radius: 5px 5px 0 0;
  text-align: center;
  @media ${media.medium} {
    font-size: 3rem;
  }
  @media ${media.desktop} {
    font-size: 2.5rem;
  }
  @media ${media.tablet} {
    font-size: 2.3rem;
  }
  
`

const ProjectsWrapper = styled.div`
  margin: 0 auto;
  width:70%;
  display:flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  @media ${media.medium} {
    width: 80%;
  }
  @media ${media.mobile} {
    width: 90%;
    gap: 2rem;
  }
`

const ProjectContainer = styled.div`
  width:100%;
  display:flex; 
  justify-content: center;
  @media ${media.mobile} {
    flex-direction: column;
    align-items: center;
  }
`

const ProjectImage = styled.img`
  aspect-ratio: .8 ;
  width: 50%;
  object-fit: cover;
  @media ${media.desktop} {
    width:40%;
  }
  @media ${media.mobile} {
    width:80%;
    aspect-ratio: 1;
  }
`

const ProjectDescription = styled.div`
  width: 60%;
  padding: 5%;
  padding-right: 0;
  display:flex;
  flex-direction: column;
  gap: 4rem;
  @media ${media.desktop} {
    gap: 2rem;
  }
  @media ${media.tablet} {
    gap: 1rem;
  }
  @media ${media.mobile} {
    align-items: center;
    width: 100%;
    padding: 5% 0;
  }
`

const ProjectItemTitle= styled.h3`
  font-size:3.5rem;
  background-color: var(--light-accent);
  color: var(--text-dark);
  font-weight: 400;
  padding: .5rem 2rem;
  font-family: "EB Garamond";
  transform: translateX(-20rem);
  white-space: pre-wrap;
  width: max-content;
  margin-left:auto;
  @media ${media.medium} {
    font-size: 3rem;
  }
  @media ${media.desktop} {
    font-size: 2.4rem;
    transform: translateX(-15rem);
  }
  @media ${media.tablet} {
    font-size: 2rem;
  }
  @media ${media.mobile} {
    margin-left: 0;
    transform: translateX(0);
  }
`

const ProjectItemText = styled.p`
  width: 100%;
  text-align: left;
  white-space: pre-wrap;
  font-family: Sen;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media ${media.medium} {
    font-size: 1.4rem;
  }
  @media ${media.desktop} {
    font-size: 1.25rem;
  }
  @media ${media.tablet} {
    font-size: 1.15rem;
  }
  @media ${media.phone} {
    width: 70%;
  }
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
  @media ${media.medium} {
    font-size: 1.4rem;
  }
  @media ${media.desktop} {
    font-size: 1.25rem;
  }
  @media ${media.tablet} {
    font-size: 1.15rem;
  }
`

const Highlight = styled.span`
  color: var(--accent);
`
    
function Projects({children}) {
  return (
      <ProjectsSection>
        <ProjectsTitle>
          <ProjectsTitleText>Projects<Highlight>.</Highlight></ProjectsTitleText>
        </ProjectsTitle>
          <ProjectsWrapper>
            <ProjectContainer className='container'>
              <ProjectImage src={mediamap}></ProjectImage>
              <ProjectDescription>
                <ProjectItemTitle>Mediamap.</ProjectItemTitle>
                <ProjectItemText>{'A tangible interface to make urban planning more accessible.\n\nUsing physical interactions to change digital data.'}</ProjectItemText>
                <ProjectLink href={mediamap_poster}>See more</ProjectLink>
              </ProjectDescription>
            </ProjectContainer>
            <ProjectContainer className='container'>
              <ProjectImage src={mit}></ProjectImage>
              <ProjectDescription>
                <div>
                  <ProjectItemTitle className='align-end'>{"Music Interactive"}</ProjectItemTitle>
                  <ProjectItemTitle className='align-end fit'>{"Theory."}</ProjectItemTitle>
                </div>
                <ProjectItemText>{'An immersive learning experience to foster creativity.\n\nMusic theory directly on the instrument, experiment as you learn.'}</ProjectItemText>
                <ProjectLink href='#'>See more</ProjectLink>
              </ProjectDescription>
            </ProjectContainer>
          </ProjectsWrapper>
      </ProjectsSection>
  )
}

export default Projects
