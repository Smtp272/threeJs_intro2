import './style.css'
import * as THREE from "three"

const canvas = document.querySelector("#webglcanvas")
const scene = new THREE.Scene()


const geometry = new THREE.BoxBufferGeometry(0.1,1,0.01)
const material = new THREE.MeshBasicMaterial({color:"red"})
const mesh = new THREE.Mesh(geometry,material)

scene.add(mesh)

// Sizes
const sizes={
    width:800,
    height:600
}

//Camera
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height)
camera.position.z = 4
camera.position.y = 2
camera.position.x = 2
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas:canvas
})

renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera)