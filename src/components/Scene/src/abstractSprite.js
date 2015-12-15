/* events:

rotate
position
cameralook
opacity
scale
ready
destroy
click
 */

'use strict';
var common = require('./common');
var _ = require('lodash');
var EventEmitter = require('event-emitter')

var AbstractSprite = module.exports = function (cfg) {

  this.name = cfg.name;
  this.scene = cfg.scene
  this.event = new EventEmitter()
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
  this.event.emit('scale', size)
};

AbstractSprite.prototype.opacity = function (value) {

  this.mesh.material.opacity = value;
  this.json.opacity = value;
  this.event.emit('opacity', value)
};

AbstractSprite.prototype.rotate = function (axis, angle) {
  var value = THREE.Math.mapLinear(angle, -45, 45, 1.58, -1.58);
  this.mesh.rotation[axis] = value;
  var field = angle + axis.toUpperCase();
  this.json[field] = axis;
  this.event.emit('rotate', axis, angle)
};


AbstractSprite.prototype.position = function (lon, lat, depth) {

  common.applyPosition(
    common.sphereToDecart(lon, lat, depth || common.const.OBJECTS_LAYER),
    this.mesh.position
  );
  this.json.longitude = lon;
  this.json.latitude = lat;
  this.event.emit('position', lon, lat, depth)
};

AbstractSprite.prototype.lookToCamera = function () {

  var camera = this.scene.camera
  this.mesh.quaternion.copy(camera.quaternion);
  this.event.emit('cameralook')
};

AbstractSprite.prototype.onFocus = function () {

  console.log('focus not implemented');

};

AbstractSprite.prototype.onUnfocus = function () {

  console.log('unfocus not implemented');

};

AbstractSprite.prototype.delete = function () {
  this.scene.removeObject(this)
  this.event.emit('destroy');
}
