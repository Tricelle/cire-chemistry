# Deployment Guide - Going Live!

This guide walks you through deploying your cosmetic chemist website to production.

---

## 🚀 Recommended: Deploy to Vercel

Vercel is the easiest and best option for Next.js applications (it's made by the creators of Next.js).

### Why Vercel?
- ✅ Free tier available
- ✅ Automatic deployments from Git
- ✅ Built-in SSL/HTTPS
- ✅ Global CDN for fast loading
- ✅ Zero configuration needed
- ✅ Easy environment variable management

---

## Step 1: Sign Up for Resend (Email Service)

Before deploying, set up your email service:

1. **Go to [Resend.com](https://resend.com)**
2. **Sign up** for a free account
3. **Verify your domain** (or use their free test domain for now)
4. **Get your API key**:
   - Go to [API Keys](https://resend.com/api-keys)
   - Click "Create API Key"
   - Copy the key (starts with `re_`)
   - **Save it securely** - you'll need it later

### Domain Verification (Recommended)
- Add DNS records to verify your domain
- This lets you send from `hello@yourdomain.com`
- Required for production (can skip for testing)

---

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub**:
   ```bash
   # Create a new repository on GitHub first, then:
   git add .
   git commit -m "Initial commit - Ready for deployment"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Go to [Vercel.com](https://vercel.com)**
   - Sign up with your GitHub account
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js settings ✅

3. **Add Environment Variables**:
   Before deploying, click "Environment Variables" and add:

   | Name | Value | Example |
   |------|-------|---------|
   | `RESEND_API_KEY` | Your Resend API key | `re_abc123...` |
   | `RESEND_FROM_EMAIL` | Verified sending email | `hello@yourdomain.com` |
   | `CONTACT_EMAIL` | Your email to receive inquiries | `tricelle@yourdomain.com` |
   | `NEXT_PUBLIC_SITE_URL` | Your production URL | `https://tricelle-gray.com` |

4. **Click "Deploy"**
   - Vercel builds and deploys automatically
   - Takes 1-2 minutes
   - You'll get a live URL: `your-project.vercel.app`

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from your project directory
vercel

# Follow the prompts:
# - Set up and deploy: Yes
# - Which scope: Your account
# - Link to existing project: No
# - Project name: cosmetic-chemist-website
# - Directory: ./ (default)
# - Override settings: No

# Add environment variables
vercel env add RESEND_API_KEY
vercel env add RESEND_FROM_EMAIL
vercel env add CONTACT_EMAIL
vercel env add NEXT_PUBLIC_SITE_URL

# Deploy to production
vercel --prod
```

---

## Step 3: Connect Your Custom Domain

After deploying, connect your domain:

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your domain (e.g., `tricelle-gray.com`)

2. **Update DNS Records**:
   Vercel will show you which DNS records to add:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS Propagation** (can take up to 48 hours, usually < 1 hour)

4. **Update Environment Variable**:
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

5. **SSL Certificate**: Automatically provisioned by Vercel ✅

---

## Step 4: Update Your .env.local

After deployment, update your local `.env.local` file:

```env
# Keep these for local development
RESEND_API_KEY=re_your_real_api_key
RESEND_FROM_EMAIL=hello@yourdomain.com
CONTACT_EMAIL=your-email@yourdomain.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Step 5: Test Everything

### Test Email Forms:
1. **Visit your live site**
2. **Fill out the inquiry form**
3. **Check that you receive the email**
4. **Fill out the intake form**
5. **Verify email arrives correctly**

### Test on Multiple Devices:
- [ ] Desktop (Chrome, Safari, Firefox)
- [ ] Mobile (iOS Safari, Android Chrome)
- [ ] Tablet
- [ ] Check responsive design
- [ ] Test all navigation links
- [ ] Verify forms work
- [ ] Check page load speed

---

## Alternative Hosting Options

### Netlify
Similar to Vercel, also excellent for Next.js:
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables

### Cloudflare Pages
Great for performance:
1. Connect GitHub repo
2. Framework preset: Next.js
3. Add environment variables

---

## 🔒 Security Checklist

Before going live:
- [ ] All environment variables set correctly
- [ ] API keys are in environment variables (not in code)
- [ ] `.env.local` is in `.gitignore` (already done ✅)
- [ ] SSL certificate is active (automatic with Vercel)
- [ ] Test forms to ensure emails are sent correctly
- [ ] No console errors in browser

---

## 📊 Post-Launch Setup (Optional)

### Analytics
Add Google Analytics or Vercel Analytics:
```bash
# Vercel Analytics (easiest)
npm install @vercel/analytics
```

Then add to [src/app/layout.tsx](src/app/layout.tsx):
```tsx
import { Analytics } from '@vercel/analytics/react';

// Add <Analytics /> before closing </body> tag
```

### Performance Monitoring
Vercel provides built-in:
- Speed Insights
- Web Vitals
- Real User Monitoring

Enable in Vercel Dashboard → Analytics

---

## 🚨 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild locally
rm -rf .next node_modules
npm install
npm run build
```

### Emails Not Sending
- Verify `RESEND_API_KEY` is correct
- Check Resend dashboard for logs
- Verify domain is verified in Resend
- Check email isn't in spam folder

### Environment Variables Not Working
- Make sure they're added in Vercel Dashboard
- Redeploy after adding new variables
- Variables starting with `NEXT_PUBLIC_` are client-side accessible

### Domain Not Connecting
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Use [DNS Checker](https://dnschecker.org) to verify

---

## 📞 Support Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Documentation**: https://nextjs.org/docs
- **Resend Documentation**: https://resend.com/docs
- **Vercel Discord**: https://vercel.com/discord

---

## 🎉 You're Live!

Once deployed:
1. ✅ Your site is live on the internet
2. ✅ SSL/HTTPS is automatically enabled
3. ✅ Forms send emails to you
4. ✅ Automatic deployments on every Git push
5. ✅ Global CDN for fast loading worldwide

**Share your URL and start receiving inquiries!** 🚀
