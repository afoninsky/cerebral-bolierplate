'use strict';
var common = require('./common');
var _ = require('lodash');

var AbstractSprite = module.exports = function (cfg) {

  this.name = cfg.name;
  this.camera = cfg.camera;
};

AbstractSprite.prototype.compare = function (newObj, values) {
  var json = this.json, isUpdated = false;
  values.forEach(function (field) {
    var value = newObj[field];
    if(typeof value === 'undefined') { return; }
    if(json[field] !== value) { isUpdated = true; }
    json[field] = value;
  });
  return isUpdated;
};

AbstractSprite.prototype.load = function () {

  throw new Error('please implement .load method');
};

AbstractSprite.prototype.toJSON = function () {

  return _.clone(this.json);
};

AbstractSprite.prototype.scale = function (size) {

  this.mesh.scale.set(size, size, size);
  this.json.scale = size;
};

AbstractSprite.prototype.opacity = function (value) {

  this.mesh.material.opacity = value;
  this.json.opacity = value;
};

AbstractSprite.prototype.rotate = function (axis, angle) {

  var value = THREE.Math.mapLinear(angle, -45, 45, 1.58, -1.58);
  this.mesh.rotation[axis] = value;
  var field = angle + axis.toUpperCase();
  this.json[field] = axis;
};


AbstractSprite.prototype.setCoords = function (lon, lat) {

  common.applyPosition(
    common.sphereToDecart(lon, lat, common.const.OBJECTS_LAYER),
    this.mesh.position
  );
  this.json.longitude = lon;
  this.json.latitude = lat;
};

AbstractSprite.prototype.lookToCamera = function () {

  this.mesh.quaternion.copy(this.camera.quaternion);
};

AbstractSprite.prototype.onLoad = function () {

  console.log('load not implemented');

};

AbstractSprite.prototype.onClick = function () {

  console.log('click not implemented');

};

AbstractSprite.prototype.onFocus = function () {

  console.log('focus not implemented');

};

AbstractSprite.prototype.onUnfocus = function () {

  console.log('unfocus not implemented');

};
