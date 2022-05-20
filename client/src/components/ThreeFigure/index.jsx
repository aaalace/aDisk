import React, { useRef, useState, Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import './style.scss'
import * as THREE from 'three'
import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';

import img from '../../images/earth.jpg'

import { Canvas, useFrame, useLoader } from "react-three-fiber";

const Box = (props) => {
    const mesh = useRef()

    const [clicked, setClicked] = useState(false)
    const [scale, setScale]= useState(1)
    
    useFrame(() => (mesh.current.rotation.y += 0.002, mesh.current.rotation.x-= 0.0015))

    const texture = useLoader(THREE.TextureLoader, img)

    return(
        <mesh
            {...props}
            castShadow
            ref={mesh}
            scale={scale}
            onClick={() => setClicked(!clicked)}>
            <sphereBufferGeometry attach="geometry" args={[]}/>
            <meshStandardMaterial attach='material' map={texture} />
        </mesh>
    )
}

const Lights = () => {
    return(
        <>
            <ambientLight />
            <pointLight position={[-20, 5, 5]} intensity={6}/>
        </>
    )
}

export default function ThreeFigure(props) {
    const Mobile = useMediaQuery({
        query: '(max-width: 1224px)'
    })


    return (
        <Canvas style={Mobile ? {display: 'none'} : {display: 'flex', width: '500px', height: '600px'}} colorManagement camera={{position: [0, 0, 10], fov: 20}}>
            <Suspense fallback={null}>
                <Lights/>
                <Box position={[0, 0, 2]}/>
            </Suspense>
        </Canvas>
    );
}