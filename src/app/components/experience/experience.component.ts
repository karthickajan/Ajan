import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export interface WorkExperience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(20px)' }),
        animate('0.3s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('0.2s ease-in', style({ opacity: 0, transform: 'translateX(-20px)' }))
      ])
    ]),
    trigger('staggerCards', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateX(50px)' }),
          stagger('100ms', [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  @ViewChild('workExperienceSection') workExperienceSection!: ElementRef;

  activeExperience = 0;
  isInView = false;

  // Experience data - you can add your Bajaj Finserv experience here
  experiences: WorkExperience[] = [
    {
      title: "Software Engineer",
      company_name: "Bajaj Finserv",
      icon: "assets/bajaj-logo.webp",
      iconBg: "#ffffff",
      date: "Jan 2024 - Present",
      points: [
        "Developed responsive web applications using Angular framework and TypeScript",
        "Integrated Salesforce (SFDC) solutions for customer relationship management",
        "Collaborated with cross-functional teams to deliver high-quality financial software",
        "Implemented modern web development practices and coding standards",
        "Optimized application performance and user experience across different devices"
      ]
    }
    // Add more experiences here if you have them
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollAnimations();
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        this.setupScrollAnimations();
      }, 100);
    }
  }

  selectExperience(index: number) {
    this.activeExperience = index;
  }

  get currentExperience(): WorkExperience {
    return this.experiences[this.activeExperience];
  }

  private setupScrollAnimations() {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    let scrollTimeout: any;
    let isScrolling = false;

    // Detect when user is scrolling (including programmatic scroll)
    const handleScroll = () => {
      isScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 150); // Wait 150ms after scroll stops
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger animations immediately when element comes into view
          this.isInView = true;
          
          // Add animations with staggered delays for intro and title (with initial delay)
          setTimeout(() => {
            this.animateElement('.introduction-section', 'animate-fadeInUp');
          }, 200); // Reduced delay for faster response
          
          setTimeout(() => {
            this.animateElement('.title-section', 'animate-slideInFromBottom');
          }, 500); // Reduced delay while maintaining stagger
          
          const section = entry.target as HTMLElement;
          
          // Add main animation class
          section.classList.add('animate-in');
          
          // Staggered animations for different elements
          setTimeout(() => {
            const layout = section.querySelector('.experience-layout');
            layout?.classList.add('animate');
          }, 700);
          
          // Animate experience cards with stagger
          setTimeout(() => {
            const cards = section.querySelectorAll('.experience-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate');
              }, index * 100);
            });
          }, 900);
          
          // Animate details panel
          setTimeout(() => {
            const details = section.querySelector('.experience-details');
            details?.classList.add('animate');
          }, 1100);
          
          // Disconnect observer after animation
          observer.unobserve(entry.target);
          window.removeEventListener('scroll', handleScroll);
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% is visible
      rootMargin: '100px 0px -20px 0px' // Trigger 100px before element enters view
    });

    if (this.workExperienceSection) {
      observer.observe(this.workExperienceSection.nativeElement);
    }
  }

  private animateElement(selector: string, animationClass: string) {
    const element = this.workExperienceSection.nativeElement.querySelector(selector);
    if (element) {
      element.classList.add(animationClass);
    }
  }
}
