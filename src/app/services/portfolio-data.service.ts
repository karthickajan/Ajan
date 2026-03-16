import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  description: string[];
  technologies: string[];
  location: string;
  companyLogo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'fullstack' | 'other';
  featured: boolean;
  startDate: Date;
  endDate?: Date;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  bio: string;
  avatarUrl?: string;
  resumeUrl?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  techStack: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
}

export interface Education {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  private personalInfo: PersonalInfo = {
    name: 'John Doe',
    title: 'Full Stack Developer',
    email: 'john.doe@example.com',
    location: 'San Francisco, CA',
    bio: 'Passionate software engineer with 5+ years of experience building scalable web applications and innovative solutions. Specialized in modern JavaScript frameworks, cloud architecture, and creating exceptional user experiences.',
    resumeUrl: '/assets/resume.pdf',
    socialLinks: {
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      website: 'https://johndoe.dev'
    },
    techStack: {
      frontend: ['Angular', 'React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Sass'],
      backend: ['Node.js', 'Python', 'Java', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs'],
      tools: ['Docker', 'AWS', 'Git', 'Webpack', 'Jest', 'Figma', 'VS Code']
    }
  };

  private skills: Skill[] = [
    // Frontend
    { name: 'Angular', level: 95, category: 'frontend', icon: 'angular' },
    { name: 'React', level: 90, category: 'frontend', icon: 'react' },
    { name: 'Vue.js', level: 85, category: 'frontend', icon: 'vuejs' },
    { name: 'TypeScript', level: 95, category: 'frontend', icon: 'typescript' },
    { name: 'JavaScript', level: 98, category: 'frontend', icon: 'javascript' },
    { name: 'HTML/CSS', level: 95, category: 'frontend', icon: 'html5' },
    { name: 'Sass/SCSS', level: 90, category: 'frontend', icon: 'sass' },
    
    // Backend
    { name: 'Node.js', level: 90, category: 'backend', icon: 'nodejs' },
    { name: 'Python', level: 85, category: 'backend', icon: 'python' },
    { name: 'Java', level: 80, category: 'backend', icon: 'java' },
    { name: 'Express.js', level: 88, category: 'backend', icon: 'express' },
    { name: 'MongoDB', level: 85, category: 'backend', icon: 'mongodb' },
    { name: 'PostgreSQL', level: 82, category: 'backend', icon: 'postgresql' },
    
    // Tools
    { name: 'Docker', level: 85, category: 'tools', icon: 'docker' },
    { name: 'AWS', level: 80, category: 'tools', icon: 'aws' },
    { name: 'Git', level: 95, category: 'tools', icon: 'git' },
    { name: 'Webpack', level: 75, category: 'tools', icon: 'webpack' },
    { name: 'Jest', level: 85, category: 'tools', icon: 'jest' }
  ];

  private experiences: Experience[] = [
    {
      id: '1',
      company: 'Tech Innovators Inc.',
      position: 'Senior Full Stack Developer',
      startDate: new Date('2022-01-01'),
      description: [
        'Led development of microservices architecture serving 1M+ users',
        'Mentored junior developers and established coding standards',
        'Implemented CI/CD pipelines reducing deployment time by 70%',
        'Collaborated with product team to deliver feature specifications'
      ],
      technologies: ['Angular', 'Node.js', 'TypeScript', 'Docker', 'AWS', 'MongoDB'],
      location: 'San Francisco, CA'
    },
    {
      id: '2',
      company: 'Digital Solutions Ltd.',
      position: 'Frontend Developer',
      startDate: new Date('2020-06-01'),
      endDate: new Date('2021-12-31'),
      description: [
        'Developed responsive web applications using React and Redux',
        'Optimized application performance resulting in 40% faster load times',
        'Integrated RESTful APIs and implemented real-time features',
        'Collaborated in agile development environment'
      ],
      technologies: ['React', 'Redux', 'JavaScript', 'SCSS', 'REST APIs'],
      location: 'Remote'
    },
    {
      id: '3',
      company: 'StartupXYZ',
      position: 'Junior Developer',
      startDate: new Date('2019-01-01'),
      endDate: new Date('2020-05-31'),
      description: [
        'Built full-stack web applications from concept to deployment',
        'Participated in code reviews and technical discussions',
        'Learned modern development practices and frameworks',
        'Contributed to open-source projects'
      ],
      technologies: ['Vue.js', 'Express.js', 'MySQL', 'Git'],
      location: 'Austin, TX'
    }
  ];

  private projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management',
      longDescription: 'A comprehensive e-commerce platform built with Angular and Node.js, featuring real-time inventory tracking, payment integration, and admin dashboard.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe API', 'Socket.io'],
      imageUrl: '/assets/projects/ecommerce.jpg',
      demoUrl: 'https://demo-ecommerce.johndoe.dev',
      githubUrl: 'https://github.com/johndoe/ecommerce-platform',
      category: 'fullstack',
      featured: true,
      startDate: new Date('2023-01-01'),
      endDate: new Date('2023-06-01')
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      longDescription: 'A collaborative task management application similar to Trello, built with React and featuring drag-and-drop functionality, real-time collaboration, and team management.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets'],
      imageUrl: '/assets/projects/taskmanager.jpg',
      demoUrl: 'https://tasks.johndoe.dev',
      githubUrl: 'https://github.com/johndoe/task-manager',
      category: 'web',
      featured: true,
      startDate: new Date('2022-08-01'),
      endDate: new Date('2022-12-01')
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with data visualization',
      longDescription: 'A responsive weather dashboard that displays current conditions and forecasts with beautiful data visualizations and location-based services.',
      technologies: ['Vue.js', 'Chart.js', 'Weather API', 'Geolocation'],
      imageUrl: '/assets/projects/weather.jpg',
      demoUrl: 'https://weather.johndoe.dev',
      githubUrl: 'https://github.com/johndoe/weather-dashboard',
      category: 'web',
      featured: false,
      startDate: new Date('2022-03-01'),
      endDate: new Date('2022-04-01')
    }
  ];

  private education: Education[] = [
    {
      title: "Electrical & Electronics Engineering B.Tech",
      company_name: "Vellore Institute of Technology, Vellore",
      icon: "assets/vit-logo.webp",
      iconBg: "#fff",
      date: "2020 - 2024",
      points: [        
        "Published Research Paper on 'Comprehensive Study of Weather Prediction Using IoT and Machine Learning' in IEEE Xplore",
        "CGPA: 8.28"
      ],
    },
    {
      title: "High School",
      company_name: "MIRS, Chennai",
      icon: "assets/mirs-logo.webp",
      iconBg: "#fff",
      date: "2018 - 2020",
      points: [        
        "Computer Science",
        "12th Grade: 81%"
      ],
    },
  ];

  getPersonalInfo(): Observable<PersonalInfo> {
    return of(this.personalInfo);
  }

  getSkills(): Observable<Skill[]> {
    return of(this.skills);
  }

  getSkillsByCategory(category: string): Observable<Skill[]> {
    return of(this.skills.filter(skill => skill.category === category));
  }

  getExperiences(): Observable<Experience[]> {
    return of(this.experiences.sort((a, b) => b.startDate.getTime() - a.startDate.getTime()));
  }

  getProjects(): Observable<Project[]> {
    return of(this.projects.sort((a, b) => b.startDate.getTime() - a.startDate.getTime()));
  }

  getFeaturedProjects(): Observable<Project[]> {
    return of(this.projects.filter(project => project.featured));
  }

  getEducation(): Observable<Education[]> {
    return of(this.education);
  }
}
