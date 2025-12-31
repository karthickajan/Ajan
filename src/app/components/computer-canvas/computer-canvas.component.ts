import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Component({
  selector: 'app-computer-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './computer-canvas.component.html',
  styleUrl: './computer-canvas.component.scss'
})
export class ComputerCanvasComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef<HTMLDivElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private computer!: THREE.Group;
  private controls!: OrbitControls;
  private animationId!: number;
  private isMobile: boolean = false;
  
  // Loading state
  isLoading: boolean = true;
  loadingProgress: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkMobile();
      setTimeout(() => this.init(), 100);
    }
  }

  private checkMobile() {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    this.isMobile = mediaQuery.matches;
    
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      this.isMobile = event.matches;
      this.updateCameraForMobile();
    };
    
    mediaQuery.addEventListener("change", handleMediaQueryChange);
  }

  private init() {
    const container = this.canvasContainer.nativeElement;
    
    // Scene
    this.scene = new THREE.Scene();

    // Camera - exact same as JSX
    this.camera = new THREE.PerspectiveCamera(
      this.isMobile ? 35 : 18, // Smaller FOV on mobile = bigger computer
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    
    if (this.isMobile) {
      this.camera.position.set(0, 0, 14); // Closer camera on mobile
    } else {
      this.camera.position.set(20, 5, 5);
    }

    // Renderer - enhanced settings for better lighting
    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      preserveDrawingBuffer: true
    });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.5;
    container.appendChild(this.renderer.domElement);

    this.loadComputerModel();
    this.setupLighting();
    this.setupControls();
    this.animate();
    this.handleResize();
  }

  private loadComputerModel() {
    const loader = new GLTFLoader();
    
    // Try to load the GLTF model (same as JSX)
    loader.load(
      './assets/desktop_pc/scene.gltf', // You'll need to add this model file
      (gltf) => {
        this.computer = gltf.scene;
        
        // Apply exact same settings as JSX
        if (this.isMobile) {
          this.computer.scale.setScalar(0.75);
          this.computer.position.set(0, -2.5, 0); // Moved up
          this.computer.rotation.set(0, 0, 0);
        } else {
          this.computer.scale.setScalar(0.75);
          this.computer.position.set(0, -2.25, -1.5); // Moved up from -3.25 to show desk
          this.computer.rotation.set(-0.01, -0.2, -0.1);
        }
        
        // Enable shadows and enhance materials for better lighting response
        this.computer.traverse((child: any) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            
            // Enhance material properties for better lighting response
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach((mat: any) => {
                  if (mat.isMeshStandardMaterial || mat.isMeshPhysicalMaterial) {
                    mat.envMapIntensity = 1.5;
                    mat.metalness = Math.min(mat.metalness * 1.2, 1);
                    mat.roughness = Math.max(mat.roughness * 0.8, 0.1);
                  }
                });
              } else {
                if (child.material.isMeshStandardMaterial || child.material.isMeshPhysicalMaterial) {
                  child.material.envMapIntensity = 1.5;
                  child.material.metalness = Math.min(child.material.metalness * 1.2, 1);
                  child.material.roughness = Math.max(child.material.roughness * 0.8, 0.1);
                }
              }
            }
          }
        });
        
        this.scene.add(this.computer);
        
        // Hide loader
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      },
      (progress) => {
        if (progress.total > 0) {
          this.loadingProgress = Math.round((progress.loaded / progress.total) * 100);
        }
      },
      (error) => {
        console.error('Error loading GLTF model:', error);
        this.isLoading = false;
        // Fallback to basic geometry if model fails to load
        this.createFallbackLaptop();
      }
    );
  }

  private createFallbackLaptop() {
    // Fallback laptop model if GLTF fails
    this.computer = new THREE.Group();

    const screenGeometry = new THREE.BoxGeometry(4, 2.5, 0.1);
    const screenMaterial = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.y = 1.25;
    screen.rotation.x = -0.1;
    screen.castShadow = true;

    const baseGeometry = new THREE.BoxGeometry(4, 0.2, 2.8);
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x2a2a2a });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = -0.1;
    base.castShadow = true;

    this.computer.add(screen, base);
    this.computer.scale.setScalar(1.5);
    this.computer.position.y = -1;
    this.scene.add(this.computer);
  }

  private setupLighting() {
    // Enhanced lighting with increased intensity for better visibility
    
    // Hemisphere light - increased intensity for better ambient lighting
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
    this.scene.add(hemisphereLight);

    // Spot light - increased intensity for main lighting
    const spotLight = new THREE.SpotLight(0xffffff, 3);
    spotLight.position.set(-20, 50, 10);
    spotLight.angle = 0.12;
    spotLight.penumbra = 1;
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    this.scene.add(spotLight);

    // Point light - significantly increased intensity
    const pointLight = new THREE.PointLight(0xffffff, 2);
    this.scene.add(pointLight);
    
    // Additional directional light for even better illumination
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    this.scene.add(directionalLight);
    
    // Add invisible ground plane to receive shadows
    const groundGeometry = new THREE.PlaneGeometry(100, 100);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x000000, 
      transparent: true, 
      opacity: 0.1
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -4;
    ground.receiveShadow = true;
    this.scene.add(ground);
  }

  private setupControls() {
    // Only setup controls for non-mobile (like JSX)
    if (!this.isMobile) {
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableZoom = false;
      this.controls.maxPolarAngle = Math.PI / 2;
      this.controls.minPolarAngle = Math.PI / 2;
      this.controls.autoRotate = true;
      this.controls.enableDamping = true;
    }
  }

  private updateCameraForMobile() {
    if (this.camera) {
      if (this.isMobile) {
        this.camera.fov = 50;
        this.camera.position.set(0, 0, 20);
      } else {
        this.camera.fov = 25;
        this.camera.position.set(20, 3, 5);
      }
      this.camera.updateProjectionMatrix();
    }
  }

  private animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    
    // Mobile rotation (like useFrame in JSX)
    if (this.computer && this.isMobile) {
      this.computer.rotation.y += 0.01; // delta * 0.5 equivalent
    }
    
    if (this.controls) {
      this.controls.update();
    }
    
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

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.animationId) cancelAnimationFrame(this.animationId);
      if (this.controls) this.controls.dispose();
      if (this.renderer) this.renderer.dispose();
    }
  }
}
