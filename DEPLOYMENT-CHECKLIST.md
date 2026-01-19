# 🚀 Pre-Launch SEO Checklist for Ranchi Cab Service

## ✅ COMPLETED TASKS

### Technical SEO
- [x] Fixed canonical URLs from vercel.app to ranchicabservice.com
- [x] Added Google Analytics placeholder (needs ID)
- [x] Added Google Search Console verification tag (needs code)
- [x] Added Microsoft Clarity placeholder (optional)
- [x] Enhanced sitemap.xml with 20+ URLs
- [x] Updated robots.txt
- [x] Added structured data (LocalBusiness schema)
- [x] Added Open Graph tags
- [x] Added Twitter Card tags
- [x] Created route-specific landing page
- [x] Added social media links to footer

---

## 🔴 URGENT - MUST DO BEFORE DEPLOYMENT

### 1. Get Google Analytics ID
**Time Required:** 10 minutes
**Priority:** HIGH

Steps:
1. Go to https://analytics.google.com
2. Create account/property
3. Get Measurement ID (format: G-XXXXXXXXXX)
4. Open `/index.html`
5. Line 12: Replace `G-XXXXXXXXXX` with your actual ID
6. Save and test

**Test:** After deployment, visit your site and check:
- https://analytics.google.com/analytics/web/
- Real-time reports should show your visit

---

### 2. Get Google Search Console Verification Code
**Time Required:** 15 minutes
**Priority:** CRITICAL

Steps:
1. Go to https://search.google.com/search-console
2. Add property: `https://www.ranchicabservice.com`
3. Choose "HTML tag" verification method
4. Copy the code (format: `google-site-verification=xxxxxxxxxxxx`)
5. Open `/index.html`
6. Line 8: Replace `YOUR_VERIFICATION_CODE_HERE` with actual code
7. Save and deploy
8. Return to Search Console and click "Verify"

**Test:** Verification should succeed immediately

---

### 3. Submit Sitemap to Google
**Time Required:** 5 minutes
**Priority:** HIGH

Steps:
1. After Search Console verification
2. Go to "Sitemaps" section (left sidebar)
3. Enter: `https://www.ranchicabservice.com/sitemap.xml`
4. Click "Submit"

**Test:** Status should show "Success" within 24 hours

---

### 4. Create Social Media Accounts
**Time Required:** 2 hours
**Priority:** HIGH

#### Facebook Page
- [ ] Go to https://www.facebook.com/pages/create
- [ ] Page name: "Ranchi Cab Service"
- [ ] Category: "Taxi Service"
- [ ] Add description, phone, website
- [ ] Upload logo and cover photo
- [ ] Publish 5 initial posts
- [ ] Update Footer.tsx with actual Facebook URL

#### Instagram Business Account
- [ ] Download Instagram app
- [ ] Create account: @ranchicabservice
- [ ] Convert to Business Account
- [ ] Add bio: "Best Cab Service in Ranchi 🚗 24/7 ☎️ +91 7903629240"
- [ ] Add website link
- [ ] Post 9 photos (grid view)
- [ ] Update Footer.tsx with actual Instagram URL

#### Twitter/X Account
- [ ] Go to https://twitter.com
- [ ] Create account: @ranchicabs
- [ ] Add profile photo and banner
- [ ] Add bio and website
- [ ] Post 10 tweets
- [ ] Update Footer.tsx with actual Twitter URL

---

### 5. Register on Business Directories
**Time Required:** 3-4 hours
**Priority:** MEDIUM-HIGH

Copy this information for quick submission:

```
Business Name: Ranchi Cab Service
Category: Taxi Service / Car Rental / Transportation
Address: Ranchi, Jharkhand, India
Phone: +91 7903629240
Email: rohittravels10@gmail.com
Website: https://www.ranchicabservice.com
Description: Best cab and taxi service in Ranchi offering local taxi, outstation cabs, airport transfers, and corporate transportation 24/7 with verified drivers and clean AC vehicles.

Services:
- Local Taxi Service
- Outstation Cab Service
- Airport Transfer
- Corporate Taxi
- One-Way Taxi
- Round Trip Cab
- Hourly Car Rental

Service Area:
Ranchi, Jharkhand, Bihar, West Bengal - Patna, Kolkata, Jamshedpur, Bokaro, Dhanbad, Hazaribagh

Keywords: ranchi cab service, taxi service in ranchi, ranchi taxi, cab booking ranchi, ranchi airport taxi, outstation taxi ranchi
```

#### Priority Directories (Submit today)
- [ ] JustDial - https://www.justdial.com/
- [ ] IndiaMART - https://www.indiamart.com/
- [ ] Sulekha - https://www.sulekha.com/
- [ ] Google My Business - https://www.google.com/business/
- [ ] Bing Places - https://www.bingplaces.com/

#### Secondary Directories (This week)
- [ ] TradeIndia
- [ ] YellowPages India
- [ ] UrbanClap
- [ ] Quikr
- [ ] OLX India
- [ ] 99acres Business
- [ ] Grotal
- [ ] ExportersIndia

---

### 6. Set Up GoDaddy Domain Properly
**Time Required:** 30 minutes
**Priority:** CRITICAL

Verify these DNS settings in GoDaddy:

#### A Records
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel IP)
TTL: 600
```

#### CNAME Records
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 600
```

#### Test Domain
After DNS changes:
1. Wait 1-24 hours for propagation
2. Check: https://www.whatsmydns.net/
3. Enter: ranchicabservice.com
4. Should resolve to Vercel

---

## 📋 POST-DEPLOYMENT CHECKLIST

### Day 1 - Deployment Day

#### Morning
- [ ] Deploy to Vercel with all changes
- [ ] Verify domain is working (www.ranchicabservice.com)
- [ ] Test all pages load correctly
- [ ] Verify Google Analytics is tracking (check Real-time)
- [ ] Complete Google Search Console verification
- [ ] Submit sitemap to Google
- [ ] Test mobile responsiveness
- [ ] Test booking form submission
- [ ] Check all phone/WhatsApp links work

#### Afternoon
- [ ] Create Google My Business profile
- [ ] Create Facebook Business Page
- [ ] Create Instagram Business Account
- [ ] Post first content on social media
- [ ] Submit to 5 business directories

#### Evening
- [ ] Monitor analytics for first visitors
- [ ] Check for any errors in Search Console
- [ ] Share website link with friends/family
- [ ] Request first reviews from previous customers

---

### Week 1 - Foundation Building

#### Content
- [ ] Write and publish first blog post
- [ ] Create 10 social media posts
- [ ] Record introduction video
- [ ] Take professional photos of fleet
- [ ] Create promotional graphics

#### Marketing
- [ ] Submit to 20 business directories
- [ ] Share on WhatsApp status
- [ ] Share in local Facebook groups
- [ ] Join Ranchi business communities
- [ ] Contact previous customers for reviews

#### Technical
- [ ] Monitor Search Console for indexing
- [ ] Check website speed (PageSpeed Insights)
- [ ] Fix any console errors
- [ ] Test all forms and links
- [ ] Monitor uptime (UptimeRobot)

---

### Week 2-4 - Growth Phase

#### Content Marketing
- [ ] Publish 2 blog posts per week
- [ ] Post daily on social media
- [ ] Create route-specific pages for top 5 routes
- [ ] Add customer testimonial videos
- [ ] Create FAQ page with 20+ questions

#### Link Building
- [ ] Submit to 50 business directories
- [ ] Partner with hotels in Ranchi
- [ ] Partner with travel agencies
- [ ] List on tourism websites
- [ ] Guest post on travel blogs

#### Local SEO
- [ ] Complete Google My Business 100%
- [ ] Get 20+ Google reviews
- [ ] Respond to all reviews
- [ ] Post weekly on GMB
- [ ] Add 50+ photos to GMB

#### Social Media
- [ ] Reach 100 Facebook followers
- [ ] Reach 100 Instagram followers
- [ ] Post daily on all platforms
- [ ] Run first paid ad campaign
- [ ] Engage with local community

---

## 🎯 QUICK WINS (Do These First!)

### 1-Hour Tasks
1. ✅ Deploy updated code to Vercel
2. ⏳ Set up Google Analytics
3. ⏳ Set up Google Search Console
4. ⏳ Submit sitemap
5. ⏳ Create Google My Business

### 3-Hour Tasks
1. ⏳ Create all social media accounts
2. ⏳ Submit to top 10 directories
3. ⏳ Write first blog post
4. ⏳ Request 10 customer reviews
5. ⏳ Take and upload fleet photos

### 1-Day Tasks
1. ⏳ Complete GMB profile 100%
2. ⏳ Submit to 20 directories
3. ⏳ Create 30 social media posts
4. ⏳ Set up paid ad campaigns
5. ⏳ Create promotional materials

---

## 📊 TESTING CHECKLIST

### Before Deployment

#### Functionality Tests
- [ ] All pages load without errors
- [ ] Booking form submits correctly
- [ ] Phone links work (tel:)
- [ ] WhatsApp links work
- [ ] All internal links work
- [ ] All images load properly
- [ ] Mobile menu works
- [ ] FAQ accordion works

#### SEO Tests
- [ ] Each page has unique title
- [ ] Each page has unique meta description
- [ ] Canonical URLs are correct
- [ ] Schema markup validates (https://validator.schema.org/)
- [ ] Sitemap is accessible
- [ ] Robots.txt is accessible
- [ ] No broken links (https://www.brokenlinkcheck.com/)

#### Performance Tests
- [ ] Page speed score > 90 (https://pagespeed.web.dev/)
- [ ] Mobile friendly (https://search.google.com/test/mobile-friendly)
- [ ] No console errors
- [ ] Images optimized
- [ ] CSS/JS minified

#### Cross-Browser Tests
- [ ] Chrome (desktop)
- [ ] Safari (desktop)
- [ ] Edge (desktop)
- [ ] Chrome (mobile)
- [ ] Safari (iOS)

---

## 🔍 POST-LAUNCH MONITORING

### Daily (First Week)
- [ ] Check Google Analytics traffic
- [ ] Monitor Search Console for issues
- [ ] Check for new reviews
- [ ] Respond to customer inquiries
- [ ] Post on social media

### Weekly
- [ ] Review analytics report
- [ ] Check keyword rankings
- [ ] Analyze traffic sources
- [ ] Update content
- [ ] Get 3-5 new reviews

### Monthly
- [ ] Comprehensive SEO audit
- [ ] Update sitemap if needed
- [ ] Refresh content
- [ ] Analyze competitors
- [ ] Adjust strategy based on data

---

## 📈 SUCCESS METRICS

### Week 1
- ✅ Website indexed by Google
- ✅ Google Analytics working
- ✅ 10+ impressions in Search Console
- ✅ 5+ Google reviews
- ✅ Social media accounts created

### Month 1
- 🎯 1,000+ Google impressions
- 🎯 100+ website visitors
- 🎯 20+ phone calls
- 🎯 10+ bookings
- 🎯 10+ Google reviews
- 🎯 50+ social media followers

### Month 3
- 🎯 10,000+ Google impressions
- 🎯 1,000+ website visitors
- 🎯 100+ phone calls
- 🎯 50+ bookings
- 🎯 50+ Google reviews
- 🎯 500+ social media followers
- 🎯 Ranking top 10 for main keywords

---

## 🚨 CRITICAL REMINDERS

### Before Going Live
1. ✅ Replace ALL placeholder codes (Analytics, Search Console)
2. ✅ Update social media URLs in Footer
3. ✅ Test booking form thoroughly
4. ✅ Verify phone numbers work
5. ✅ Check domain DNS settings
6. ✅ Create backups

### After Going Live
1. Monitor for errors constantly
2. Respond to ALL customer inquiries within 1 hour
3. Post content daily
4. Get reviews weekly
5. Track rankings monthly

### Never Forget
- Customer service is #1 priority
- Every happy customer = Free marketing
- Reviews are more important than ads
- Consistency beats intensity
- Data drives decisions

---

## 📞 EMERGENCY CONTACTS

### Technical Issues
- Vercel Support: https://vercel.com/support
- GoDaddy Support: https://www.godaddy.com/contact-us
- Google Support: https://support.google.com/

### If Website is Down
1. Check Vercel dashboard
2. Check domain DNS
3. Check Google Analytics real-time
4. Contact Vercel support
5. Use backup contact methods (phone/WhatsApp)

---

## ✅ FINAL PRE-LAUNCH CHECKLIST

**Complete this checklist before deploying:**

- [ ] All code changes committed to Git
- [ ] Google Analytics ID updated
- [ ] Search Console verification code updated
- [ ] Social media URLs updated in Footer
- [ ] All placeholder text removed
- [ ] All images optimized
- [ ] Mobile tested
- [ ] Forms tested
- [ ] Links tested
- [ ] Performance tested
- [ ] Backup created
- [ ] Domain DNS verified
- [ ] SSL certificate working (https://)
- [ ] All team members notified
- [ ] Customer service ready
- [ ] Phone lines active
- [ ] WhatsApp active

---

**When all checkboxes above are checked, you're ready to deploy! 🚀**

**After deployment, start with the Day 1 tasks immediately.**

**Remember: Launch is just the beginning. Success comes from consistent effort over months.**

---

*Last Updated: January 19, 2026*  
*Review this checklist before every major deployment*
