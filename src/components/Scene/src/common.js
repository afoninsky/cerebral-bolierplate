/**
 * shared code between modules
 */


var consts = {
  SCENE_FOV: 75,
  SCENE_RADIUS: 10,
  DEFAULT_OPACITY: 0.5
};

consts.SCENE_DEPTH = consts.SCENE_RADIUS;
consts.OBJECTS_LAYER = Math.round(consts.SCENE_RADIUS / 2);


module.exports = {

  const: consts,

  // translate spherical coords into decart [X, Y, Z]
  sphereToDecart: function (lon, lat, radius) {
    var phi = THREE.Math.degToRad(90 - lat);
    var theta = THREE.Math.degToRad(lon);
    if(!radius) { radius = 1; }

    return new THREE.Vector3(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
  },

  applyPosition: function (source, target) {
    target.setX(source.x);
    target.setY(source.y);
    target.setZ(source.z);
  },

  ensureBetween: function (val, min, max) {
    return Math.max(min, Math.min(max, val));
  }
};
