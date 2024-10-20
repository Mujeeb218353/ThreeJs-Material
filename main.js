import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 3);

const highIntensityLight = new THREE.DirectionalLight(0xffffff, 2);
highIntensityLight.position.set(10, 20, 15);
scene.add(highIntensityLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 100, 2);
pointLight.position.set(1, 1, 1);
scene.add(pointLight);

// Light helpers
// const highIntensityLightHelper = new THREE.DirectionalLightHelper(highIntensityLight, 2);
// scene.add(highIntensityLightHelper);

// const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
// scene.add(directionalLightHelper);

// const pointLightHelper = new THREE.PointLightHelper(pointLight, 5);
// scene.add(pointLightHelper);

const canvas = document.querySelector('#canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({ color: "red", roughness: 0.3, metalness: 0.9, side: THREE.DoubleSide });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  // cube.rotation.z += 0.01;
}
animate();