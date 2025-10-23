# 🌍 NTC Luxury Travels

> **Premium Travel Experiences Across Mexico & Guatemala**

A sophisticated, responsive website showcasing curated luxury travel packages combining the rich cultural heritage of Chiapas (Mexico), the ancient Maya ruins of Petén (Guatemala), and the colonial charm of Antigua.

---

## ✨ Overview

**NTC Luxury Travels** presents a meticulously crafted **12-day unified journey** spanning three distinct regions:

- **🏔️ Chiapas (5 days):** Cascading waterfalls, pristine lakes, towering canyons, and archaeological treasures
- **🏛️ Petén (3 days):** Tikal UNESCO World Heritage Site, optional helicopter to El Mirador, authentic Maya ceremonies
- **🕌 Antigua (2 days):** UNESCO Colonial Heritage, baroque architecture, artisan markets

**Journey Dates:** March 3–13, 2026  
**Base Price:** $1,980 USD per person | **Helicopter Add-on:** +$600 USD

---

## 🎯 Key Features

### 🎨 **Design & UX**
- **Responsive Bootstrap 5 Framework** – Seamless experience across all devices
- **Full-width Hero Sections** – Immersive imagery with decorative wave elements
- **Intuitive Navigation** – Clean menus, smooth scrolling, tabbed content
- **Professional Color Scheme** – Theme-based accent colors, high contrast typography

### 📋 **Content Excellence**
- **Comprehensive Itinerary** – 12-day schedule with specific times, activities, meals, and hotel assignments
- **Transparent Pricing** – Clear base rates, optional add-ons (helicopter), and inclusion breakdown
- **Rich Media** – High-quality Unsplash image integration, Google Maps embedded
- **Accessibility** – Semantic HTML, ARIA labels, keyboard navigation support

### 💬 **Smart Contact System**
- **WhatsApp Integration** – Direct messaging with dynamic traveler profiling
- **Multi-Inquiry Types** – Booking requests, general questions, custom itinerary customization
- **Intelligent Field Visibility** – Context-aware form fields (traveler profile, trip priorities)
- **Enriched Messages** – Automatic message construction with traveler type, group size, and preferences

### 🔍 **Technical Optimization**
- **SEO-Ready** – sitemap.xml, robots.txt, semantic HTML5, meta descriptions
- **Performance** – Minified CSS/JS, optimized images, fast load times
- **Clean Code** – Organized file structure, modular JavaScript, maintainable CSS

---

## 📁 Project Structure

```
NTC/
├── index.html                      # Homepage & tour showcase
├── tour-mexico-guatemala.html      # Detailed 12-day itinerary page
├── css/
│   ├── bootstrap.min.css          # Bootstrap 5 framework
│   ├── style.css                  # Custom styles & responsive design
│   ├── fontawesome.min.css        # Icon library
│   └── plugin.css                 # Third-party plugin styles
├── js/
│   ├── bootstrap.min.js           # Bootstrap functionality
│   ├── jquery-3.5.1.min.js        # jQuery library
│   ├── main.js                    # Core application logic
│   ├── custom-nav.js              # Navigation enhancements
│   ├── custom-navscroll.js        # Sticky navigation
│   ├── custom-swiper.js           # Carousel/slider functionality
│   ├── particles.js               # Particle animation library
│   ├── particlerun.js             # Particle effect initialization
│   ├── plugin.js                  # Plugin integrations
│   └── fontawesome.min.js         # Icon library
├── images/                         # Tour-related imagery
│   ├── destination/               # Location photos
│   ├── icons/                     # UI icons
│   ├── team/                      # Staff profiles
│   ├── testimonial/               # Client testimonials
│   └── new-deal/                  # Featured packages
├── img/                            # Icon sets (Nucleo)
├── fonts/                          # Custom font files
├── sitemap.xml                     # SEO sitemap
├── robots.txt                      # Search engine directives
└── README.md                       # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required – pure HTML/CSS/JavaScript

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MaickR/NTC-Travels.git
   cd NTC-Travels
   ```

2. **Open in browser:**
   - Double-click `index.html` or
   - Serve via local HTTP server (recommended for development):
     ```bash
     python -m http.server 8000
     # or
     npx http-server
     ```
   - Navigate to `http://localhost:8000`

---

## 📖 Tour Package Details

### Itinerary Highlights

#### **Chiapas Region (Days 1–5)**
- **Day 1:** Arrival in San Cristóbal de las Casas, Hotel Villa Mercedes orientation
- **Day 2:** El Chiflón cascades (1.2km trail) + Montebello National Park (5 turquoise lakes)
- **Day 3:** Sumidero Canyon boat tour (1,000m cliff walls) + Chiapa de Corzo colonial town
- **Day 4:** Agua Azul & Misol-Há waterfalls + Palenque Archaeological Zone (7th-century Maya city)
- **Day 5:** Mexico–Guatemala border crossing (El Ceibo) → Transfer to Flores, Petén

#### **Petén Region (Days 6–8)**
- **Day 6:** *Optional:* Helicopter tour to El Mirador (+$600 with Dr. Marcia Chacón)  
  *Or:* Leisure day in Flores with optional lake tours
- **Day 7:** Tikal National Park (UNESCO World Heritage) – Temple IV (64m), Grand Plaza, wildlife spotting
- **Day 8:** Traditional Maya ceremony (Actún Kan caves) + Yaxhá Archaeological Site

#### **Antigua & Departure (Days 9–12)**
- **Day 9:** Domestic flight to Guatemala City → Antigua (UNESCO Colonial Heritage site)
- **Day 10:** Walking tour – Parque Central, colonial churches, artisan markets, coffee plantations
- **Days 11–12:** Leisure time + International airport departure assistance

### Pricing & Inclusions

**Base Package:** $1,980 USD per person
- 11 nights in 4-star hotels (double occupancy)
- Daily breakfasts; selected lunches & dinners
- Ground transportation & cross-border support
- Park & archaeological site entries
- Bilingual guides (local specialists + INAH archaeologists)
- Basic travel insurance

**Optional Helicopter Add-on:** +$600 USD
- Private helicopter flight to El Mirador (45 min)
- Guided tour of Complex IV (65m pyramid)
- Box lunch; weather-dependent confirmation

---

## 💡 Contact & Booking

**WhatsApp:** [Direct booking link included in website]

**Form Features:**
- Select traveler type (couple, family, friends, solo, corporate)
- Choose trip priority (culture, nature, photography, luxury, custom)
- Specify group size or date range
- Automatic message generation with all details

---

## 🔧 Customization

### Updating Itinerary
Edit dates, times, activities, and hotel names in:
- `index.html` – Tour card description (lines 500–550)
- `tour-mexico-guatemala.html` – Full itinerary tab (lines 276–552)

### Modifying Colors & Branding
- Primary theme color: Edit `css/style.css` `.bg-theme` / `.theme` classes
- Logo & favicon: Replace in header `<link>` tags

### Adding New Pages
- Create new `.html` file with same header/footer structure
- Link from navigation menu in `index.html`
- Add to `sitemap.xml` for SEO

---

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | Latest  | ✅ Fully supported |
| Firefox | Latest  | ✅ Fully supported |
| Safari  | Latest  | ✅ Fully supported |
| Edge    | Latest  | ✅ Fully supported |
| IE 11   | N/A     | ⚠️ Not supported |

---

## 📱 Responsive Breakpoints

- **Mobile (0–575px):** Full-width stacked layout
- **Tablet (576–991px):** 2-column grid, optimized spacing
- **Desktop (992px+):** 3-column grid, expanded navigation

---

## 📊 Performance & SEO

✅ **SEO Features:**
- Semantic HTML5 structure
- Meta descriptions & Open Graph tags
- XML sitemap + robots.txt
- Fast image loading (Unsplash CDN)
- Mobile-first responsive design

✅ **Performance Metrics:**
- Minimal external dependencies
- Optimized CSS & JavaScript bundling
- Lazy image loading ready
- Page load under 3 seconds (typical)

---

## 🛠️ Development

### Technologies Used
- **HTML5** – Semantic markup
- **CSS3** – Bootstrap 5, custom responsive design
- **JavaScript (ES5)** – Vanilla JS, no framework dependencies
- **Bootstrap 5** – Responsive grid & components
- **FontAwesome 6** – Icon library
- **jQuery 3.5.1** – DOM manipulation
- **Google Maps API** – Embedded location maps
- **Unsplash** – High-quality image sourcing

### Recent Updates (October 2025)
- ✅ Comprehensive 12-day itinerary with specific dates (March 3–13, 2026)
- ✅ Hotel name specificity (Villa Mercedes, Ramada Flores, heritage Antigua)
- ✅ Helicopter option clearly highlighted with Dr. Marcia Chacón credit
- ✅ Removed orphaned tour pages (tour-chiapas-day1.html, tour-guayaquil.html)
- ✅ Enhanced WhatsApp form with traveler profiles & trip priorities
- ✅ Full-width section-shape decorative images (background-size: cover)
- ✅ Centered tour card layout
- ✅ Updated sitemap.xml & simplified footer navigation

---

## 📝 License

This project is proprietary to **NTC Luxury Travels**. All rights reserved.

---

## 👨‍💼 Contact & Support

**Project Manager:** MikeDev  
**Email:** armonkiller616@gmail.com  
**GitHub:** [MaickR](https://github.com/MaickR)

---

## 📸 Screenshots

*Homepage Hero Section:* Full-width background with tour showcase  
*Tour Details Page:* Tabbed interface (Overview, Itinerary, Includes, Map)  
*Booking Form:* WhatsApp integration with smart field selection

---

<div align="center">

**🌴 Discover the Magic of Chiapas, Petén & Antigua 🌴**

*NTC Luxury Travels — Where Every Journey Becomes a Lifetime Memory*

</div>
