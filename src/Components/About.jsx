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
import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry'

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
    <AboutSection>
      <AboutWrapper>
        
        <BSplineAnimation />
        
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




function BSplineCurve() {
  const lineRef = useRef();

  // Define control points for the B-spline curve
  const points = [
    new THREE.Vector2(-20, 8),
    new THREE.Vector2(-10, 6.5),
    new THREE.Vector2(-10, -3),
    new THREE.Vector2(4, 1),
    new THREE.Vector2(8, -9),
    new THREE.Vector2(-4, -8),
    new THREE.Vector2(-6, -15),
  ];

  // Create a SplineCurve instance
  const splineCurve = new THREE.SplineCurve(points);

  useEffect(() => {
    // Set up initial geometry and material
    const newPoints = splineCurve.getPoints(100).flatMap((point) => [point.x, point.y, 0]);
    const lineGeometry = new LineGeometry();
    lineGeometry.setPositions(newPoints);

    const lineMaterial = new LineMaterial({
      color: '#57594b',
      opacity: 0.3,
      linewidth: 150, 
      dashed: false,
    });

    lineMaterial.resolution.set(window.innerWidth, window.innerHeight); 

    lineRef.current = new Line2(lineGeometry, lineMaterial);

    const handleResize = () => {
      lineMaterial.resolution.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      lineGeometry.dispose();
      lineMaterial.dispose();
      if (lineRef.current) {
        lineRef.current.geometry.dispose();
        lineRef.current.material.dispose();
      }
    };
  }, []);

  useFrame(() => {
    // Animate some control points
    points[1].x = -10 + Math.cos(Date.now() * 0.001) * 1;
    points[1].y = 6 + Math.sin(Date.now() * 0.001) * 1;

    points[2].x = -10 + Math.cos(Date.now() * 0.001) * 1;
    points[2].y = -3 + Math.sin(Date.now() * 0.0001) * 1;
    
    points[3].x = 4 + Math.cos(Date.now() * 0.002) * 0.5;
    points[3].y = 1 + Math.sin(Date.now() * 0.001) * 1;
    
    points[4].x = 8 + Math.cos(Date.now() * 0.001) * 1;
    points[4].y = -9 + Math.sin(Date.now() * 0.001) * 0.5;
    
    points[5].x = -4 + Math.cos(Date.now() * 0.001) * 1;
    points[5].y = -8 + Math.sin(Date.now() * 0.0001) * 1;


    // Update the geometry with the new control points
    splineCurve.points = points;
    const newPoints = splineCurve.getPoints(100).flatMap((point) => [point.x, point.y, 0]);
    if (lineRef.current) {
      lineRef.current.geometry.setPositions(newPoints);
    }
  });

  return lineRef.current ? <primitive object={lineRef.current} /> : null;
}


function BSplineAnimation() {
  return (
    <Canvas
      style={{ position: 'absolute', width: '200%', height: '100%', zIndex: -1 }}
      orthographic
      camera={{ zoom: 50, position: [0, 0, 10] }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <BSplineCurve />
    </Canvas>
  );
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
        groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.1;
        groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.1;

        
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