# Cosmetic Chemist Website

Professional website for Tricelle Gray - Cosmetic Chemist and Software Engineer.

**Live Site**: [Your domain here]

---

## 🎨 About This Project

A modern, elegant website showcasing cosmetic chemistry consultation services, custom formulation development, and formula auditing. Built with Next.js 14, TypeScript, and Tailwind CSS.

### Key Features
- ✨ **Minimal luxury design** - Professional, sophisticated aesthetic
- 📱 **Fully responsive** - Beautiful on all devices
- 📧 **Contact forms** - Inquiry and detailed intake forms
- ⚡ **Fast performance** - Optimized with Next.js
- 🔒 **Secure** - Environment-based API keys, input validation
- 📊 **SEO optimized** - Meta tags, semantic HTML, fast load times

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Code editor (VS Code recommended)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/cosmetic-chemist-website.git
   cd cosmetic-chemist-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```

   Then edit `.env.local` with your actual values:
   ```env
   RESEND_API_KEY=re_your_actual_api_key
   RESEND_FROM_EMAIL=hello@yourdomain.com
   CONTACT_EMAIL=your-email@example.com
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**: http://localhost:3000

---

## 📁 Project Structure

```
cosmetic-chemist-website/
├── public/                    # Static assets
│   ├── logo.svg              # Brand logo
│   ├── apple-touch-icon.png  # Favicon
│   └── images/               # Images (create this for photos)
├── src/
│   ├── app/                  # Next.js app router
│   │   ├── page.tsx          # Homepage
│   │   ├── layout.tsx        # Root layout
│   │   ├── book/             # Booking page
│   │   ├── intake/           # Intake form page
│   │   ├── faq/              # FAQ page
│   │   └── api/              # API routes
│   │       ├── inquiry/      # Inquiry form handler
│   │       └── intake/       # Intake form handler
│   ├── components/
│   │   ├── sections/         # Page sections
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/               # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       └── ...
│   └── lib/
│       ├── config.ts         # Site configuration
│       └── utils/            # Utility functions
├── .env.local                # Environment variables (not committed)
├── .env.example              # Environment template
├── DEPLOYMENT-GUIDE.md       # How to deploy
├── IMAGE-GUIDE.md            # How to add photos
├── PRE-LAUNCH-CHECKLIST.md   # Launch checklist
└── README.md                 # This file
```

---

## 🛠️ Development

### Available Scripts

- **`npm run dev`** - Start development server (http://localhost:3000)
- **`npm run build`** - Build for production
- **`npm start`** - Start production server
- **`npm run lint`** - Run ESLint

### Making Changes

1. **Edit components** in `src/components/`
2. **Update pages** in `src/app/`
3. **Modify styles** in `src/app/globals.css` or component files
4. **Configure site** in `src/lib/config.ts`

### Adding Professional Photos

See [IMAGE-GUIDE.md](IMAGE-GUIDE.md) for detailed instructions on adding your professional photos when ready.

---

## 📧 Email Configuration

This site uses [Resend](https://resend.com) for email delivery.

### Setup Steps:

1. **Sign up** at [resend.com](https://resend.com)
2. **Get API key** from dashboard
3. **Verify your domain** (or use test domain)
4. **Add to `.env.local`**:
   ```env
   RESEND_API_KEY=re_your_key_here
   RESEND_FROM_EMAIL=hello@yourdomain.com
   CONTACT_EMAIL=your-email@example.com
   ```

### Testing Emails Locally:

```bash
# Start dev server
npm run dev

# Visit http://localhost:3000
# Fill out inquiry form
# Check your CONTACT_EMAIL inbox
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

See [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md) for complete deployment instructions.

**Quick Deploy**:
1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

**One-command deploy**:
```bash
npm i -g vercel
vercel
```

### Environment Variables for Production:
```
RESEND_API_KEY=re_your_production_key
RESEND_FROM_EMAIL=hello@yourdomain.com
CONTACT_EMAIL=your-email@example.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## ✅ Pre-Launch

Before going live, review [PRE-LAUNCH-CHECKLIST.md](PRE-LAUNCH-CHECKLIST.md) to ensure:
- ✅ Environment variables configured
- ✅ Domain connected
- ✅ Forms tested end-to-end
- ✅ Responsive design verified
- ✅ SEO metadata added
- ✅ Performance optimized

---

## 🎨 Design System

### Colors
- **Charcoal**: `#2D2D2D` - Primary text, headers
- **Rose**: `#9D7B7B` - Accent, CTAs, highlights
- **Cream**: `#FAF8F6` - Background
- **White**: `#FFFFFF` - Cards, sections

### Typography
- **Headings**: Serif font (elegant, traditional)
- **Body**: Sans-serif (clean, readable)
- **Tracking**: Wide for luxury feel

### Spacing
- Consistent padding and margins via Tailwind
- Generous whitespace for premium look

---

## 📱 Pages

- **/** - Homepage (Hero, Services, About, Inquiry Form)
- **/book** - Schedule consultation (links to Calendly)
- **/intake** - Detailed project intake form
- **/faq** - Frequently asked questions

---

## 🔧 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Email**: [Resend](https://resend.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting**: [Vercel](https://vercel.com/) (recommended)

---

## 📄 Documentation

- [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md) - Step-by-step deployment
- [IMAGE-GUIDE.md](IMAGE-GUIDE.md) - Adding professional photos
- [PRE-LAUNCH-CHECKLIST.md](PRE-LAUNCH-CHECKLIST.md) - Launch preparation
- [.env.example](.env.example) - Environment variable template

---

## 🔒 Security

- ✅ Environment variables for sensitive data
- ✅ Input validation on all forms
- ✅ Rate limiting on API routes
- ✅ HTTPS enforced (via Vercel)
- ✅ No sensitive data in client-side code

---

## 🐛 Troubleshooting

### Build Fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Emails Not Sending
- Verify `RESEND_API_KEY` is correct
- Check Resend dashboard for logs
- Ensure domain is verified
- Check spam folder

### Styles Not Updating
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

---

## 📞 Support

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Support**: https://vercel.com/support
- **Resend Docs**: https://resend.com/docs
- **Tailwind Docs**: https://tailwindcss.com/docs

---

## 🎯 Future Enhancements

Potential features to add:
- [ ] Blog section for formulation insights
- [ ] Portfolio/case studies page
- [ ] Testimonials section
- [ ] Live chat integration
- [ ] Newsletter signup
- [ ] Product formulation calculator
- [ ] Client portal/dashboard

---

## 📝 License

Private project - All rights reserved.

---

## 👤 Contact

**Tricelle Gray**
- Website: [Your domain]
- Email: [Your email]
- LinkedIn: [Your LinkedIn]
- Formuley: [formuley.io](https://formuley.io)

---

## 🎉 Ready to Launch?

Your website is professional, functional, and ready to go live!

1. Review [PRE-LAUNCH-CHECKLIST.md](PRE-LAUNCH-CHECKLIST.md)
2. Follow [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)
3. Deploy and start receiving clients!

**Built with precision. Launched with confidence.** 🚀
