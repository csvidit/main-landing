var kursorx = new kursor({
    type: 1,
		color: '#FFFFFF'
  });

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles-config.json', function() {
  console.log('callback - particles.js config loaded');
});

particlesJS("particles-js", {"particles":{"number":{"value":200,"density":{"enable":true,"value_area":800}},"color":{"value":"#ff0000"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

//   let renderer,
//   scene,
//   camera,
//   sphereBg,
//   nucleus,
//   stars,
//   controls,
//   container = document.getElementById("canvas_container"),
//   timeout_Debounce,
//   noise = new SimplexNoise(),
//   cameraSpeed = 0,
//   blobScale = 3;
  
  
//   init();
//   animate();
  
  
//   function init() {
//       scene = new THREE.Scene();
  
//       camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.01, 1000)
//       camera.position.set(0,0,230);
  
//       const directionalLight = new THREE.DirectionalLight("#fff", 2);
//       directionalLight.position.set(0, 50, -20);
//       scene.add(directionalLight);
  
//       let ambientLight = new THREE.AmbientLight("#ffffff", 1);
//       ambientLight.position.set(0, 20, 20);
//       scene.add(ambientLight);
  
//       renderer = new THREE.WebGLRenderer({
//           antialias: true,
//           alpha: true
//       });
//       renderer.setSize(container.clientWidth, container.clientHeight);
//       renderer.setPixelRatio(window.devicePixelRatio);
//       container.appendChild(renderer.domElement);
  
//       //OrbitControl
//       controls = new THREE.OrbitControls(camera, renderer.domElement);
//       controls.autoRotate = true;
//       controls.autoRotateSpeed = 4;
//       controls.maxDistance = 350;
//       controls.minDistance = 150;
//       controls.enablePan = false;
  
//       const loader = new THREE.TextureLoader();
//       const textureSphereBg = loader.load('https://i.ibb.co/4gHcRZD/bg3-je3ddz.jpg');
//       const texturenucleus = loader.load('https://i.ibb.co/hcN2qXk/star-nc8wkw.jpg');
//       const textureStar = loader.load("https://i.ibb.co/ZKsdYSz/p1-g3zb2a.png");
//       const texture1 = loader.load("https://i.ibb.co/F8by6wW/p2-b3gnym.png");  
//       const texture2 = loader.load("https://i.ibb.co/yYS2yx5/p3-ttfn70.png");
//       const texture4 = loader.load("https://i.ibb.co/yWfKkHh/p4-avirap.png");
  
  
//       /*  Nucleus  */   
//       texturenucleus.anisotropy = 16;
//       let icosahedronGeometry = new THREE.IcosahedronGeometry(30, 10);
//       let lambertMaterial = new THREE.MeshPhongMaterial({ map: texturenucleus });
//       nucleus = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
//       scene.add(nucleus);
  
  
//       /*    Sphere  Background   */
//       textureSphereBg.anisotropy = 16;
//       let geometrySphereBg = new THREE.SphereBufferGeometry(150, 40, 40);
//       let materialSphereBg = new THREE.MeshBasicMaterial({
//           side: THREE.BackSide,
//           map: textureSphereBg,
//       });
//       sphereBg = new THREE.Mesh(geometrySphereBg, materialSphereBg);
//       scene.add(sphereBg);
  
  
//       /*    Moving Stars   */
//       let starsGeometry = new THREE.Geometry();
  
//       for (let i = 0; i < 50; i++) {
//           let particleStar = randomPointSphere(150); 
  
//           particleStar.velocity = THREE.MathUtils.randInt(50, 200);
  
//           particleStar.startX = particleStar.x;
//           particleStar.startY = particleStar.y;
//           particleStar.startZ = particleStar.z;
  
//           starsGeometry.vertices.push(particleStar);
//       }
//       let starsMaterial = new THREE.PointsMaterial({
//           size: 5,
//           color: "#ffffff",
//           transparent: true,
//           opacity: 0.8,
//           map: textureStar,
//           blending: THREE.AdditiveBlending,
//       });
//       starsMaterial.depthWrite = false;  
//       stars = new THREE.Points(starsGeometry, starsMaterial);
//       scene.add(stars);
  
  
//       /*    Fixed Stars   */
//       function createStars(texture, size, total) {
//           let pointGeometry = new THREE.Geometry();
//           let pointMaterial = new THREE.PointsMaterial({
//               size: size,
//               map: texture,
//               blending: THREE.AdditiveBlending,                      
//           });
  
//           for (let i = 0; i < total; i++) {
//               let radius = THREE.MathUtils.randInt(149, 70); 
//               let particles = randomPointSphere(radius);
//               pointGeometry.vertices.push(particles);
//           }
//           return new THREE.Points(pointGeometry, pointMaterial);
//       }
//       scene.add(createStars(texture1, 15, 20));   
//       scene.add(createStars(texture2, 5, 5));
//       scene.add(createStars(texture4, 7, 5));
  
  
//       function randomPointSphere (radius) {
//           let theta = 2 * Math.PI * Math.random();
//           let phi = Math.acos(2 * Math.random() - 1);
//           let dx = 0 + (radius * Math.sin(phi) * Math.cos(theta));
//           let dy = 0 + (radius * Math.sin(phi) * Math.sin(theta));
//           let dz = 0 + (radius * Math.cos(phi));
//           return new THREE.Vector3(dx, dy, dz);
//       }
//   }
  
  
//   function animate() {
  
//       //Stars  Animation
//       stars.geometry.vertices.forEach(function (v) {
//           v.x += (0 - v.x) / v.velocity;
//           v.y += (0 - v.y) / v.velocity;
//           v.z += (0 - v.z) / v.velocity;
  
//           v.velocity -= 0.3;
  
//           if (v.x <= 5 && v.x >= -5 && v.z <= 5 && v.z >= -5) {
//               v.x = v.startX;
//               v.y = v.startY;
//               v.z = v.startZ;
//               v.velocity = THREE.MathUtils.randInt(50, 300);
//           }
//       });
  
  
//       //Nucleus Animation
//       nucleus.geometry.vertices.forEach(function (v) {
//           let time = Date.now();
//           v.normalize();
//           let distance = nucleus.geometry.parameters.radius + noise.noise3D(
//               v.x + time * 0.0005,
//               v.y + time * 0.0003,
//               v.z + time * 0.0008
//           ) * blobScale;
//           v.multiplyScalar(distance);
//       })
//       nucleus.geometry.verticesNeedUpdate = true;
//       nucleus.geometry.normalsNeedUpdate = true;
//       nucleus.geometry.computeVertexNormals();
//       nucleus.geometry.computeFaceNormals();
//       nucleus.rotation.y += 0.002;
  
  
//       //Sphere Beckground Animation
//       sphereBg.rotation.x += 0.002;
//       sphereBg.rotation.y += 0.002;
//       sphereBg.rotation.z += 0.002;
  
      
//       controls.update();
//       stars.geometry.verticesNeedUpdate = true;
//       renderer.render(scene, camera);
//       requestAnimationFrame(animate);
//   }
  
  
  
//   /*     Resize     */
//   window.addEventListener("resize", () => {
//       clearTimeout(timeout_Debounce);
//       timeout_Debounce = setTimeout(onWindowResize, 80);
//   });
//   function onWindowResize() {
//       camera.aspect = container.clientWidth / container.clientHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(container.clientWidth, container.clientHeight);
//   }
  
  
  
  /*     Fullscreen btn     */
  // let fullscreen;
  // let fsEnter = document.getElementById('fullscr');
  // fsEnter.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     if (!fullscreen) {
  //         fullscreen = true;
  //         document.documentElement.requestFullscreen();
  //         fsEnter.innerHTML = "Exit Fullscreen";
  //     }
  //     else {
  //         fullscreen = false;
  //         document.exitFullscreen();
  //         fsEnter.innerHTML = "Go Fullscreen";
  //     }
  // });