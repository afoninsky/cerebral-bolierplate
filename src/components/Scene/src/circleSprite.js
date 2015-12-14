'use strict';
var _ = require('lodash');
var AbstractSprite = require('./abstractSprite');


var defaults = {
  type: 'sprite',
  color: '#FFFFFF',
  scale: 1,
  radius: 1,
  segments: 32,
  enabled: true,
  opacity: 1,
  longitude: 0,
  latitude: 0,
  ignoreAngles: true,
  angleX: 0,
  angleY: 0,
  angleZ: 0,
};

var CircleSprite = module.exports = function (cfg) {
  AbstractSprite.apply(this, arguments);

  var json = this.json = _.defaults(cfg.settings || {}, defaults);

  this.geometry = new THREE.CircleGeometry(json.radius, json.segments);
  this.material = new THREE.MeshBasicMaterial({
    color: json.color,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: json.opacity
  });

  if(json.src) {
    this.material.map = THREE.ImageUtils.loadTexture(json.src);
  }

  this.mesh = new THREE.Mesh(this.geometry, this.material);
  this.mesh.name = this.name;

  this.setCoords(json.longitude, json.latitude);
  this.opacity(json.opacity);
  this.scale(json.scale);

  this.rotate('x', json.angleX);
  this.rotate('y', json.angleY);
  this.rotate('z', json.angleZ);

  if(json.ignoreAngles) {
    this.lookToCamera();
  }
};

CircleSprite.prototype = _.create(AbstractSprite.prototype, {
  'constructor': CircleSprite
});

CircleSprite.prototype.load = function (newJson) {
  var json = this.json || {}, prevSrc = json.src;


  var material = this.material;
  if(this.compare(newJson, ['color', 'src', 'opacity'])) {
    // material.color = json.color;
    material.opacity = json.opacity;
    if(json.src) {
      if(prevSrc !== json.src) {
        this.material.map = json.src ? THREE.ImageUtils.loadTexture(json.src) : null;
      }
    } else if (json.color) {
      material.color = json.color;
    }
  }

  if(this.compare(newJson, ['longitude', 'latitude'])) {
    this.setCoords(json.longitude, json.latitude);
  }

  if(this.compare(newJson, ['scale'])) {
    this.scale(json.scale);
  }

  if(this.compare(newJson, ['angleX'])) {
    this.rotate('x', json.angleX);
  }

  if(this.compare(newJson, ['angleY'])) {
    this.rotate('y', json.angleY);
  }

  if(this.compare(newJson, ['angleZ'])) {
    this.rotate('z', json.angleZ);
  }

  if(this.compare(newJson, ['ignoreAngles'])) {
    this.lookToCamera();
  }
};
