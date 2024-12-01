import styled from 'styled-components'
import papertextureblue from '../assets/papertextureblue.webp'
import papertexturepolaroid from '../assets/papertexturepolaroid.webp'
import portrait from '../assets/portrait.webp'
import tapeTop from '../assets/tape_top.png'
import tapeBot from '../assets/tape_bot.png'
import bspline from 'b-spline'
import { useEffect, useState, useRef } from 'react';

import { Plane, Box, Text } from '@react-three/drei';
import { TextureLoader } from 'three'
import { Canvas, useFrame, useLoader } from '@react-three/fiber';


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
  @media ${media.tablet} {
    height: 150vh;
    padding: 15vh 4rem;
    &:after {
      height: 165%;
    }
  }
  @media ${media.mobile} {
    padding: 5vh 2rem;
  }
  `
  
  const AboutWrapper = styled.div`
    width:100%;
    height:100%;
    position:relative;
    display:flex;
    justify-content: center;
    gap: 7rem;
    align-items: center;
    @media ${media.medium} {
      gap: 5rem;
    }
    @media ${media.desktop} {
      gap: 3rem;
    }
    @media ${media.tablet} {
      flex-direction: column-reverse;
    }
  `

const Polaroid = styled.div`
  max-height: 60vh;
  /* width: 40%; */
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
  @media ${media.tablet} {
    width: 60%;
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
  @media ${media.medium} {
    box-shadow: 0 0 50px rgba(0,0,0,1) inset;
  }
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
  @media ${media.medium} {
    font-size: 2rem;
  }
  @media ${media.desktop} {
    font-size: 1.75rem;
  }
  @media ${media.desktop} {
    font-size: 1.3rem;
  }
  @media ${media.mobile} {
    font-size: 1rem;
  }
`

const Presentation = styled.section`
  display:flex;
  flex-direction: column;
  width: 40%;
  gap:2rem;
  @media ${media.desktop} {
    width: 100%;
  }
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
  @media ${media.desktop}{
    font-size: 3rem;
  }
  @media ${media.mobile}{
    font-size: 2.5rem;
  }
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
  @media ${media.desktop}{
    font-size: 1.15rem;
  }
  @media ${media.mobile}{
    font-size: 1rem;
  }
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
  opacity: 0.3;
`;

const CurvePath = styled.path`
  margin: 0 auto;
  stroke-width: 7.5rem;
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

const PolaroidMesh = () => {
  const groupRef = useRef();
  const portraitTexture = useLoader(TextureLoader, 'static/portraitSquare.webp');
  const [hovered, setHovered] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const xFactor = .7
  const yFactor = 1

  useFrame( () => {
    if (groupRef.current) {
      if (hovered) {
        const targetRotationX = (mousePos.current.y / window.innerHeight) * xFactor - 0.05;
        const targetRotationY = (mousePos.current.x / window.innerWidth) * yFactor;
        groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * xFactor;
        groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * yFactor;
        
      } else {
        groupRef.current.rotation.x += (0 - groupRef.current.rotation.x) * xFactor;
        groupRef.current.rotation.y += (0 - groupRef.current.rotation.y) * yFactor;
      }
    }
  })

  return (
    <group 
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerMove={(event) => {
        mousePos.current.x = event.clientX;
        mousePos.current.y = event.clientY;
      }}  
    >
      <Box args={[8.4, 10.0, 0]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#FFFFFF" />
      </Box>

      <Plane args={[7.4, 7.4]} position={[0, .8, 0.01]}>
        <meshStandardMaterial map={portraitTexture} />
      </Plane>

      <Text
        color="black"
        fontSize={.7}
        font='static/PermanentMarker.ttf'
        anchorX="center"
        anchorY="middle"
        position={[0, -3.8, 0.01]}
      >
        Studying @ IFT - Paris
      </Text>
    </group>
  )
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
            // strokeWidth="150"
            fill="none"
          />
        </CurveContainer>
        <Canvas style={{ width: "50%" }} camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={4} />
          <PolaroidMesh  />
        </Canvas>
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
