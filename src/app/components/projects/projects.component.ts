import { Component, OnInit, OnDestroy, ElementRef, ViewChildren, ViewChild, QueryList, AfterViewInit, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

interface ProjectData {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
  live_project_link?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren('projectCard', { read: ElementRef }) projectCards!: QueryList<ElementRef>;
  @ViewChild('projectsGrid', { read: ElementRef }) projectsGrid!: ElementRef;

  private intersectionObserver?: IntersectionObserver;
  private isInView = false;

  // Mobile carousel state
  isMobile = false;
  activeIndex = 0;
  
  projects: ProjectData[] = [
  {
    name: "Mo Made Patisserie 🎂",
    description: "Luxury patisserie brand site with SEO-optimized category architecture and WebP asset pipeline — achieved 98/100 Lighthouse score, 40% reduction in Instagram dependency through direct WhatsApp commission flow, and 3x increase in organic discovery within 60 days of launch.",
    tags: [
      { name: "Angular", color: "text-red-400" },
      { name: "TypeScript", color: "text-blue-400" },
      { name: "WebP", color: "text-green-400" },
      { name: "EmailJS", color: "text-yellow-400" },
      { name: "GitHub Pages", color: "text-purple-400" }
    ],
    image: "assets/momade.webp",
    source_code_link: "https://github.com/karthickajan/MoMadePatisserie",
    live_project_link: "https://momadepatisserie.com"
  },
  {
    name: "Helion Advisory Group 🧬",
    description: "Corporate web presence for a Brisbane-based pharma & biotech advisory firm — structured data markup, JSON-LD schema, and semantic HTML drove first-page Google visibility within 45 days. Glassmorphic UI and animated trust signals increased average session duration by 65%.",
    tags: [
      { name: "HTML", color: "text-orange-400" },
      { name: "CSS", color: "text-blue-400" },
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "EmailJS", color: "text-green-400" },
      { name: "GitHub Pages", color: "text-purple-400" }
    ],
    image: "assets/helion.webp",
    source_code_link: "https://github.com/karthickajan/HelionAdvisory",
    live_project_link: "https://helionadvisory.net/"
  },
  {
    name: "CipherKit 🔐",
    description: "85-tool static developer utility platform engineered for a perfect 100/100 Lighthouse score across Performance, Accessibility, Best Practices, and SEO — fully client-side with zero runtime dependencies, inlined CryptoJS, and sub-300ms load times on cold cache.",
    tags: [
      { name: "HTML", color: "text-orange-400" },
      { name: "CSS", color: "text-blue-400" },
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "CryptoJS", color: "text-green-400" },
      { name: "GitHub Pages", color: "text-purple-400" }
    ],
    image: "assets/cipherKit.webp",
    source_code_link: "https://github.com/karthickajan/cipherkit",
    live_project_link: "https://cipherkit.app"
  },
  {
    name: "AurGee Herbs 🌿",
    description: "E-commerce brand site for a premium herbal D2C label — responsive Angular UI on AWS with lazy-loaded product imagery and optimized Core Web Vitals. Brand storytelling-first layout reduced bounce rate by 35% and improved product page engagement by 50% over prior static site.",
    tags: [
      { name: "Angular", color: "text-red-400" },
      { name: "TypeScript", color: "text-blue-400" },
      { name: "AWS", color: "text-orange-400" },
      { name: "Supabase", color: "text-purple-400" },
      { name: "UI/UX", color: "text-green-400" }
    ],
    image: "assets/AurGee_project.webp",
    source_code_link: "https://github.com/karthickajan/AurGee",
    live_project_link: "https://aurgeeherbs.com/"
  },
  {
    name: "Weekend 📍",
    description: "Full-stack event discovery and hosting platform with real-time chat and smart local recommendations — JWT auth, WebSocket-driven messaging, and interest-based matching algorithm reduced cold-start drop-off by 45% and doubled user return rate in beta testing.",
    tags: [
      { name: "Angular", color: "text-red-400" },
      { name: "Node.js", color: "text-green-400" },
      { name: "AWS", color: "text-yellow-400" },
      { name: "WebSockets", color: "text-blue-400" },
      { name: "MySQL", color: "text-purple-400" }
    ],
    image: "assets/weekendss.webp",
    source_code_link: "https://github.com/Weekend-weebee/Weekend-UI",
    live_project_link: "https://github.com/Weekend-weebee/Weekend-UI"
  },
  {
    name: "Chessy ♘",
    description: "```Chess board analyser powered by computer vision. Upload a photo of any chess board — Chessy detects the board, identifies all 64 squares, reconstructs the exact position digitally, and opens it in Lichess for engine analysis. Built with Python, Gradio, YOLOv8, and OpenCV.```",
    tags: [
      { name: "Python", color: "text-blue-400" },
      { name: "OpenCV", color: "text-green-400" },
      { name: "ComputerVision", color: "text-purple-400" },
      { name: "YOLOv8", color: "text-red-400" },
      { name: "HuggingFace", color: "text-orange-400" },
      { name: "Gradio", color: "text-yellow-400" },
    ],
    image: "assets/chessyss.webp",
    source_code_link: "https://github.com/karthickajan/Chessy",
    live_project_link: "https://huggingface.co/spaces/karthickajan/chess"
  }
];
  // removed stray description property
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private portfolioService: PortfolioDataService
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }
  }

  onGridScroll() {
    if (!this.projectsGrid || !isPlatformBrowser(this.platformId)) return;
    const grid = this.projectsGrid.nativeElement as HTMLElement;
    const cardWidth = grid.scrollWidth / this.projects.length;
    this.activeIndex = Math.round(grid.scrollLeft / cardWidth);
  }

  scrollToCard(index: number) {
    if (!this.projectsGrid || !isPlatformBrowser(this.platformId)) return;
    const grid = this.projectsGrid.nativeElement as HTMLElement;
    const cardWidth = grid.scrollWidth / this.projects.length;
    grid.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    this.activeIndex = index;
  }

  ngAfterViewInit() {
    // Initialize tilt effect for project cards
    this.initializeTiltEffect();
    
    // Setup intersection observer after view init
    setTimeout(() => {
      this.setupIntersectionObserver();
    }, 100);
  }

  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  private setupIntersectionObserver() {
    // Skip IntersectionObserver setup in SSR environment
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    // Additional check for IntersectionObserver availability
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }
    
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.isInView) {
            this.isInView = true;
            this.triggerHeaderAnimations();
            setTimeout(() => {
              this.triggerAnimations();
            }, 600); // Start card animations after header animations
          }
        });
      },
      { 
        threshold: 0.05,
        rootMargin: '200px 0px -50px 0px'
      }
    );

    // Start observing the component element
    if (typeof document !== 'undefined') {
      const element = document.querySelector('#projects');
      if (element) {
        this.intersectionObserver.observe(element);
      }
    }
  }

  private triggerHeaderAnimations() {
    // Skip animations in SSR environment
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    // Animate subtitle first
    setTimeout(() => {
      const subtitle = document.querySelector('.projects-section .section-subtitle');
      subtitle?.classList.add('animate-fadeInUp');
    }, 0);
    
    // Animate title after subtitle
    setTimeout(() => {
      const title = document.querySelector('.projects-section .section-title');
      title?.classList.add('animate-slideInFromBottom');
    }, 200);
  }

  private triggerAnimations() {
    // Skip animations in SSR environment
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate-in');
      }, index * 200);
    });
  }

  private initializeTiltEffect() {
    this.projectCards.forEach((cardRef) => {
      const card = cardRef.nativeElement;
      let isTransitioning = false;
      
      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.15s ease-out, box-shadow 0.3s ease';
      });

      card.addEventListener('mousemove', (e: MouseEvent) => {
        // Check if we're hovering over interactive elements
        const target = e.target as HTMLElement;
        const isOverButton = target.classList.contains('live-project-btn') || 
                           target.closest('.live-project-btn') ||
                           target.classList.contains('source-code-btn') ||
                           target.closest('.source-code-btn') ||
                           target.classList.contains('github-icon');
        
        if (isOverButton || isTransitioning) {
          // Reset to neutral position when over buttons - keep the hover lift
          card.style.transition = 'transform 0.2s ease-out, box-shadow 0.3s ease';
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-8px)';
          return;
        }

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Reduced tilt intensity for smoother interaction
        const rotateX = (y - centerY) / centerY * 8;
        const rotateY = (x - centerX) / centerX * -8;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      });

      card.addEventListener('mouseleave', () => {
        isTransitioning = true;
        card.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        setTimeout(() => {
          isTransitioning = false;
        }, 500);
      });
    });
  }

  openSourceCode(url: string) {
    window.open(url, '_blank');
  }

  openLiveProject(url: string) {
    window.open(url, '_blank');
  }

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    if (target) {
      target.src = '/assets/project-placeholder.svg';
    }
  }
}
