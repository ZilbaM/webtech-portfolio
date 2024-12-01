import styled from "styled-components";
import mediamap_poster from "../assets/mediamap_poster.pdf";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const sizes = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
  medium: "1200px",
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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectsTitle = styled.div``;

const ProjectsTitleText = styled.h2`
  background-color: var(--background-light);
  width: min-content;
  position: relative;
  margin: 0 auto;
  padding: 0.5rem 2rem 1rem 2rem;
  padding-top: 0.5rem;
  color: var(--secondary);
  font-family: "EB Garamond";
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
`;

const ProjectsWrapper = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
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
`;

const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media ${media.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectDescription = styled.div`
  width: 60%;
  padding: 5%;
  padding-right: 0;
  display: flex;
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
`;

const ProjectItemTitle = styled.h3`
  font-size: 3.5rem;
  background-color: var(--light-accent);
  color: var(--text-dark);
  font-weight: 400;
  padding: 0.5rem 2rem;
  font-family: "EB Garamond";
  transform: translateX(-20rem);
  white-space: pre-wrap;
  width: max-content;
  margin-left: auto;
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
`;

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
`;

const ProjectLink = styled.a`
  width: fit-content;
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
  transition: all 0.3s ease-in-out;
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
`;

const Highlight = styled.span`
  color: var(--accent);
`;

function Projects({ children }) {
  return (
    <ProjectsSection>
      <ProjectsTitle>
        <ProjectsTitleText>
          Projects<Highlight>.</Highlight>
        </ProjectsTitleText>
      </ProjectsTitle>
      <ProjectsWrapper>
        <ProjectContainer className="container">
         
        <Canvas style={{ width: "50%", height: "auto" }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 10, 5]} />
            <Suspense fallback={null}>
              <CityModel />
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>

          <ProjectDescription>
            <ProjectItemTitle>Mediamap.</ProjectItemTitle>
            <ProjectItemText>
              {
                "A tangible interface to make urban planning more accessible.\n\nUsing physical interactions to change digital data."
              }
            </ProjectItemText>
            <ProjectLink href={mediamap_poster}>See more</ProjectLink>
          </ProjectDescription>
        </ProjectContainer>
        <ProjectContainer className="container">

          <Canvas style={{ width: "50%", height: "auto" }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 5]} />
            <Suspense fallback={null}>
              <PianoModel />
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>

          <ProjectDescription>
            <div>
              <ProjectItemTitle className="align-end">
                {"Music Interactive"}
              </ProjectItemTitle>
              <ProjectItemTitle className="align-end fit">
                {"Theory."}
              </ProjectItemTitle>
            </div>
            <ProjectItemText>
              {
                "An immersive learning experience to foster creativity.\n\nMusic theory directly on the instrument, experiment as you learn."
              }
            </ProjectItemText>
            <ProjectLink href="#">See more</ProjectLink>
          </ProjectDescription>
        </ProjectContainer>
      </ProjectsWrapper>
    </ProjectsSection>
  );
}

function CityModel() {
  const scene = useGLTF("static/city.gltf");
  const cityRef = useRef();

  useFrame(() => {
    if (cityRef.current) {
      cityRef.current.rotation.y += .005;
    }
  });

  return (
    <primitive
      ref={cityRef}
      object={scene.scene}
      scale={3.5}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      
    />
  );
}

function PianoModel() {
  const { scene } = useGLTF('static/piano.gltf'); // Make sure to replace with the correct path

  const pianoRef = useRef()

  useFrame(() => {
    if (pianoRef.current) {
      pianoRef.current.rotation.y += 0.01;
    }
  })  

  scene.traverse((child) => {
    if (child.isMesh) {
      // Set the material to be transparent with an outline effect
      child.material = new THREE.MeshBasicMaterial({
        color: 0x000000, // Adjust outline color here if needed
        transparent: true,
        opacity: 0.0, // Completely transparent material
      });
      const edges = new THREE.EdgesGeometry(child.geometry);
      const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: 0x000000 }) // Outline color
      );
      // Make sure the material renders only the front faces
      child.add(line);
    }
  });

  return <primitive ref={pianoRef} scale={3} object={scene} rotation={[.5, 0, 0]} />;
}

export default Projects;
