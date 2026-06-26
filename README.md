<p align="center" width="100%">
    <img height="100" src="https://github.com/said7388/developer-portfolio/assets/77630868/c0064908-cd5f-4751-a77c-eba90a62b55c">
</p>

<h1 align="center">Bikash Kadayat — Developer Portfolio</h1>

<p align="center">
  <strong>A modern, responsive, and customizable portfolio template for developers and freelancers</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js" alt="Next.js 16.0.1">
  <img src="https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react" alt="React 19.2.0">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS 4">
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License">
</p>

---

## Overview

A professional portfolio template built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. Features a modern App Router architecture, server components, and data-driven configuration for easy customization.

---

## Features :sparkles:

- ✅ **Cutting-Edge Tech Stack**: Built with Next.js 16, React 19, and Tailwind CSS 4
- ✅ **Fully Responsive**: Optimized for all devices and screen sizes
- ✅ **SEO Optimized**: Better visibility on search engines with Next.js metadata API
- ✅ **Blazing Fast Performance**: Leverages Next.js 16 server components and streaming
- ✅ **App Router**: Uses the modern Next.js App Router architecture
- ✅ **Easy Customization**: Simple data-driven configuration
- ✅ **Contact Form**: Integrated email notifications via Nodemailer + Gmail SMTP
- ✅ **Blog Integration**: Automatically fetch posts from dev.to
- ✅ **Dark Theme**: Beautiful gradient design with Lottie animations
- ✅ **Docker Support**: Easy containerized deployment
- ✅ **Google Analytics**: Track visitor insights with GTM support

---

## Sections :bookmark:

| Section           | Description                                         |
| ----------------- | --------------------------------------------------- |
| 🦸 **Hero**       | Eye-catching introduction with animated elements    |
| 👤 **About Me**   | Personal information and professional summary       |
| 💼 **Experience** | Work history and professional accomplishments       |
| 🛠️ **Skills**     | Technical skills with animated marquee display      |
| 🚀 **Projects**   | Showcase your best work with descriptions and links |
| 🎓 **Education**  | Academic background and certifications              |
| 📝 **Blog**       | Latest articles from dev.to (auto-fetched)          |
| 📧 **Contact**    | Get in touch form with email integration            |

---

## Tech Stack :computer:

| Technology       | Version | Purpose                                   |
| ---------------- | ------- | ----------------------------------------- |
| **Next.js**      | 16.0.1  | React framework with App Router           |
| **React**        | 19.2.0  | UI component library with latest features |
| **Tailwind CSS** | 4.x     | Utility-first CSS framework               |
| **SASS**         | Latest  | CSS preprocessor                          |
| **Lottie**       | Latest  | Lightweight animations                    |
| **Nodemailer**   | Latest  | Email sending functionality               |
| **Axios**        | Latest  | HTTP client for API requests              |
| **Docker**       | -       | Containerization platform                 |

---

## Installation :arrow_down:

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

| Tool                   | Minimum Version | Download Link                               |
| ---------------------- | --------------- | ------------------------------------------- |
| **Node.js**            | v18.17.0+       | [Download](https://nodejs.org/en/download/) |
| **Git**                | Latest          | [Download](https://git-scm.com/downloads)   |
| **pnpm** (recommended) | Latest          | [Install](https://pnpm.io/installation)     |

> **Note**: Next.js 16 requires Node.js 18.17 or later. Node.js 20+ is recommended for optimal performance.

#### Verify Installation

```bash
node --version
git --version
pnpm --version  # or npm --version
```

---

## Getting Started :dart:

### 1. Fork and Clone the Repository

```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/developer-portfolio.git
cd developer-portfolio
```

### 2. Install Dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

```bash
cp .env.example .env
```

Edit the `.env` file with your values.

### 4. Run the Development Server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### 🐳 Docker Deployment (Alternative)

#### Option 1: Using Docker Compose (Recommended)

```bash
docker-compose up --build
docker-compose up -d --build   # detached mode
docker-compose down            # stop
```

#### Option 2: Using Docker Directly

**For Development:**
```bash
docker build -t developer-portfolio:dev -f Dockerfile.dev .
docker run -p 3000:3000 --name portfolio-dev developer-portfolio:dev
```

**For Production:**
```bash
docker build -t developer-portfolio:prod -f Dockerfile.prod .
docker run -p 3000:3000 --name portfolio-prod developer-portfolio:prod
```

---

## Usage :joystick:

### Environment Variables Configuration

Create a `.env` file in the root directory with the following variables:

```env
# Google Tag Manager (Optional - for analytics)
NEXT_PUBLIC_GTM=GTM-XXXXXXX

# Your deployed app URL
NEXT_PUBLIC_APP_URL=https://your-domain.com

# Gmail Configuration (for contact form emails)
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

#### Variable Descriptions:

| Variable              | Required | Description                                  |
| --------------------- | -------- | -------------------------------------------- |
| `NEXT_PUBLIC_GTM`     | No       | Google Tag Manager ID for analytics tracking |
| `NEXT_PUBLIC_APP_URL` | Yes      | Your portfolio's public URL                  |
| `EMAIL_USER`          | Yes      | Your Gmail address used for sending emails   |
| `EMAIL_PASS`          | Yes      | Gmail app password for email authentication  |

---

### Customize Your Portfolio Data

All portfolio content is managed through data files in the `utils/data/` folder.

#### 📝 Personal Information (`personal-data.js`)

```javascript
export const personalData = {
  name: "YOUR NAME",
  profile: "/profile.png",
  designation: "Software Developer",
  description: "Your bio and introduction...",
  email: "your.email@example.com",
  phone: "+1234567890",
  address: "City, Country",
  github: "https://github.com/yourusername",
  facebook: "https://www.facebook.com/yourprofile",
  linkedIn: "https://www.linkedin.com/in/yourprofile",
  twitter: "https://twitter.com/yourusername",
  stackOverflow: "https://stackoverflow.com/users/your-id",
  leetcode: "https://leetcode.com/yourusername/",
  devUsername: "yourusername", // dev.to username for blog integration
  resume: "https://link-to-your-resume.pdf",
};
```

#### 💼 Additional Data Files

| File               | Purpose                                        |
| ------------------ | ---------------------------------------------- |
| `experience.js`    | Your work experience and job history           |
| `projects-data.js` | Portfolio projects with descriptions and links |
| `skills.js`        | Technical skills and competencies              |
| `educations.js`    | Academic background and certifications         |
| `contactsData.js`  | Contact form configuration                     |

#### 🎨 Adding Your Profile Image

Place your profile picture in the `public/` directory and update the `profile` field in `personal-data.js`.

---

## Deployment :rocket:

### 🚀 Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/said7388/developer-portfolio)

**Manual Deployment:**

1. Sign up at [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Add environment variables in **Settings** → **Environment Variables**
4. Deploy

**Features:**
- Native Next.js 16 support
- Automatic deployments on push
- Preview deployments for PRs
- Global CDN and free SSL

---

### 🌐 Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/said7388/developer-portfolio)

**Manual Deployment:**

1. Sign up at [Netlify](https://www.netlify.com/)
2. Import your GitHub repository
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables in **Site Settings** → **Environment**

---

### 🐳 Deploy with Docker

```bash
docker build -t developer-portfolio:prod -f Dockerfile.prod .
docker run -d -p 80:3000 --name portfolio developer-portfolio:prod
docker-compose -f docker-compose.prod.yml up -d
```

---

## Tutorials :wrench:

### 📧 Gmail App Password Setup

1. Go to [https://myaccount.google.com/](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification** (enable if not already)
3. Go to **Security** → **App Passwords**
4. Select app: **Mail**, device: **Other (Custom name)**
5. Generate and copy the 16-character password
6. Add to `.env` file:

```env
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

---

### 📝 Fetching Blog from dev.to

1. Create a [dev.to](https://dev.to/) account
2. Open `utils/data/personal-data.js`
3. Set your dev.to username:

```javascript
export const personalData = {
  devUsername: "bikash_kadayat_7",
};
```

The portfolio automatically fetches and displays your latest public articles. No API key required.

---

## Troubleshooting :wrench:

<details>
<summary><strong>❌ "next is not recognized as an internal or external command"</strong></summary>

```bash
npm install -g next
# or use npx
npx next dev
# or use package manager scripts
npm run dev
```
</details>

<details>
<summary><strong>❌ Port 3000 is already in use</strong></summary>

```bash
# macOS/Linux:
lsof -ti:3000 | xargs kill -9
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
# Or use a different port:
PORT=3001 npm run dev
```
</details>

<details>
<summary><strong>❌ Module not found or dependency errors</strong></summary>

```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```
</details>

<details>
<summary><strong>❌ Environment variables not working</strong></summary>

- Ensure `.env` file is in the root directory
- Restart the development server after changing `.env`
- Server-side variables should NOT start with `NEXT_PUBLIC_`
</details>

<details>
<summary><strong>❌ Images not loading</strong></summary>

- Verify images are in the `public/` directory
- Use paths starting with `/` (e.g., `/profile.png`)
- Check image file extensions match the code
</details>

<details>
<summary><strong>❌ Contact form not sending emails</strong></summary>

- Verify Gmail App Password is correct (16 characters)
- Check that 2-Step Verification is enabled on your Google account
- Ensure `EMAIL_USER` matches the Gmail account
- Check browser console for error messages
</details>

---

## Contributing :handshake:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add some AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## License :page_with_curl:

This project is licensed under the **MIT License**.

---

![GitHub stars](https://img.shields.io/github/stars/said7388/developer-portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/said7388/developer-portfolio?style=social)
# Personal-Portfolio-
