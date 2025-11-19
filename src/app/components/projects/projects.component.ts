import { Component, OnInit, OnDestroy, ElementRef, ViewChildren, QueryList, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
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
  
  private intersectionObserver?: IntersectionObserver;
  private isInView = false;
  
  projects: ProjectData[] = [
    {
      name: "FinancialFlow 💸",
      description: "Comprehensive personal finance management application built with Next.js and Typescript. It empowers users to take control of their financial health through intuitive tracking, insightful analytics, and personalized recommendations.",
      tags: [
        { name: "React-native", color: "text-blue-400" },
        { name: "Typescript", color: "text-green-400" },
        { name: "Tailwind CSS", color: "text-pink-400" },
        { name: "Next.js", color: "text-purple-400" }
      ],
      image: "assets/AurGee_project.jpg",
      source_code_link: "https://github.com/janaPM/AurGee",
      live_project_link: "https://aurgeeherbs.com/"
    },
    {
      name: "Sunnify (Spotify Downloader) ♫",
      description: "Sunnify is a Spotify downloader webapp/desktop application that allows you to download entire playlists locally onto your Mac/Linux/Windows PC. The web version of the app is hosted on AWS Lambda and Elastic Beanstalk, with FastAPI ASGI production.",
      tags: [
        { name: "python", color: "text-blue-400" },
        { name: "webscraping", color: "text-green-400" },
        { name: "AWS Lambda/Beanstalk", color: "text-orange-400" },
        { name: "Proxy/API", color: "text-purple-400" }
      ],
      image: "assets/AurGee_project.jpg",
      source_code_link: "https://github.com/janaPM/AurGee",
      live_project_link: "https://aurgeeherbs.com/"
    },
    {
      name: "Enterprise API Tester 🌐",
      description: "Comprehensive API testing tool with support for all major HTTP methods, authentication, and CORS-friendly proxy. Features include request import/export, real-world samples, and local storage for data persistence. Built with Next.js, and TypeScript for optimal performance and developer experience.",
      tags: [
        { name: "Typescript", color: "text-blue-400" },
        { name: "Tailwind CSS", color: "text-green-400" },
        { name: "Next.js", color: "text-pink-400" },
        { name: "Authentication-Body", color: "text-orange-400" }
      ],
      image: "assets/AurGee_project.jpg",
      source_code_link: "https://github.com/janaPM/AurGee",
      live_project_link: "https://aurgeeherbs.com/"
    },
    {
      name: "KnifeThrow 🎯",
      description: "KnifeThrow is a Java Swing-based 2D mini-game, packed by maven with over 5000 lines of code. It includes a menu, game-over screens, sound effects, and custom sprites. Players unlock different knives with varied abilities in a dedicated knife shop. The game features improved collision systems, animations, and particle effects for an immersive experience.",
      tags: [
        { name: "java", color: "text-red-400" },
        { name: "swing", color: "text-blue-400" },
        { name: "maven", color: "text-green-400" },
        { name: "arcadegame", color: "text-purple-400" }
      ],
      image: "assets/AurGee_project.jpg",
      source_code_link: "https://github.com/janaPM/AurGee",
      live_project_link: "https://aurgeeherbs.com/"
    },
    {
      name: "COVID-19 GTA Cases Data Analysis 🧪",
      description: "A deep dive into ongoing COVID-19 outbreaks in the Greater Toronto Area (GTA), Ontario. Using data from a government-licensed dataset called Outbreaks by Public Health Unit (PHU) to explore trends and patterns in these outbreaks. This data analysis integrates the essential aspects of the data science workflow (Filesize: 3.5 MiB, 62699 lines of raw dataset)",
      tags: [
        { name: "python", color: "text-blue-400" },
        { name: "tensorflow", color: "text-orange-400" },
        { name: "scikit-learn", color: "text-green-400" },
        { name: "pandas", color: "text-pink-400" },
        { name: "matplotlib", color: "text-purple-400" },
        { name: "numpy", color: "text-yellow-400" }
      ],
      image: "assets/AurGee_project.jpg",
      source_code_link: "https://github.com/janaPM/AurGee",
      live_project_link: "https://aurgeeherbs.com/"
    },
    {
      name: "Secure Password Generator 🔐",
      description: "Secure Password Generator is a Java-based tool designed to generate and manage secure passwords, prioritizing simplicity, security, and user-friendliness. It employs industry-standard encryption algorithms to create strong, unique passwords resistant to common hacking attempts.",
      tags: [
        { name: "java", color: "text-red-400" },
        { name: "sha-256", color: "text-blue-400" },
        { name: "encryption/decryption", color: "text-green-400" },
        { name: "data-algorithms", color: "text-purple-400" }
      ],
      image: "assets/AurGee_project.jpg",
      source_code_link: "https://github.com/janaPM/AurGee",
      live_project_link: "https://aurgeeherbs.com/"
    }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private portfolioService: PortfolioDataService
  ) {}

  ngOnInit() {
    // Component initialization
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
      
      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.15s ease-out';
      });

      card.addEventListener('mousemove', (e: MouseEvent) => {
        // Check if we're hovering over the live project button
        const target = e.target as HTMLElement;
        if (target.classList.contains('live-project-btn') || target.closest('.live-project-btn')) {
          return; // Don't apply tilt effect when hovering over the button
        }

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * 15;  // Reversed: positive for bottom, negative for top
        const rotateY = (x - centerX) / centerX * -15; // Reversed: negative for right, positive for left
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
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
