# Digital Agency Website

![App Preview](https://imgix.cosmicjs.com/2f77dbf0-6f26-11f0-a051-23c10f41277a-photo-1556742049-0cfed4f6a45d-1754087023359.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A professional digital agency website built with Next.js 15 and Tailwind CSS, showcasing your services, team, case studies, and testimonials. Features a modern, responsive design with dynamic content management through Cosmic.

## Features

- 🏢 **Service Portfolio** - Showcase digital services with detailed descriptions and pricing
- 👥 **Team Showcase** - Professional team member profiles with expertise and social links
- 📊 **Case Studies** - Detailed project presentations with results and gallery images
- 💬 **Client Testimonials** - Social proof through authentic client reviews and ratings
- 📱 **Responsive Design** - Mobile-first approach for all device sizes
- ⚡ **Performance Optimized** - Fast loading with Next.js 15 and imgix image optimization
- 🎨 **Modern UI/UX** - Clean, professional design that builds trust and converts visitors

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=688d2339493dfbee52e8bb74&clone_repository=688d451229bb9fb10cc742c1)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a digital agency company website with services, team members, testimonials, and case studies"

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Content Management**: Cosmic CMS
- **Image Optimization**: imgix
- **TypeScript**: Full type safety
- **Deployment**: Vercel/Netlify ready

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the digital agency content model

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Cosmic credentials:
   ```
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Case Studies with Related Services
```typescript
const { objects: caseStudies } = await cosmic.objects
  .find({ type: 'case-studies' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Includes connected services
```

### Getting Team Members
```typescript
const { objects: teamMembers } = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
```

## Cosmic CMS Integration

This website leverages your existing Cosmic content structure:

- **Services** - Digital agency services with descriptions, pricing, and categories
- **Team Members** - Staff profiles with photos, bios, and specialties
- **Case Studies** - Project showcases with challenges, solutions, and results
- **Testimonials** - Client reviews with ratings and company information

All content is dynamically loaded from Cosmic, allowing you to manage your website content through the Cosmic dashboard.

## Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard

Make sure to add your Cosmic environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`) in your deployment platform's environment variables section.
<!-- README_END -->