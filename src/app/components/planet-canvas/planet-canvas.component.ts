import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Component({
  selector: 'app-planet-canvas',
  standalone: true,
  templateUrl: './planet-canvas.component.html',
  styleUrl: './planet-canvas.component.scss'
})
export class PlanetCanvasComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef<HTMLDivElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private earth!: THREE.Object3D;
  private controls!: OrbitControls;
  private animationId!: number;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.init(), 100);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
      }
      if (this.renderer) {
        this.renderer.dispose();
      }
      if (this.controls) {
        this.controls.dispose();
      }
      // Clean up document event listeners
      if ((this as any)._mouseUpHandler) {
        document.removeEventListener('mouseup', (this as any)._mouseUpHandler);
      }
    }
  }

  private init() {
    const container = this.canvasContainer.nativeElement;
    
    // Scene
    this.scene = new THREE.Scene();

    // Camera - Better positioning for full planet view
    this.camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      200
    );
    this.camera.position.set(-4, 3, 5); // Moved back slightly from 4 to 5

    // Renderer - Enhanced settings for better contrast
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Enhanced color management for better contrast
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2; // Slight exposure increase for better contrast
    
    container.appendChild(this.renderer.domElement);

    this.loadEarthModel();
    this.setupControls();
    this.animate();
    this.handleResize();
  }

  private loadEarthModel() {
    const loader = new GLTFLoader();
    
    loader.load(
      './assets/planet/scene.gltf',
      (gltf) => {
        // Better scaling and positioning for proper view
        this.earth = gltf.scene;
        this.earth.scale.setScalar(2.8); // Reduced from 3.0 to 2.8 to fit better
        this.earth.position.y = 0;
        this.earth.rotation.y = 0;

        // Enhanced lighting setup for better contrast like reference
        const ambientLight = new THREE.AmbientLight(0x404040, 0.4); // Reduced ambient intensity for more contrast
        this.scene.add(ambientLight);

        // Main directional light (sun-like)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
        directionalLight.position.set(10, 10, 5);
        directionalLight.castShadow = true;
        this.scene.add(directionalLight);

        // Secondary directional light for rim lighting
        const rimLight = new THREE.DirectionalLight(0x87ceeb, 0.6);
        rimLight.position.set(-10, 5, -5);
        this.scene.add(rimLight);

        // Point light for additional detail illumination
        const pointLight = new THREE.PointLight(0xffffff, 0.5);
        pointLight.position.set(5, 0, 10);
        this.scene.add(pointLight);

        // Enhance material properties for better contrast
        this.earth.traverse((child) => {
          if ((child as any).isMesh) {
            // Increase contrast and saturation
            const mesh = child as THREE.Mesh;
            if (mesh.material) {
              const material = mesh.material as THREE.MeshStandardMaterial;
              material.metalness = 0.1;
              material.roughness = 0.8;
              // Enhance color saturation
              if (material.map) {
                material.map.colorSpace = THREE.SRGBColorSpace;
              }
            }
          }
        });

        this.scene.add(this.earth);
        console.log('Earth model loaded successfully');
      },
      (progress) => {
        console.log('Planet loading progress:', (progress.loaded / progress.total * 100) + '%');
      },
      (error) => {
        console.error('Error loading planet model:', error);
        // Fallback to a blue/green sphere that looks like Earth
        this.createEarthFallback();
      }
    );
  }

  private createEarthFallback() {
    const geometry = new THREE.SphereGeometry(2.5, 32, 32);
    
    // Create Earth-like material with texture
    const material = new THREE.MeshPhongMaterial({
      color: 0x4169E1, // Royal blue base
      shininess: 30,
      transparent: true,
      opacity: 0.9
    });
    
    this.earth = new THREE.Mesh(geometry, material);
    this.earth.position.y = 0;
    this.scene.add(this.earth);
    
    console.log('Using fallback Earth sphere');
  }

  private setupControls() {
    // EXACT same controls as reference repo
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.autoRotate = true;
    this.controls.enableZoom = false;
    this.controls.maxPolarAngle = Math.PI / 2;
    this.controls.minPolarAngle = Math.PI / 2;

    // Fix: Release drag when mouse leaves canvas or goes outside window
    const onMouseUp = () => {
      // Simulate end of orbit control drag
      this.controls.enabled = true;
    };

    const onMouseLeave = () => {
      // Reset controls state when mouse leaves canvas area
      this.controls.reset();
      this.controls.autoRotate = true;
    };

    // Listen for mouseup on document to catch releases outside canvas
    document.addEventListener('mouseup', onMouseUp);
    
    // Store reference for cleanup
    (this as any)._mouseUpHandler = onMouseUp;
    (this as any)._mouseLeaveHandler = onMouseLeave;
  }

  private animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  private handleResize() {
    window.addEventListener('resize', () => {
      const container = this.canvasContainer.nativeElement;
      this.camera.aspect = container.clientWidth / container.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(container.clientWidth, container.clientHeight);
    });
  }
}