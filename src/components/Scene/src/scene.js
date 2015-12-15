var common = require('./common');
var EventEmitter = require('event-emitter')

var Scene = module.exports = function (cfg) {

  this.scene = new THREE.Scene();
  this.objects = [];
  this.event = new EventEmitter()

  var camera = this.camera = new THREE.PerspectiveCamera(
    common.const.SCENE_FOV,
    window.innerWidth / window.innerHeight,
    0.1,
    common.const.SCENE_DEPTH
  );
  camera.target = new THREE.Vector3(0, 0, 0);

  var renderer = this.renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  this.raycaster = new THREE.Raycaster();
  this.mouse = new THREE.Vector2();

  var container = cfg.container || document.querySelector('#container');
  container.appendChild(renderer.domElement);

  window.addEventListener('resize', this.onWindowResize.bind(this), false);

  container.addEventListener('mousedown', this.onDocumentMouseDown.bind(this), false);
  container.addEventListener('mouseup', this.onDocumentMouseUp.bind(this), false);
  container.addEventListener('mousemove', this.onDocumentMouseMove.bind(this), false);

  this.setBackground(cfg.background);

  if(cfg.direction) {
    this.currentLon = cfg.direction[0];
    this.currentLat = cfg.direction[1];
  } else {
    this.currentLon = 0;
    this.currentLat = 0;
  }

  this.init();
};

// load spherical image into scene
Scene.prototype.setBackground = function (src) {

  if(this.sphere) {
    this.scene.remove(this.sphere);
  }
  var geometry = new THREE.SphereGeometry(common.const.SCENE_RADIUS, 32, 32);
  geometry.scale( -1, 1, 1 );

  var material = new THREE.MeshBasicMaterial({
    map: THREE.ImageUtils.loadTexture(src)
  });
  this.sphere = new THREE.Mesh( geometry, material );
  this.scene.add(this.sphere);

  // load texture
  // var img = new Image();
  // img.crossOrigin = 'anonymous'
  // img.src = src
  // img.onload = function() {
  //   var material = new THREE.MeshBasicMaterial({
  //     map: THREE.ImageUtils.loadTexture(src)
  //   });
  //   this.sphere = new THREE.Mesh( geometry, material );
  //   this.scene.add(this.sphere);
  // }.bind(this)

};


Scene.prototype.addObject = function (obj) {
  var mesh = obj.mesh;
  mesh._index = this.objects.push(obj) - 1;
  this.selectedObject = obj;
  this.scene.add(mesh);
  obj.event.emit('ready');
};

Scene.prototype.removeObject = function (obj) {
  var mesh = this.scene.getObjectByName(obj.name)
  this.scene.remove(mesh)
};

Scene.prototype.lookAt = function (lon, lat) {
  var camera = this.camera,
      target = camera.target;

  lat = common.ensureBetween(lat, -85, 85);
  common.applyPosition(
    common.sphereToDecart(lon, lat),
    target
  );
  for(var i in this.objects) {
    var obj = this.objects[i];
    if(obj.json.ignoreAngles) {
      obj.lookToCamera();
    }
  }
  camera.lookAt(target);
};

Scene.prototype.update = function () {
  var scene = this.scene;
  this.lookAt(this.currentLon, this.currentLat);
  this.renderer.render(scene, this.camera);
};

Scene.prototype.init = function () {
  // http://caniuse.com/#feat=requestanimationframe
  window.requestAnimationFrame(this.init.bind(this));
  this.update();
};

Scene.prototype.onWindowResize = function () {
  var width = window.innerWidth,
      height = window.innerHeight;
  this.camera.aspect = width / height;
  this.camera.updateProjectionMatrix();
  this.renderer.setSize(width, height);
};

Scene.prototype.onDocumentMouseDown = function (event) {
  event.preventDefault();
  var mouse = this.mouse, renderer = this.renderer;

  this.isUserInteracting = true;
  var clientX = event.offsetX,
      clientY = event.offsetY;

  this.onPointerDownPointerX = clientX;
  this.onPointerDownPointerY = clientY;
  this.onPointerDownLon = this.currentLon;
  this.onPointerDownLat = this.currentLat;

  mouse.x = (clientX / renderer.domElement.clientWidth) * 2 - 1;
  mouse.y = - (clientY / renderer.domElement.clientHeight) * 2 + 1;
  this.raycaster.setFromCamera(this.mouse, this.camera);

  var clickedMesh = this.raycaster.intersectObjects(this.scene.children)[0];
  if(!clickedMesh) { return; }

  var mesh = clickedMesh.object, index = mesh._index;

  if(typeof index === 'undefined') {
    return this.event.emit('click', event)
  }

  var clickedObject = this.objects[index];
  return clickedObject.event.emit('click', event)
};

Scene.prototype.onDocumentMouseUp = function () {
  this.isUserInteracting = false;
};

Scene.prototype.onDocumentMouseMove = function (event) {
  if(!this.isUserInteracting) { return; }
  var clientX = event.offsetX,
      clientY = event.offsetY;

  event.preventDefault();
  this.currentLon = (this.onPointerDownPointerX - clientX) * 0.1 + this.onPointerDownLon;
  this.currentLat = (clientY - this.onPointerDownPointerY) * 0.1 + this.onPointerDownLat;
};
