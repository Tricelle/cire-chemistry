# Professional Photo Integration Guide

This document provides exact specifications for adding your professional photos to the website once they're ready.

---

## 📸 Photos Needed

### 1. **Hero Section Photo** (Homepage - Top Right)
- **Location**: [src/components/sections/Hero.tsx](src/components/sections/Hero.tsx) (Lines 53-69)
- **Current State**: Elegant gradient placeholder with "Photo Coming Soon"
- **Purpose**: First impression, professional portrait
- **Recommended Photo**: Professional headshot or lifestyle photo that conveys expertise and approachability

#### Design Specifications:
- **Aspect Ratio**: 3:4 (portrait orientation)
- **Recommended Size**: 800px × 1067px (or higher resolution)
- **File Format**: JPG or WebP (for web optimization)
- **Style**: Clean, professional, well-lit
- **Background**: Solid or minimally distracting

#### Integration Steps:
1. Save your photo to `/public/images/` as `hero-photo.jpg`
2. Replace the placeholder div (lines 58-68) with:

```tsx
<div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
  <img
    src="/images/hero-photo.jpg"
    alt="Tricelle Gray - Cosmetic Chemist"
    className="w-full h-full object-cover"
  />
</div>
```

---

### 2. **About Section Photo** (Homepage - About Section)
- **Location**: [src/components/sections/About.tsx](src/components/sections/About.tsx) (Lines 9-23)
- **Current State**: Matching gradient placeholder with "Photo Coming Soon"
- **Purpose**: Personal connection, professional credibility
- **Recommended Photo**: Professional portrait, lab setting, or thoughtful/working photo

#### Design Specifications:
- **Aspect Ratio**: 3:4 (portrait orientation)
- **Recommended Size**: 800px × 1067px (or higher resolution)
- **File Format**: JPG or WebP
- **Style**: Professional, authentic, relatable
- **Background**: Can be more contextual (lab, office, formulation setting)

#### Integration Steps:
1. Save your photo to `/public/images/` as `about-photo.jpg`
2. Replace the placeholder div (lines 11-22) with:

```tsx
<div className="flex justify-center md:justify-start">
  <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
    <img
      src="/images/about-photo.jpg"
      alt="Tricelle Gray - Founder & Principal Cosmetic Chemist"
      className="w-full h-full object-cover"
    />
  </div>
</div>
```

---

## 🎨 Current Design Aesthetic

Your site uses a sophisticated, minimal luxury aesthetic:

### Color Palette:
- **Primary**: Charcoal (#2D2D2D) - Text and accents
- **Accent**: Rose (#9D7B7B) - CTAs and highlights
- **Neutral**: Cream (#FAF8F6) - Backgrounds
- **Borders**: Subtle borders for elegance

### Typography:
- **Headings**: Serif font (elegant, traditional)
- **Body**: Sans-serif (clean, modern readability)
- **Tracking**: Wide letter-spacing for luxury feel

### Photo Styling:
- **Border Radius**: 16px (rounded-2xl) - Soft, modern corners
- **Border**: 1px subtle border
- **Shadow**: Soft shadow (when photo is added)
- **No filters** - Let professional photography speak for itself

---

## 📋 Photo Preparation Checklist

Before adding photos, ensure they meet these criteria:

### Technical Requirements:
- [ ] High resolution (minimum 800px width)
- [ ] 3:4 aspect ratio (portrait)
- [ ] Well-lit with good contrast
- [ ] Sharp and in focus
- [ ] Optimized file size (under 500KB after optimization)

### Style Consistency:
- [ ] Professional attire appropriate for your brand
- [ ] Neutral or complementary background
- [ ] Consistent lighting between both photos
- [ ] Natural, approachable expression
- [ ] High-quality, professionally shot

### File Organization:
```
/public/images/
  ├── hero-photo.jpg       (Homepage hero section)
  ├── about-photo.jpg      (About section)
  └── [optional backups]
```

---

## 🚀 Quick Integration Process

When your photos arrive:

1. **Optimize Images** (recommended tools):
   - Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Target: Under 500KB per image
   - Maintain quality while reducing file size

2. **Add to Project**:
   ```bash
   # Create images directory if it doesn't exist
   mkdir -p public/images

   # Copy your photos
   cp ~/Downloads/hero-photo.jpg public/images/
   cp ~/Downloads/about-photo.jpg public/images/
   ```

3. **Update Components**:
   - Edit [Hero.tsx](src/components/sections/Hero.tsx) (lines 53-69)
   - Edit [About.tsx](src/components/sections/About.tsx) (lines 9-23)
   - Replace placeholder divs with the `<img>` code shown above

4. **Test Locally**:
   ```bash
   npm run dev
   ```
   - Check both photos load correctly
   - Verify aspect ratio and positioning
   - Test on mobile and desktop viewports

5. **Build & Deploy**:
   ```bash
   npm run build
   # Then deploy to your hosting platform
   ```

---

## 💡 Alternative: Next.js Image Component

For better optimization, you can use Next.js's built-in `Image` component:

### Hero Section (Optimized):
```tsx
import Image from "next/image";

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
```

### About Section (Optimized):
```tsx
import Image from "next/image";

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
```

**Benefits**: Automatic optimization, lazy loading, better performance.

---

## 📞 Need Help?

If you have questions when adding photos:
1. Check that file paths are correct
2. Verify images are in `/public/images/`
3. Clear Next.js cache: `rm -rf .next && npm run dev`
4. Check browser console for any errors

---

## ✨ Design Philosophy

Your current placeholder design maintains the elegant, minimal luxury aesthetic. When adding photos:
- Let the photography breathe - no heavy filters
- Keep the subtle border and rounded corners
- Maintain the professional, polished look
- Ensure photos complement (not overpower) the content

**The site is beautiful now and will be stunning with your professional photos!**
