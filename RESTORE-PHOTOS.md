# Restore Professional Photos - Complete Guide

When your professional photos arrive, use this guide to restore the original two-column design with photos.

---

## 📸 Quick Overview

**Current Design**: Center-aligned, text-only layout (clean and professional)
**Photo Design**: Two-column layout with photos alongside text (more personal)

**Time to Restore**: 5-10 minutes

---

## 🎯 What Changes

### Hero Section
- **Before**: Centered text layout
- **After**: Two-column grid with photo on right side

### About Section
- **Before**: Centered header, left-aligned text
- **After**: Two-column grid with photo on left, bio on right

---

## 📁 Step 1: Add Your Photos

1. **Create images directory**:
   ```bash
   mkdir -p public/images
   ```

2. **Add your photos**:
   - `public/images/hero-photo.jpg` - Professional headshot/portrait
   - `public/images/about-photo.jpg` - Professional portrait/working photo

3. **Photo specifications**:
   - Aspect ratio: 3:4 (portrait)
   - Recommended size: 800px × 1067px minimum
   - Format: JPG or WebP
   - File size: Under 500KB (optimize with TinyPNG or Squoosh)

---

## 🔧 Step 2: Restore Hero Section

**File**: [src/components/sections/Hero.tsx](src/components/sections/Hero.tsx)

Replace the ENTIRE contents with:

```tsx
"use client";

import { siteConfig } from "@/lib/config";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-background pt-20">
      <div className="container-wide px-6 md:px-8">
        <div className="grid md:grid-cols-2 items-center gap-12 md:gap-16">
          {/* Left — text */}
          <div>
            <p
              className="text-body-xs uppercase tracking-luxury text-rose mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {siteConfig.tagline}
            </p>

            <h1
              className="font-serif text-display-md md:text-display-lg lg:text-display-hero text-charcoal mb-6 opacity-0 animate-slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              Formulation, Perfected.
            </h1>

            <p
              className="text-body-lg text-charcoal-light mb-10 max-w-lg leading-relaxed opacity-0 animate-slide-up"
              style={{ animationDelay: "0.8s" }}
            >
              Strategic formula audits and custom product development across
              skincare, haircare, body care, and cosmetics.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-slide-up"
              style={{ animationDelay: "1.0s" }}
            >
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center rounded-button bg-charcoal px-10 py-4 text-sm font-medium tracking-wide text-white transition-all duration-500 hover:bg-charcoal-dark"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-button border border-charcoal px-10 py-4 text-sm font-medium tracking-wide text-charcoal transition-all duration-500 hover:bg-charcoal hover:text-white"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right — professional photo */}
          <div
            className="flex justify-center md:justify-end opacity-0 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
              <Image
                src="/images/hero-photo.jpg"
                alt="Tricelle Gray - Cosmetic Chemist"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 🔧 Step 3: Restore About Section

**File**: [src/components/sections/About.tsx](src/components/sections/About.tsx)

Replace the ENTIRE contents with:

```tsx
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid gap-16 md:grid-cols-[1.1fr_1fr] md:items-center">
          {/* Photo */}
          <RevealOnScroll>
            <div className="flex justify-center md:justify-start">
              <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
                <Image
                  src="/images/about-photo.jpg"
                  alt="Tricelle Gray - Founder & Principal Cosmetic Chemist"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </RevealOnScroll>

          {/* Bio */}
          <div>
            <RevealOnScroll delay={100}>
              <p className="text-body-xs uppercase tracking-luxury text-rose mb-6">
                About
              </p>
              <h2 className="font-serif text-h1 md:text-display-md text-charcoal mb-2">
                Tricelle Gray
              </h2>
              <p className="text-body-md text-charcoal-light mb-1">
                Founder &amp; Principal Cosmetic Chemist
              </p>
              <p className="text-body-md text-charcoal-light mb-10">
                Software Engineer
              </p>
            </RevealOnScroll>

            <div className="space-y-6">
              <RevealOnScroll delay={200}>
                <p className="text-body-lg text-charcoal-light leading-relaxed">
                  I am a cosmetic chemist and software engineer, a combination
                  that shapes how I approach formulation: methodical, precise,
                  and built to scale.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={300}>
                <p className="text-body-lg text-charcoal-light leading-relaxed">
                  As the founder of{" "}
                  <a
                    href="https://formuley.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-rose-dark font-medium transition-colors duration-500 hover:text-rose"
                  >
                    Formuley
                  </a>
                  , an intelligent formulation platform designed for cosmetic
                  chemists and beauty brands, I operate at the intersection of
                  technical development and hands-on product creation. Beyond
                  building technology, I formulate across skincare, haircare,
                  body care, and cosmetics.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={400}>
                <p className="text-body-lg text-charcoal-light leading-relaxed">
                  My work includes treatment butters, corrective bars, targeted
                  serums, cleansers, and cohesive product line systems. Each
                  formula is developed with structural integrity and delivered
                  with complete documentation. That includes ingredient
                  specifications, processing instructions, safety
                  considerations, and manufacturer-ready technical sheets. Every
                  detail is reviewed for stability, performance, and
                  scalability.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={500}>
                <p className="text-body-lg text-charcoal-light leading-relaxed">
                  When specialized testing, regulatory review, or manufacturing
                  coordination is required, I collaborate with trusted industry
                  partners to ensure each formulation is properly supported from
                  development through production.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={600}>
                <p className="text-body-lg text-charcoal font-medium border-l-2 border-rose pl-6 my-4">
                  I build. I formulate. I solve.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## ✅ Step 4: Test

1. **Start dev server**:
   ```bash
   npm run dev
   ```

2. **Check**:
   - Visit http://localhost:3000
   - Verify both photos display correctly
   - Check responsive layout on mobile
   - Ensure photos load quickly

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🎨 Design Notes

### Key Changes from Current Layout:

**Hero Section**:
- ✅ Two-column grid on desktop
- ✅ Photo on right side
- ✅ Text stays left-aligned (not centered)
- ✅ Photo animates in with slide-up

**About Section**:
- ✅ Two-column grid on desktop
- ✅ Photo on left side
- ✅ Bio on right side (left-aligned text)
- ✅ Header no longer centered

### Responsive Behavior:
- **Mobile**: Single column, photo below text (Hero) or above text (About)
- **Tablet/Desktop**: Two-column grid as shown

---

## 🖼️ Photo Tips

### Hero Photo (Right Side)
- Professional headshot or lifestyle shot
- Clean background or minimally distracting
- Good lighting and sharp focus
- Conveys expertise and approachability
- **Crop**: Portrait orientation (taller than wide)

### About Photo (Left Side)
- Can be more contextual (lab, working, thoughtful)
- Shows personality and professionalism
- Different from hero photo for variety
- Can show you in action or in your element
- **Crop**: Portrait orientation (taller than wide)

---

## 🔄 Alternative: Keep Current Design

If you prefer the current text-only layout:
- **No action needed** - site looks professional as-is
- Clean, minimal, focused on content
- Faster page load (no images)
- Less personal but very elegant

The two-column photo layout adds:
- ✅ Personal connection
- ✅ Visual interest
- ✅ Professional credibility
- ✅ Face to your brand

**Both designs are valid - choose based on your brand preference!**

---

## 📞 Troubleshooting

### Photos Not Showing
- Check file paths: `/public/images/hero-photo.jpg`
- Verify files exist in correct location
- Clear Next.js cache: `rm -rf .next && npm run dev`

### Photos Look Stretched/Cropped
- Ensure photos are 3:4 aspect ratio (portrait)
- Use `object-cover` class (already in code)
- Adjust photo composition before upload

### Build Errors
- Make sure to import `Image from "next/image"` at top of files
- Verify syntax is exactly as shown above

---

## 🎉 You're Done!

Your website now has the beautiful two-column photo layout that was originally designed!

**Total time**: ~10 minutes
**Result**: Professional, personal, polished website

---

## 📚 Related Docs

- [IMAGE-GUIDE.md](IMAGE-GUIDE.md) - Original image integration guide
- [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md) - Deploy your changes
- [README.md](README.md) - Project overview
