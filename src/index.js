import "./styles.css";
import * as THREE from "three";

let scene = new THREE.Scene();

let playerCar = Car();
scene.add(playerCar);

//setting lights
let ambientLight = new THREE.AmbientLight(0xffffff, 0.6); //setting color and intensity of light
scene.add(ambientLight);

let dirLight = new THREE.DirectionalLight(0xffffff, 0.6); //setting color and intensity of light
dirLight.position.set(100, -300, 400); // x,y,x determine the direction the light is shining
scene.add(dirLight);

//setting camera - using Orthographic so all objects appear the same distance

let aspectRatio = window.innerWidth / window.innerHeight;
let cameraWidth = 150;
let cameraHeight = cameraWidth / aspectRatio;

let camera = new THREE.OrthographicCamera(
  cameraWidth / -2, //left
  cameraWidth / 2, // right
  cameraHeight / 2, // top
  cameraHeight / -2, //bottom
  0, // near plane
  1000 // far plane
);
camera.position.set(200, -200, 300); //sets camera position along x,y,z axis
camera.up.set(0, 0, 1); // Z axis points upwards
camera.lookAt(0, 0, 0); //camera looks towards 0,0,0 co-ordinates

//setting renderer
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.SetSize(window.innerWidth, window.innerHeight); //sets  render to full window size
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement); //adds render to HTML

//creating the car

function Car() {
  let car = new THREE.Group();

  let backWheel = Wheel();
  backWheel.position.x = -18;
  car.add(backWheel);

  let frontWheel = Wheel();
  frontWheel.position.x = 18;
  car.add(frontWheel);
}
