<template>
  <div class="three-dee" ref="div" :class="{ loaded }"></div>
</template>

<script>
/* global THREE */
import loadScripts from '../util/load-scripts';
import Resizer from '../mixins/resizer';
import Touching from '../mixins/touching';

const NORMAL_SCALE = 1200;

export default {
  mixins: [Resizer, Touching],
  data() {
    return { mouseReactive: false, loaded: false };
  },
  mounted() {
    this.velocity = 0;

    setTimeout(() => {
      const three = 'https://unpkg.com/three@0.84.0/build/three.min.js';
      loadScripts(three, () => {
        this.buildScene();
      });
    }, 1000);
  },
  beforeDestroy() {
    if (this.renderer) {
      const el = this.renderer.domElement;
      el.parentNode.removeChild(el);
    }
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
        mesh.scale.set(NORMAL_SCALE, NORMAL_SCALE, NORMAL_SCALE);
        mesh.position.y = 20;
        this.scene.add(mesh);

        this.loaded = true;
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

      const meshPath = '/static/models/bust/model_optimized.json';
      const jsonLoader = new THREE.JSONLoader();
      jsonLoader.load(meshPath, (geometry) => {
        model.geometry = geometry;
        loaded();
      });
    },
    update(time) {
      requestAnimationFrame(this.update);
      if (!this.lastTime) this.lastTime = time;

      const { mesh, renderer, scene, camera } = this;
      const delta = time - this.lastTime;

      let dirtyV = false;
      if (Math.abs(this.velocity) > 0) {
        this.velocity *= Math.min(1, 0.057 * delta);
        dirtyV = true;

        if (Math.abs(this.velocity) < 0.2) {
          this.velocity = 0;
        }
      }

      if (mesh) {
        if (!this.touchingDown) {
          mesh.rotation.y -= 0.0002 * delta;
        } else if (dirtyV && Math.abs(this.prevDX) > 0) {
          mesh.rotation.y += this.prevDX * 0.002;
        }

        if (dirtyV) {
          const s = NORMAL_SCALE + (this.velocity * 0.75);
          mesh.scale.set(s, s, s);
        }
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
    move(ev) {
      if (!this.mouseReactive) {
        return;
      }

      const { prevX = ev.pageX, prevY = ev.pageY } = this;
      const dx = ev.pageX - prevX;
      const dy = ev.pageY - prevY;

      this.velocity += Math.abs(dx) + Math.abs(dy);
      this.prevX = ev.pageX;
      this.prevY = ev.pageY;
      this.prevDX = dx;
      this.prevDY = dy;
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

.three-dee {
  opacity: 0;
  transition: opacity 1s;
}

.three-dee.loaded {
  opacity: 1;
}
</style>
