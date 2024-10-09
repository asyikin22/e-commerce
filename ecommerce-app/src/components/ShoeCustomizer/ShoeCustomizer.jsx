import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import {Box} from '@mui/system'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

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

        //add a placeholder for shoes
        const shoeGeometry = new THREE.BoxGeometry(4, 4, 4)
        const shoeMaterial = new THREE.MeshBasicMaterial({ color: '#FFB6C1', transparent: true, opacity: 0.5})
        const shoe = new THREE.Mesh(shoeGeometry, shoeMaterial)
        shoe.position.y = 0.5             //raise object above ground
        scene.add(shoe)

        //show vertices of the cube
        const edgesGeometry = new THREE.EdgesGeometry(shoeGeometry)
        const edgesMaterial = new THREE.LineBasicMaterial( { color: 0xff0000} )
        const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial)
        edges.position.y = 0.5
        scene.add(edges)

        //add orbit controls for itneraction
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.dampingFactor = 0.05
        controls.enableZoom = true

        //set camera position
        camera.position.set(3, 3, 5)
        controls.update()

        //animation loop
        const animate = () => {
            requestAnimationFrame(animate)
            controls.update()
            renderer.render(scene, camera)
        }
        animate();                                                                  //this will start animation loop

        //resize event listener
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth * 0.85, window.innerHeight * 0.7)
        }

        window.addEventListener('resize', handleResize)

        //clean up on componentn unmount
        return () => {
            renderer.dispose()
            controls.dispose()
            mountRef.current.removeChild(renderer.domElement)                       //Step 5  
        }
    }, [])                                                                          //Step 6: Empty dependency array
                                                                                    
    return (                                                                        //step 7: render div for mounting
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
