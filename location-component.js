/// Location Component for A-Frame

// Very very early preliminary coding to solve how to call the object & the camera's location. 
// Still understanding the full concept of getting this started properly, so any guidance is welcome :).

/* LOCATION CONCEPT 0.2 UPDATE: updated to calling the pinned area of wherever the user/object is, as the LOCATION. This should be able to be extended to other objects as well, so that a moving objects LOCATION would be able to trigger an _event as well.

	// This first example could even apply to making objects "jump" locations; from one area to another.
	event-set__1="_event: movingObject_location(5 2.5 0); _target: #movingObjectLocation; position: 2 2 2"


	event-set__2="_event: camera_location(-5 2.5 1); _target: #responsiveObject; visible: true; scale: 5 6 4"

	event-set__3="_event: box_location(-10 1 1); _target: #boxLocation; visible: true; color: red"
*/

/**
* Creates the Location Component, and defines its schema.
*/
if (typeof AFRAME === 'undefined'){

	throw new Error('Component attempted to register before AFRAME was avaliable.');

}



AFRAME.registerComponent('location', {
  	schema: {
   	 position: {default: {x: 0, y: 0, z: 0}, type: 'vec3'},
  	},


	init: function(){
		var data = this.data;
		var el = this.el;
	}

 	update: function (oldData) {
  	// Update the cameras position and returns it.
	this.el.setAttribute('position', {x: 0, y: 0, z: 0});

	// this.el.object3D.position = this.data
 	},

 	remove: function () {
  	// Remove the camera position entity/component.
 	},

 	tick: function (time, timeDelta) {
 	// Update Position of the Camera.
 	}
});
