import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <!-- Left side visual element -->
          <div class="hero-visual">
            <div class="hero-dot"></div>
            <div class="hero-line"></div>
          </div>
          
          <!-- Text content -->
          <div class="text-content">
            <h1 class="main-title">
              Hi, I'm <span class="name-highlight">Karthick</span> 
              <span class="wave-emoji">👋</span>
            </h1>
            
            <p class="subtitle">
              I'm a <span class="typing-text">{{ currentRole }}<span class="cursor">|</span></span>
            </p>
            
            <p class="welcome-message">
              Welcome to my portfolio, please visit on desktop for an interactive experience!
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  currentRole = '';
  private roles = [
    'Software Engineer',
    'Full Stack Developer',
    'Problem Solver',
    'Salesforce Developer'
  ];
  private currentIndex = 0;
  private typingTimeout?: any;
  private deletingTimeout?: any;
  private isDeleting = false;
  private currentText = '';
  private typingSpeed = 80; // Reduced for better performance
  private deletingSpeed = 40; // Reduced for better performance
  private pauseTime = 1500; // Reduced pause time

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Only start animation in browser environment
    if (isPlatformBrowser(this.platformId)) {
      this.startTypingAnimation();
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.typingTimeout) {
        clearTimeout(this.typingTimeout);
      }
      if (this.deletingTimeout) {
        clearTimeout(this.deletingTimeout);
      }
    }
  }

  private startTypingAnimation() {
    this.typeText();
  }

  private typeText() {
    const currentWord = this.roles[this.currentIndex];
    
    if (this.isDeleting) {
      // Deleting characters
      this.currentText = currentWord.substring(0, this.currentText.length - 1);
      this.currentRole = this.currentText;
      
      if (this.currentText === '') {
        this.isDeleting = false;
        this.currentIndex = (this.currentIndex + 1) % this.roles.length;
        this.typingTimeout = setTimeout(() => this.typeText(), 50); // Shorter delay between words
      } else {
        this.deletingTimeout = setTimeout(() => this.typeText(), this.deletingSpeed);
      }
    } else {
      // Typing characters
      this.currentText = currentWord.substring(0, this.currentText.length + 1);
      this.currentRole = this.currentText;
      
      if (this.currentText === currentWord) {
        // Word is complete, pause then start deleting
        this.typingTimeout = setTimeout(() => {
          this.isDeleting = true;
          this.typeText();
        }, this.pauseTime);
      } else {
        this.typingTimeout = setTimeout(() => this.typeText(), this.typingSpeed);
      }
    }
  }
}
