import React, { useRef, useState, Suspense, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import './style.scss'
import * as THREE from 'three'

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

    // const [position, setPosition] = useState([-15, 5, 2])

    // useEffect(() => {
    //     const userTheme = localStorage.getItem('theme')
    //     if (userTheme === 'dark'){
    //         setPosition([25, -12, 5])
    //     }
    //     else{
    //         setPosition([-15, 5, 2])
    //     }
    // }, [])

    return(
        <>
            <ambientLight />
            <pointLight position={[-15, 5, 2]} intensity={10}/>
        </>
    )
}

export default function ThreeFigure(props) {
    const Mobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    const Tablet = useMediaQuery({
        query: '(max-width: 1224px) and (min-width: 769px)'
    })

    let blockWidth = '500px'
    let blockHeight = '600px'
    let blockPositionZ = 2
    if(Mobile){
        blockWidth = '90vw'
        blockPositionZ = 2
        blockHeight = '300px'
    }
    if(Tablet){
        blockWidth = '400px'
        blockPositionZ = -2
    }

    return (
        <Canvas style={{display: 'flex', width: blockWidth, height: blockHeight}} camera={{position: [0, 0, 10], fov: 20}}>
            <Suspense fallback={null}>
                <Lights/>
                <Box position={[0, 0, blockPositionZ]}/>
            </Suspense>
        </Canvas>
    );
}