import React, { useEffect, useState } from "react";
import * as THREE from "three";

function TrialApp() {
  useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var vector = new THREE.Vector3();
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    // this.mount.appendChild(renderer.domElement);
    // setRerender(renderer.domElement);
    // appendchild.renderer.domElement;
    // -----------------------
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  });

  return (
    <div>
      <div class="tracker">
        <video id="myvideo"></video>
        <canvas id="canvas" class="border"></canvas>
        <button id="trackbutton" disabled onclick="toggleVideo()">
          Toggle Camera
        </button>
        <div id="updatenote">hello</div>
      </div>
      <div class="data">
        <div class="hand-1">
          <p id="hand-x">
            X: <span>0</span>
          </p>
          <p id="hand-y">
            Y: <span>0</span>
          </p>
        </div>
      </div>

      {/* <script src="js/three.js"></script> */}
      {/* <script src="https://cdn.jsdelivr.net/npm/handtrackjs/dist/handtrack.min.js"></script> */}
      {/* <script src="js/handTrack.js"></script>  */}
    </div>
  );
}

export default TrialApp;
