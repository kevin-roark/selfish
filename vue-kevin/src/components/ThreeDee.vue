<template>
  <div class="three-dee" ref="div"></div>
</template>

<script>
/* global THREE */
import loadScripts from '../util/load-scripts';
import Resizer from '../mixins/resizer';

export default {
  mixins: [Resizer],
  mounted() {
    this.update = this.update.bind(this);

    const three = 'https://unpkg.com/three@0.84.0/build/three.min.js';
    loadScripts(three, () => {
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
      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
      this.camera.position.z = 666;

      const geometry = new THREE.BoxGeometry(200, 200, 200);
      const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const mesh = this.mesh = new THREE.Mesh(geometry, material);
      this.scene.add(mesh);

      const renderer = this.renderer = new THREE.WebGLRenderer({
        antialias: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0xffffff);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      this.$refs.div.appendChild(renderer.domElement);

      this.update();
    },
    update() {
      requestAnimationFrame(this.update);

      const { mesh, renderer, scene, camera } = this;

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;

      renderer.render(scene, camera);
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
