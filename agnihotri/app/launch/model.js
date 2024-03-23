
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js"

import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js"

const scene = new THREE. Scene();

const camera = new THREE.PerspectiveCamera (75, window.innerWidth / window.innerHeight, 0.1, 1000);

let mouseX = window. innerWidth / 2;
let mouseY = window. innerHeight / 2;


let object  ;
let controls ; 

let objToRender = 'rocket'  ;

const loader = new GLTFLoader();

loader.load(`agnihotri/public/model/scene.gltf`,
function(gltf)
{
    object=gltf.scene;
    scene.add(object) ;
},
function(xhr){
    console.log((xhr.loaded/xhr.total*100)+'%loaded');
}  ,
function (error)
{
    console.error(error)  ;
}
);

const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth , window.innerHeight)  ;

document.getElementById("rocketContainer").appendChild(renderer.domElement);


camera.position.z = objToRender === "rocket" ? 25 : 500;

const topLight = new THREE.DirectionalLight(Oxffffff, 1); // (color, intensity)
topLight.position.set (500, 500, 500) //top-left-ish
topLight.castShadow = true;
scene.add (topLight);
 
const ambientLight = new THREE.AmbientLight (0x333333, objToRender==="rocket" ? 5 : 1);
scene.add (ambientLight);
    
function animate() {
    requestAnimationFrame(animate);

    if (object && objToRender === "rocket") {
        //I've played with the constants here until it looked good
        object.rotation.y = -3 + mouseX/ window.innerWidth * 3;
        object.rotation.x= -1.2 + mouseY * 2.5 / window. innerHeight;
        
    }
    renderer.render (scene, camera);
}

window. addEventListener("resize", function () {
    camera. aspect = window.innerWidth / window. innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

document.onmousemove = (e) => {
    mouseX = e.clientx;
    mouseY = e.clientY;
}

animate () ;