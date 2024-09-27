import styled from 'styled-components'
import papertexture from '../assets/papertexture.png'

const AboutSection = styled.div`
  background-color: var(--secondary);
  width: 100vw;
  height: 100vh;
  clip-path: polygon(0 0, 100% 2rem, 100% 100%, 0 100%);
  z-index:-2;
  padding: 0 4rem;
  &:after {
    content: "";
    z-index:-1;
    width:100%;
    height:100%;
    position:absolute;
    background-image: url(${papertexture});
    mix-blend-mode: overlay;
    background-size: cover;
    right:0;
    clip: auto;
  }
  display:flex;
  justify-content: space-around;
  align-items: center;
`

const Polaroid = styled.div`
  height: 60%;
  aspect-ratio: .83;
  background-color: var(--background-light);
`

const Presentation = styled.section`
  display:flex;
  flex-direction: column;
  width: 40%;
`

const AboutTitle = styled.div`
  position: relative;
`

const AboutTitleText = styled.h2`
  color: var(--background-light);
  font-family: "EB Garamond";
  font-size: 4rem;
  font-weight: 500;
  line-height: normal;
`

const AboutParagraphText = styled.p`
  color: var(--background-light);
  text-align: justify;
  font-family: Sen;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: pre-wrap;
`

const Highlight = styled.span`
  color: var(--accent)
`

function parseTextWithHighlight(text) {
  return text.split(/(<highlight>.*?<\/highlight>)/g).map((part, index) =>
    part.startsWith('<highlight>') ? (
      <Highlight key={index}>{part.replace(/<\/?highlight>/g, '')}</Highlight>
    ) : (
      part
    )
  );
}

    
function About({children}) {
  const about_text = "Hi ! I'm a 22-year-old <highlight>creative technology student</highlight> based in <highlight>Paris, France</highlight>. Currently in my <highlight>final year of study</highlight>, I have a strong background in <highlight>web development</highlight> and a passion for <highlight>technological innovation</highlight> and <highlight>creative research</highlight>.\n\nI enjoy exploring the <highlight>intersection</highlight> of <highlight>technology</highlight>, <highlight>design</highlight>, and <highlight>business</highlight>, developing a <highlight>diverse set of skills</highlight> from designing to developping <highlight>innovative solutions</highlight> to <highlight>everyday problems</highlight>.\n\Immersing myself in <highlight>artificial intelligence</highlight>, I also find inspiration in the vibrant <highlight>culture</highlight> and <highlight>creativity</highlight> that surround me.\n\nFeel free to explore my <highlight>projects</highlight> and <highlight>reach out</highlight> if you'd like to connect!"

  return (
    <>
        <AboutSection>
            <Polaroid></Polaroid>
            <Presentation>
              <AboutTitle>
                <AboutTitleText>About me.</AboutTitleText>
              </AboutTitle>
              <AboutParagraphText>{parseTextWithHighlight(about_text)}</AboutParagraphText>
            </Presentation>
        </AboutSection>
    </>
  )
}

export default About
