import styled from 'styled-components'
import papertextureblue from '../assets/papertextureblue.png'
import papertexturepolaroid from '../assets/papertexturepolaroid.jpg'
import portrait from '../assets/portrait.jpg'
import tapeTop from '../assets/tape_top.png'
import tapeBot from '../assets/tape_bot.png'
import bspline from 'b-spline'
import { useEffect, useState } from 'react';

const AboutSection = styled.div`
  background-color: var(--secondary);
  width: 100vw;
  height: 116vh;
  clip-path: polygon(0 0, 100% 5rem, 100% 100%, 0 100%);
  z-index:-2;
  padding: 0 4rem;
  &:after {
    content: "";
    z-index:-1;
    width:100%;
    height:116%;
    position:absolute;
    background-image: url(${papertextureblue});
    background-repeat: repeat-y;
    mix-blend-mode: overlay;
    background-size: cover;
    right:0;
    clip: auto;
  }
  display:flex;
  justify-content: center;
  gap: 7rem;
  align-items: center;
`

const Polaroid = styled.div`
  height: 60vh;
  aspect-ratio: .83;
  background-image: url(${papertexturepolaroid});
  transform: rotate(-6deg);
  display:flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:before{
    content: "";
    position: absolute;
    width: 40%;
    aspect-ratio: 2;
    background-image: url(${tapeTop});
    background-size: cover;
    right:-20%;
    top:-3rem;
    transform: rotate(35deg);
  }
  &:after{
    content: "";
    position: absolute;
    width: 40%;
    aspect-ratio: 2;
    background-image: url(${tapeBot});
    background-size: cover;
    left:-20%;
    bottom:-2rem;
    transform: rotate(35deg);
  }
`

const Portrait = styled.div`
  background-image: url(${portrait});
  background-size: cover;
  background-position: 50%;
  width: 88%;
  height: 74%;
  margin-top: 5%;
  box-shadow: 0 0 200px rgba(0,0,0,1) inset;
`

const Marker = styled.p`
  margin: auto 0;
  padding-bottom: 1rem;
  font-family: 'Permanent Marker';
  font-size: 2.5rem;
  letter-spacing: 0.045rem;
  text-transform: uppercase;
  transform: rotate(3deg);
  text-align: center;
`

const Presentation = styled.section`
  display:flex;
  flex-direction: column;
  width: 40%;
  gap:2rem;
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
  text-align: left;
  font-family: Sen;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: pre-wrap;
`

const Highlight = styled.span`
  color: var(--accent);
`

const CurveContainer = styled.svg`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120%; // Adjust width as needed
  height: 116%; // Matches the height of AboutSection
  z-index: -1;
  opacity: 0.4;
`;

const CurvePath = styled.path`
  margin: 0 auto;
`

const AboutWrapper = styled.div`
  width:100%;
  height:100%;
  position:relative;
  display:flex;
  justify-content: center;
  gap: 7rem;
  align-items: center;
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


function generateCurvePath(points, degree) {
  let pathData = '';
  for (let t = 0; t <= 1; t += 0.01) {
    const point = bspline(t, degree, points);
    pathData += `${t === 0 ? 'M' : 'L'} ${point[0]},${point[1]} `;
  }
  return pathData;
}
    
function About({children}) {
  const about_text = "Hi ! I'm a 22-year-old <highlight>creative technology student</highlight> based in <highlight>Paris, France</highlight>. Currently in my <highlight>final year of study</highlight>, I have a strong background in <highlight>web development</highlight> and a passion for <highlight>technological innovation</highlight> and <highlight>creative research</highlight>.\n\nI enjoy exploring the <highlight>intersection</highlight> of <highlight>technology</highlight>, <highlight>design</highlight>, and <highlight>business</highlight>, developing a <highlight>diverse set of skills</highlight> from designing to developping <highlight>innovative solutions</highlight> to <highlight>everyday problems</highlight>.\n\Immersing myself in <highlight>artificial intelligence</highlight>, I also find inspiration in the vibrant <highlight>culture</highlight> and <highlight>creativity</highlight> that surround me.\n\nFeel free to explore my <highlight>projects</highlight> and <highlight>reach out</highlight> if you'd like to connect!"
  
  const [curvePath, setCurvePath] = useState('');

  useEffect(() => {
    // Define control points for the B-spline
    const points = [
      [-1400, 100], // starting at some x offset
      [500, 100], 
      [500, 600],
      [1000, 350],
      [1100, 900],
      [700, 800],
      [500, 1000],
      [500, 1500],
    ];
    const degree = 2;

    // Generate SVG path data from control points
    const pathData = generateCurvePath(points, degree);
    console.log(pathData)
    setCurvePath(pathData);
  }, []);


  return (
    <AboutSection>
      <AboutWrapper>
      <CurveContainer>
          <CurvePath
            d={curvePath}
            stroke="var(--light-accent)"
            strokeWidth="150"
            fill="none"
          />
        </CurveContainer>
        <Polaroid>
          <Portrait />
          <Marker>Studying @IFT Paris</Marker>
        </Polaroid>
        <Presentation>
          <AboutTitle>
            <AboutTitleText>About me<Highlight>.</Highlight></AboutTitleText>
          </AboutTitle>
          <AboutParagraphText>{parseTextWithHighlight(about_text)}</AboutParagraphText>
        </Presentation>
      </AboutWrapper>
    </AboutSection>
  )
}

export default About
