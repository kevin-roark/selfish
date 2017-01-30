<template>
  <div class="three-dee" ref="div"></div>
</template>

<script>
/* global THREE */
import loadScripts from '../util/load-scripts';
import Resizer from '../mixins/resizer';
import initOBJLoader from '../lib/OBJLoader';

export default {
  mixins: [Resizer],
  mounted() {
    this.update = this.update.bind(this);

    const three = 'https://unpkg.com/three@0.84.0/build/three.min.js';
    loadScripts(three, () => {
      initOBJLoader(THREE);
      this.buildScene();
    });
  },
  beforeDestroy() {
    if (!this.renderer) return;
    const el = this.renderer.domElement;
    el.parentNode.removeChild(el);
  },
  methods: {
    buildScene() {
      const renderer = this.renderer = new THREE.WebGLRenderer({
        antialias: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0xffffff);
      // renderer.shadowMap.enabled = true;
      // renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      this.$refs.div.appendChild(renderer.domElement);

      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
      this.camera.position.z = 666;

      const redlight = new THREE.PointLight(0xff0000, 1.5, 500, 1);
      redlight.position.set(200, 200, 200);
      this.scene.add(redlight);

      const bluelight = new THREE.PointLight(0x0000ff, 1.5, 500, 1);
      bluelight.position.set(-200, -200, 200);
      this.scene.add(bluelight);

      this.ambient = new THREE.AmbientLight(0x222222, 1);
      this.scene.add(this.ambient);

      this.loadMyModel(({ geometry, texture }) => {
        this.geometry = geometry;
        this.texture = texture;

        geometry.center();

        const material = this.material = new THREE.MeshLambertMaterial({
          // map: this.texture,
          // roughness: 0.8,
          // metalness: 0.3,
          // color: 0xff0000,
        });

        const mesh = this.mesh = new THREE.Mesh(geometry, material);
        mesh.scale.set(1200, 1200, 1200);
        mesh.position.y = 20;
        this.scene.add(mesh);
      });

      this.update();
    },
    loadMyModel(callback) {
      const model = { geometry: null, texture: null };
      const loaded = () => {
        if (model.geometry && model.texture) {
          callback(model);
        }
      };

      const texturePath = '/static/models/bust/texture.jpg';
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(texturePath, (texture) => {
        model.texture = texture;
        loaded();
      });

      const objPath = '/static/models/bust/model.obj';
      const objLoader = new THREE.OBJLoader();
      objLoader.load(objPath, (group) => {
        model.geometry = group.children[0].geometry;
        loaded();
      });
    },
    update(time) {
      requestAnimationFrame(this.update);
      if (!this.lastTime) this.lastTime = time;

      const { mesh, renderer, scene, camera } = this;
      const delta = time - this.lastTime;

      if (mesh) {
        if (!mesh.rotationTarget) {
          mesh.rotationTarget = {
            x: (Math.random() - 0.5) * 0.01,
            y: (Math.random() - 0.5) * 0.01,
            z: (Math.random() - 0.5) * 0.01,
            steps: Math.floor(Math.random() * 1000) + 300,
          };
        }
        // mesh.rotation.x += mesh.rotationTarget.x;
        // mesh.rotation.y += mesh.rotationTarget.y;
        // mesh.rotation.z += mesh.rotationTarget.z;
        // mesh.rotationTarget.steps -= 1;
        // if (mesh.rotationTarget.steps < 0) {
        //   mesh.rotationTarget = null;
        // }

        mesh.rotation.y -= 0.0002 * delta;
      }

      renderer.render(scene, camera);

      this.lastTime = time;
    },
    onResize() {
      const { camera, renderer } = this;
      if (!camera || !renderer) return;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    },
  },
};
</script>

<style scoped>

.three-dee, .three-dee canvas {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  overflow: none;
}
</style>
