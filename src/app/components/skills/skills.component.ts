import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

export interface Technology {
  name: string;
  icon: string;
}

export interface SkillsRows {
  programming: Technology[][];
  itTools: Technology[][];
  contentProduction: Technology[][];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('skillsSection') skillsSection!: ElementRef;

  isInView = false;
  // Technology data matching the reference website categories
  programming: Technology[] = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  ];

  itTools: Technology[] = [
  { name: "AWS", icon: "assets/AWS.svg" },
    // { name: "Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    // { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Windows", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
    // { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
    // { name: "Vim", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg" },
    // { name: "NPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
  ];

  contentProduction: Technology[] = [
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    // { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
    // { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" },
  ];

  // Responsive rows for each category - Honeycomb grid layout
  public rows: {
    programming: Technology[][];
    itTools: Technology[][];
    contentProduction: Technology[][];
  } = {
    programming: [],
    itTools: [],
    contentProduction: []
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.calculateRowsForAllCategories();
      window.addEventListener('resize', () => this.calculateRowsForAllCategories());
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollAnimations();
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', () => this.calculateRowsForAllCategories());
    }
  }

  private calculateRows(width: number, techArray: Technology[]): Technology[][] {
    let dynamicRows: Technology[][] = [];
    let startIndex = 0;
    let rowSize = 6;

    if (width < 500) {
      dynamicRows = [
        techArray.slice(0, 3),
        techArray.slice(3, 5),
        techArray.slice(5, 8),
        techArray.slice(8, 10),
      ];
    } else {
      while (startIndex < techArray.length) {
        const endIndex = startIndex + rowSize;
        dynamicRows.push(techArray.slice(startIndex, endIndex));
        startIndex += rowSize;
        rowSize = rowSize === 6 ? 5 : 6;
      }
    }

    return dynamicRows;
  }

  private calculateRowsForAllCategories() {
    if (isPlatformBrowser(this.platformId)) {
      const width = window.innerWidth;
      this.rows = {
        programming: this.calculateRows(width, this.programming),
        itTools: this.calculateRows(width, this.itTools),
        contentProduction: this.calculateRows(width, this.contentProduction)
      };
    }
  }

  private setupScrollAnimations() {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isInView = true;
          const section = entry.target as HTMLElement;
          
          // Add main animation class
          section.classList.add('animate-in');
          
          // Staggered animations for different elements
          setTimeout(() => {
            const subtitle = section.querySelector('.section-subtitle');
            subtitle?.classList.add('animate');
          }, 100);
          
          setTimeout(() => {
            const title = section.querySelector('.section-title');
            title?.classList.add('animate');
          }, 300);
          
          // Animate categories with stagger
          const categories = section.querySelectorAll('.category-container');
          categories.forEach((category, index) => {
            setTimeout(() => {
              category.classList.add('animate');
              
              // Animate hexagons within each category
              const hexagons = category.querySelectorAll('.hexagon');
              hexagons.forEach((hexagon, hexIndex) => {
                setTimeout(() => {
                  hexagon.classList.add('animate');
                }, hexIndex * 50);
              });
            }, 500 + (index * 200));
          });
          
          // Disconnect observer after animation
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '200px 0px -50px 0px'
    });

    if (this.skillsSection) {
      observer.observe(this.skillsSection.nativeElement);
    }
  }
}
