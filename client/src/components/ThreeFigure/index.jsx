import React, { useRef, useState, Suspense, useEffect } from "react";
import './style.scss'
import * as THREE from 'three'

import img from '../../images/earth.jpg'

import { Canvas, useFrame, useLoader } from "react-three-fiber";

const Box = (props) => {
    const mesh = useRef()

    const [clicked, setClicked] = useState(false)
    const [scale, setScale]= useState(1)
    
    useFrame(() => (mesh.current.rotation.y += 0.001, mesh.current.rotation.x += 0.0005))

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
        </>
    )
}

export default function ThreeFigure() {

    return (
        <Canvas style={{display: 'flex', width: '500px', height: '600px'}} colorManagement camera={{position: [0, 0, 10], fov: 20}}>
            <Suspense fallback={null}>
                <Lights/>
                <Box position={[0, 0, 2]}/>
            </Suspense>
        </Canvas>
    );
}