import React, { useRef, useState, Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import './style.scss'
import * as THREE from 'three'
import { Canvas, useFrame, useLoader } from "react-three-fiber";

import img from '../../../images/earth.jpg'

const Box = (props) => {
    const mesh = useRef()

    const [clicked, setClicked] = useState(false)
    
    useFrame(() => (
        mesh.current.rotation.y += 0.002, mesh.current.rotation.x -= 0.0015
    ))

    const texture = useLoader(THREE.TextureLoader, img)

    return(
        <mesh
            {...props}
            castShadow
            ref={mesh}
            scale={1}
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
            <pointLight position={[-15, 5, 2]} intensity={10}/>
        </>
    )
}

function ThreeFigure(props) {
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
        <Canvas className="dfigure" style={{display: 'flex', width: blockWidth, height: blockHeight}} camera={{position: [0, 0, 10], fov: 20}}>
            <Suspense fallback={null}>
                <Lights/>
                <Box position={[0, 0, blockPositionZ]}/>
            </Suspense>
        </Canvas>
    );
}


export default ThreeFigure