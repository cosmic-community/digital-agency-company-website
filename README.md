# Digital Agency Website

![Digital Agency Website](https://imgix.cosmicjs.com/10fd64d0-7028-11f0-a051-23c10f41277a-photo-1522071820081-009f0129c71c-1754197783246.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive digital agency website built with Next.js and powered by Cosmic CMS. Features services showcase, team profiles, testimonials, case studies, and integrated contact form with email functionality.

## ✨ Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **Dynamic Content** - All content managed through Cosmic CMS
- **Service Showcase** - Detailed service pages with pricing and features
- **Team Profiles** - Professional team member presentations
- **Client Testimonials** - Social proof with ratings and photos
- **Case Studies** - Portfolio showcase with detailed results
- **Contact Form** - Integrated email functionality with Resend
- **SEO Optimized** - Meta tags and structured data
- **Fast Performance** - Optimized images and caching

## 🚀 Clone this Bucket

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=688eede463f04a241b19c2d1&clone_repository=688ef0b263f04a241b19c2f8)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a digital agency company website with services, team members, testimonials, and case studies. Add contact page and form that sends an email to tony@cosmicjs.com from tony@cosmicjs.com using resend"

### Code Generation Prompt

> Build a Next.js website for a digital agency company website with services, team members, testimonials, and case studies. Add contact page and form that sends an email to tony@cosmicjs.com from tony@cosmicjs.com using resend

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless content management
- **Resend** - Email delivery service
- **React Hook Form** - Form handling and validation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket
- Resend account and API key

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd digital-agency-website
```

2. Install dependencies
```bash
bun install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Add your environment variables:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
RESEND_API_KEY=your-resend-api-key
```

5. Run the development server
```bash
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) to view the website

## 📚 Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

export async function getServices() {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
    return response.objects
  } catch (error) {
    if (error.status === 404) return []
    throw error
  }
}
```

### Fetching Team Members
```typescript
export async function getTeamMembers() {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
    return response.objects
  } catch (error) {
    if (error.status === 404) return []
    throw error
  }
}
```

## 🎨 Cosmic CMS Integration

This application integrates with the following Cosmic object types:

- **Services** - Service offerings with descriptions, pricing, and features
- **Team Members** - Staff profiles with photos, bios, and contact info
- **Testimonials** - Client reviews with ratings and photos
- **Case Studies** - Project showcases with challenges, solutions, and results
- **Pages** - Static content pages (About, Contact)
- **Contact Forms** - Form submissions for lead capture

## 🚀 Deployment Options

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Deploy to Netlify
1. Build the application: `bun run build`
2. Deploy the `out` folder to Netlify
3. Set up environment variables in Netlify dashboard

### Environment Variables
Make sure to set these in your deployment platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`
- `RESEND_API_KEY`

<!-- README_END -->