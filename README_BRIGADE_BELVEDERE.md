# Brigade Belvedere - Luxury Real Estate Microsite

## Project Overview

A premium, conversion-focused one-page microsite for Brigade Group's "Brigade Belvedere" luxury residential project in Budigere Cross, Bengaluru. Built with pure HTML, CSS, and vanilla JavaScript with a fully functional FastAPI backend.

## 🏗️ Project Details

- **Project Name:** Brigade Belvedere
- **Location:** Budigere Cross, Bengaluru
- **Size:** ~10.75 acres
- **Structure:** G+43 storey residential towers
- **Clubhouse:** 25,000 sq. ft.
- **Sustainability Goal:** Net Zero Emission by 2045
- **RERA Reg. No:** PRM/KA/RERA/1251/446/PR/240326/008549

## ✨ Features Implemented

### Frontend (Pure HTML/CSS/JS)

1. **Hero Section**
   - Full-width background with elegant overlay
   - Large heading with project tagline
   - Two prominent CTAs: "Download Brochure" and "Schedule Visit"
   - Smooth scroll indicator animation

2. **Sticky Navigation Bar**
   - Fixed navigation with smooth scrolling
   - Active section highlighting
   - Responsive mobile menu
   - Sections: Home, About, Amenities, Floor Plans, Gallery, Location, Contact

3. **About Section**
   - Two-column layout with project description
   - Four highlight cards:
     - Spacious Apartments (1, 2 & 3 BHK)
     - Premium Amenities (40+ amenities)
     - Prime Location
     - Trusted Developer (Brigade Group)
   - RERA registration details

4. **Amenities Section**
   - 12 beautifully designed amenity cards
   - Hover effects with smooth transitions
   - Icons for visual appeal
   - Includes: Swimming Pool, Fitness Center, Sports Courts, Clubhouse, Gardens, Children's Play Area, Yoga & Meditation, Skating Rink, Pet Park, Event Plaza, Reading Areas, 24/7 Security

5. **Floor Plans Section**
   - Interactive tabs for different configurations:
     - 1 BHK + 1T (715 sq.ft)
     - 2 BHK + 2T (1149 sq.ft)
     - 3 BHK + 2T (1443 sq.ft)
     - 3 BHK + 3T + Study (2013 sq.ft)
   - Dynamic content switching with JavaScript
   - Detailed area specifications

6. **Gallery Section**
   - Responsive image grid (8 high-quality images)
   - Hover zoom effects
   - **Lightbox functionality:**
     - Click to view full-size images
     - Next/Previous navigation
     - Close with X button or ESC key
     - Click outside to close

7. **Location Section**
   - Google Maps iframe integration
   - Nearby landmarks with icons:
     - Kempegowda International Airport
     - IT Hubs (SAP Labs, Boeing, Wipro)
     - Metro Connectivity
     - Schools & Colleges
     - Healthcare facilities
     - Shopping & Entertainment

8. **Contact Section**
   - **Working contact form with backend integration**
   - Form fields: Name, Phone, Email, Message
   - Frontend validation:
     - Name: Minimum 2 characters
     - Phone: 10-digit number validation
     - Email: Valid email format
     - Message: Minimum 10 characters
   - Success/error messaging
   - Contact information display
   - Social media links

9. **Additional Features**
   - WhatsApp floating button (bottom right)
   - Smooth scroll animations
   - Scroll reveal effects for sections
   - Active navigation link highlighting
   - Mobile-responsive design
   - Elegant footer with disclaimer

### Backend (FastAPI + MongoDB)

1. **Contact Form API**
   - Endpoint: `POST /api/contact`
   - Stores all contact inquiries in MongoDB
   - Fields: name, phone, email, message, timestamp, unique ID
   - CORS enabled for cross-origin requests

2. **Admin Endpoint**
   - Endpoint: `GET /api/contact`
   - Retrieve all contact inquiries
   - Useful for admin dashboard or CRM integration

3. **Database Schema**
   - Collection: `contact_inquiries`
   - Automatic timestamp generation
   - UUID for unique identification

## 🎨 Design Elements

### Color Palette
- **Primary Colors:**
  - White (#FFFFFF)
  - Charcoal (#2C2C2C)
  - Gold (#D4AF37) - Accent color
  - Beige (#F5F1E8) - Background
  - Light Gold (#E8D7A8)

### Typography
- **Headings:** Playfair Display (Serif) - Elegant and luxurious
- **Body Text:** Montserrat (Sans-serif) - Clean and modern

### Animations & Effects
- Fade-in animations on page load
- Smooth scroll behavior
- Hover effects on cards and buttons
- Transform and shadow transitions
- Parallax hero background
- Scroll reveal animations

## 📁 File Structure

```
/app/
├── public/
│   ├── index.html          # Main HTML file
│   ├── style.css           # Complete styling
│   └── script.js           # All JavaScript functionality
├── backend/
│   └── server.py           # FastAPI backend with contact API
└── serve_static.py         # Static file server (port 3000)
```

## 🚀 How It Works

### Static Files (Frontend)
- Served from `/app/public/` directory
- Accessible at `http://localhost:3000`
- Pure HTML/CSS/JS (no build process required)

### Backend API
- Running on `http://localhost:8001`
- Production URL: `https://belvedere-luxury.preview.emergentagent.com`
- All API routes prefixed with `/api`

### Contact Form Flow
1. User fills out the contact form
2. JavaScript validates input fields
3. Form data sent to backend via POST request
4. Backend saves data to MongoDB
5. Success message displayed to user
6. Form resets automatically

## 🧪 Testing Results

### Automated Tests Completed ✓
1. ✓ Hero section loads correctly
2. ✓ About section with highlight cards
3. ✓ Amenities grid display
4. ✓ Floor plan tabs switch correctly
5. ✓ Gallery images load properly
6. ✓ Lightbox opens and navigates
7. ✓ Contact form validation works
8. ✓ Form submission to backend successful
9. ✓ Success message displays
10. ✓ Data saved to MongoDB
11. ✓ Download Brochure button triggers alert
12. ✓ Schedule Visit button scrolls to contact
13. ✓ All sections responsive and animated

## 📊 Sample Data in Database

```json
[
    {
        "id": "077a1153-9ec8-4637-b3ca-1495ccda0fb7",
        "name": "Test User",
        "phone": "9876543210",
        "email": "test@example.com",
        "message": "This is a test inquiry about Brigade Belvedere",
        "timestamp": "2026-05-29T13:03:44.040480Z"
    },
    {
        "id": "c580c998-2b1f-45c6-b754-3052086fd606",
        "name": "Sarah Williams",
        "phone": "9123456789",
        "email": "sarah.williams@example.com",
        "message": "I would like to schedule a site visit...",
        "timestamp": "2026-05-29T13:10:24.188399Z"
    }
]
```

## 🔧 Technical Implementation

### Key JavaScript Features
1. **Mobile Navigation:** Hamburger menu toggle
2. **Smooth Scrolling:** All navigation links
3. **Floor Plan Tabs:** Dynamic content switching
4. **Gallery Lightbox:** Full-screen image viewer
5. **Form Validation:** Real-time client-side validation
6. **Async Form Submission:** Fetch API with error handling
7. **Scroll Animations:** Intersection Observer API
8. **Active Nav Links:** Dynamic based on scroll position

### CSS Techniques
1. **Flexbox & Grid:** Modern layout systems
2. **CSS Variables:** Theme colors and fonts
3. **Transitions:** Smooth hover and state changes
4. **Backdrop Filter:** Glass-morphism effect on navbar
5. **Transform:** Card hover elevations
6. **Keyframe Animations:** Custom scroll indicator
7. **Media Queries:** Fully responsive design

## 📱 Responsive Design

- **Desktop:** Full layout with all features (1920px+)
- **Tablet:** Adjusted grid layouts (768px - 1919px)
- **Mobile:** Single column, hamburger menu (<768px)

## 🎯 Conversion Optimization

1. **Clear CTAs:** Two prominent buttons in hero section
2. **Trust Signals:** RERA registration, Brigade Group branding
3. **Social Proof:** Trusted developer since 1986
4. **Visual Hierarchy:** Large headings, clear sections
5. **Easy Contact:** Multiple ways to reach (form, WhatsApp, phone)
6. **Professional Design:** Luxury color palette and typography
7. **Fast Loading:** Optimized images and minimal code

## 🔗 URLs & Endpoints

### Frontend
- Local: `http://localhost:3000`
- Production: `https://belvedere-luxury.preview.emergentagent.com`

### Backend API
- Contact Form Submit: `POST /api/contact`
- Get All Inquiries: `GET /api/contact`
- Health Check: `GET /api/`

## 📝 Notes

1. **Brochure Download:** Currently shows alert (mockup). In production, would link to actual PDF.
2. **Images:** Using high-quality Unsplash images as placeholders
3. **Google Maps:** Embedded with approximate coordinates for Budigere Cross
4. **WhatsApp:** Link configured to placeholder number
5. **Social Media:** Icon links are placeholder (#)

## 🎨 Design Philosophy

- **Luxury Feel:** Elegant serif headings, gold accents, premium spacing
- **Clean & Modern:** Minimalist design with ample whitespace
- **Conversion-Focused:** Clear value propositions and easy contact
- **Professional:** Brigade Group brand standards maintained
- **Trust-Building:** RERA details, project specifications, developer info

## 🏆 Key Achievements

✅ Pure HTML/CSS/JS (no frameworks)
✅ Fully functional backend integration
✅ Working contact form with MongoDB
✅ Interactive gallery with lightbox
✅ Dynamic floor plan tabs
✅ Smooth animations throughout
✅ Mobile-responsive design
✅ Professional luxury aesthetic
✅ All original requirements met
✅ Tested and verified working

---

**Built with precision and attention to detail for Brigade Group's luxury real estate project.**
