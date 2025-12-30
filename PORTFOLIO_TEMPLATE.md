# 📋 Portfolio Customization Guide

This guide will help you customize this portfolio template in **5 minutes**.

---

## 🚀 Quick Overview

| What to Change | File Location |
|----------------|---------------|
| Personal info, education, experience | `src/app/services/portfolio-data.service.ts` |
| Profile picture | `src/assets/profilePicture.jpeg` |
| Project images | `src/assets/` |
| Company/school logos | `src/assets/` |
| Contact form credentials | `src/app/components/contact/contact.component.ts` |
| Site title & meta | `src/index.html` |
| Favicon | `src/favicon.ico` |
| Deployment URL | `angular.json` → `baseHref` |

---

## Step 1: Update Personal Information

Open `src/app/services/portfolio-data.service.ts`:

```typescript
// Find and update these sections:

// ABOUT SECTION
about = {
  name: 'YOUR NAME',
  title: 'YOUR TITLE (e.g., Full Stack Developer)',
  description: 'Your professional summary...',
  image: 'assets/profilePicture.jpeg'
};

// SOCIAL LINKS
socials = {
  github: 'https://github.com/YOUR_USERNAME',
  linkedin: 'https://linkedin.com/in/YOUR_USERNAME',
  email: 'your.email@example.com'
};
```

---

## Step 2: Update Experience

In the same file, find the `experiences` array:

```typescript
experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    location: 'City, Country',
    period: 'Jan 2023 - Present',
    description: 'What you did there...',
    logo: 'assets/company-logo.png',
    skills: ['Angular', 'TypeScript', 'Node.js']
  },
  // Add more experiences...
];
```

---

## Step 3: Update Education

```typescript
education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University Name',
    location: 'City, Country',
    period: '2019 - 2023',
    description: 'Relevant coursework, achievements...',
    logo: 'assets/university-logo.png'
  },
  // Add more education...
];
```

---

## Step 4: Update Projects

```typescript
projects = [
  {
    title: 'Project Name',
    description: 'What the project does and why it matters...',
    image: 'assets/project-screenshot.jpg',
    tags: ['Angular', 'Firebase', 'Tailwind'],
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/you/project'
  },
  // Add 2-4 of your best projects
];
```

---

## Step 5: Update Skills

```typescript
skills = {
  programming: [
    { name: 'JavaScript', icon: 'assets/icons/javascript.svg' },
    { name: 'TypeScript', icon: 'assets/icons/typescript.svg' },
    // Add your skills...
  ],
  frameworks: [
    { name: 'Angular', icon: 'assets/icons/angular.svg' },
    { name: 'React', icon: 'assets/icons/react.svg' },
    // Add your frameworks...
  ],
  tools: [
    { name: 'Git', icon: 'assets/icons/git.svg' },
    { name: 'Docker', icon: 'assets/icons/docker.svg' },
    // Add your tools...
  ]
};
```

---

## Step 6: Setup Contact Form (Optional)

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your credentials

Open `src/app/components/contact/contact.component.ts`:

```typescript
// Update these values:
private serviceId = 'YOUR_SERVICE_ID';
private templateId = 'YOUR_TEMPLATE_ID';
private publicKey = 'YOUR_PUBLIC_KEY';
```

---

## Step 7: Replace Assets

### Profile Picture
- Replace `src/assets/profilePicture.jpeg`
- Recommended: Square image, 400x400px minimum

### Project Screenshots
- Add to `src/assets/`
- Recommended: 16:9 ratio, 800x450px

### Company/School Logos
- Add to `src/assets/`
- Recommended: PNG with transparent background, 100x100px

---

## Step 8: Update Site Metadata

Open `src/index.html`:

```html
<title>Your Name | Developer Portfolio</title>
<meta name="description" content="Your professional description">
<meta name="author" content="Your Name">
```

---

## Step 9: Deploy to GitHub Pages

1. Update base href in `angular.json`:
```json
"baseHref": "/YOUR_REPO_NAME/"
```

2. Build the project:
```bash
ng build
```

3. Copy build files to docs folder:
```bash
cp -r dist/portfolio-app/browser/* docs/
```

4. Commit and push:
```bash
git add .
git commit -m "Deploy portfolio"
git push
```

5. Enable GitHub Pages:
   - Go to your repo → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` → `/docs`
   - Save

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## 🎨 Optional Customizations

### Change Colors
Edit `src/styles.scss`:
```scss
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --background-color: #your-color;
}
```

### Change Fonts
Update font imports in `src/styles.scss` and change font-family variables.

### Disable 3D Elements
If you want a simpler version, you can hide the 3D components in their respective parent components.

---

## ❓ Need Help?

- Open an [issue](https://github.com/karthickajan/Ajan/issues)
- Check existing issues for common problems
- Make sure all dependencies are installed (`npm install`)

---

## 📄 License

MIT – Feel free to use this for your own portfolio!

**If this template helped you, consider giving the repo a ⭐**
