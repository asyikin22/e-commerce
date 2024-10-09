import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import {Box } from '@mui/system'

const ShoeCustomizer = () => {
    const mountRef = useRef(null)                                                   //step 1: create reference for mount point

    useEffect(() => {                                                               //step 2: set up 3js scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize (window.innerWidth * 0.85, window.innerHeight * 0.7)        // step 3: Set the size of the renderer
        mountRef.current.appendChild(renderer.domElement)                            // step 4: Append renderer to DOM
        
        //add light
        const light = new THREE.AmbientLight(0xffffff)
        scene.add(light)

        //add ground
        const geometry = new THREE.PlaneGeometry(100, 100)
        const material = new THREE.MeshBasicMaterial({ color: 0xCCCCCC, side: THREE.DoubleSide })
        const plane = new THREE.Mesh(geometry, material)
        plane.rotation.x = Math.PI / 2     // Rotate to lay flat
        scene.add(plane)

        //set camera position
        camera.position.z = 5

        //animation loop
        const animate = () => {
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
        }
        animate();                         //this will start animation loop

        //clean up on componentn unmount
        return () => {
            renderer.dispose()
            scene.dispose?.()
            mountRef.current.removeChild(renderer.domElement)                       //Step 5  
        }
    }, [])                                                                          //Step 6: Empty dependency array
                                                                                    
    return (                                                                       //step 7: render div for mounting
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'Center',
                alignItems: 'Center',
                width: '100%',
                height: 'auto',
                margin: { xs: '10px', md:'20px auto'},
                padding: '10px',
                maxWidth: '1000px',
                boxSizing: 'border-box', 
                overflow: 'hidden'
            }}
        >
            <div ref={mountRef} style={{width: '100%', height: 'auto', maxWidth: '100%'}} /> 
        </Box>
    )                                                 
}

export default ShoeCustomizer
