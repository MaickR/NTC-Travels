<?php
$page_title = "NTC Travels & Dreams - Your Trusted Travel Agency | Tailor Made Tours & Luxury Travel";
$page_description = "NTC Travels & Dreams delivers tailored travel planning for unforgettable journeys across Egypt, India, and beyond. Personalized tours and luxury packages.";
$page_keywords = "travel agency, tailor made tours, luxury travel, Egypt tour, India tour";
$canonical_url = "https://www.ntcluxurytravels.com/";
$current_page = 'home';
include 'includes/head.php';
include 'includes/picture.php';
include 'includes/header.php';
?>

    <!-- banner starts -->
    <section class="banner overflow-hidden" id="banner" aria-label="Featured Tours Slider">
      <div class="slider top50">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="slide-inner">
                <div
                  class="slide-image"
                  style="
                    background-image: url(images/optimized/egipto/egypt-400w.webp);
                  "
                  role="img"
                  aria-label="Pyramids of Giza"
                ></div>
                <div class="swiper-content">
                  <div class="entry-meta mb-2">
                    <span class="entry-category mb-0 white h5-style">Egypt</span>
                  </div>
                  <h2 class="mb-2 h1-style"><a href="/tour-egypt" class="white">The Gift of the Nile</a></h2>
                  <p class="white mb-4">
                    Explore the Pyramids, sail the Nile on a private Dahabiya, and discover the secrets of the Pharaohs.
                  </p>
                </div>
                <div class="dot-overlay"></div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-inner">
                <div
                  class="slide-image"
                  style="background-image: url(images/optimized/india/india-1-1200w.webp)"
                  role="img"
                  aria-label="Taj Mahal in India"
                ></div>
                <div class="swiper-content">
                  <div class="entry-meta mb-2">
                    <span class="entry-category mb-0 white h5-style">Incredible India</span>
                  </div>
                  <h2 class="mb-2 h1-style">
                    <a href="/tour-india" class="white">The Golden Triangle & Beyond</a>
                  </h2>
                  <p class="white mb-4">
                    Immerse yourself in the vibrant culture of Delhi, Jaipur, and Agra. Witness the majesty of the Taj Mahal.
                  </p>
                </div>
                <div class="dot-overlay"></div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-inner">
                <div
                  class="slide-image"
                  style="background-image: url(images/optimized/india/india-journey-1200w.webp)"
                  role="img"
                  aria-label="Varanasi Ganges River"
                ></div>
                <div class="swiper-content">
                  <div class="entry-meta mb-2">
                    <span class="entry-category mb-0 white h5-style">Spiritual Varanasi</span>
                  </div>
                  <h2 class="mb-2 h1-style">
                    <a href="/tour-india" class="white">Ganges River & Ancient Traditions</a>
                  </h2>
                  <p class="white mb-4">
                    Experience the spiritual heart of India in Varanasi. Witness the Ganga Aarti and explore the oldest living city.
                  </p>
                </div>
                <div class="dot-overlay"></div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-inner">
                <div
                  class="slide-image"
                  style="background-image: url(images/optimized/india/india-hotel-1-800w.webp)"
                  role="img"
                  aria-label="Luxury Hotel Interior"
                ></div>
                <div class="swiper-content">
                  <div class="entry-meta mb-2">
                    <span class="entry-category mb-0 white h5-style">Luxury Stays</span>
                  </div>
                  <h2 class="mb-2 h1-style">
                    <a href="/tour-india" class="white">Experience Royal Hospitality</a>
                  </h2>
                  <p class="white mb-4">
                    Stay in world-class 5-star hotels and heritage properties. Enjoy the finest Indian hospitality and comfort.
                  </p>
                </div>
                <div class="dot-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next" aria-label="Next slide" role="button"></div>
      <div class="swiper-button-prev" aria-label="Previous slide" role="button"></div>
    </section>
    <!-- banner ends -->

    <!-- about-us starts -->
    <section class="about-us pt-10 about-bg-section" id="about-us">
      <div class="container">
        <!-- why us starts -->
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="about_us__ot position-relative mb-lg-0 mb-4">
              <span class="experience-badge">15+ Years of Excellence</span>
              <?= ntc_picture('images/new-deal/deal1.jpg', 'Travelers enjoying a scenic adventure', [
                'class' => 'img-fluid rounded mt-3',
                'width' => 600,
                'height' => 400,
                'loading' => 'lazy',
                'sizes' => '(max-width: 768px) 100vw, 50vw'
              ]) ?>
              <div class="video-thumbnail mt-3">
                <img
                  src="images/optimized/Banner/canyon-800w.webp"
                  alt="Adventure destination"
                  width="800"
                  height="533"
                  loading="lazy"
                  decoding="async"
                  onerror="this.onerror = null; this.src = 'images/optimized/Banner/canyon-800w.jpg';"
                />
                <div class="video-figure"></div>
              </div>
              <img
                src="images/icons/009-airplane.png"
                class="icon__png"
                alt=""
                aria-hidden="true"
                width="50"
                height="50"
                loading="lazy"
                decoding="async"
              />
              <div class="dot-pattern"></div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="d-flex flex-column text-center text-lg-start">
              <span class="theme h4-style mb-0 d-block">About NTC Travels & Dreams</span>
              <h2 class="fw-bold">Crafting Extraordinary Journeys Around the World</h2>
              <p class="text-muted">
                At NTC Travels & Dreams, we specialize in creating bespoke travel experiences that transform ordinary
                trips into unforgettable adventures. From the pristine beaches of the Caribbean to the mystical
                landscapes of Central America, we curate every detail to ensure your journey exceeds expectations. Our
                passion is turning your travel dreams into reality.
              </p>

              <div class="counter-main w-100 float-start z-index3 position-relative">
                <div class="p-4 pb-0 box-shadow bg-white rounded mt-4">
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
                      <div class="counter-item text-center">
                        <div class="counter-content">
                          <h2 class="mb-2 theme"><span class="value" data-count="15">15</span></h2>
                          <span class="m-0 d-block">Years of Excellence</span>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
                      <div class="counter-item text-center">
                        <div class="counter-content">
                          <h2 class="mb-2 theme"><span class="value" data-count="350">350</span>+</h2>
                          <span class="m-0 d-block">Destinations Worldwide</span>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
                      <div class="counter-item text-center">
                        <div class="counter-content">
                          <h2 class="mb-2 theme"><span class="value" data-count="12">12</span>K+</h2>
                          <span class="m-0 d-block">Happy Travelers</span>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
                      <div class="counter-item text-center">
                        <div class="counter-content">
                          <h2 class="mb-2 theme"><span class="value" data-count="100">100</span>%</h2>
                          <span class="m-0 d-block">Client Satisfaction</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- why us ends -->
      </div>
      <div class="white-overlay"></div>
    </section>
    <!-- about-us ends -->

    <!--? Offers start -->
    <section class="offers-main pt-0 pb-6">
      <div class="container">
        <div class="row g-4">
          <!-- Offer Card 1: All Inclusive / Benefits -->
          <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="offer-card h-100">
              <div class="offer-card-image">
                <img
                  src="images/optimized/india/india-hotel-800w.webp"
                  alt="All Inclusive Luxury Travel Experience"
                  width="800"
                  height="533"
                  loading="lazy"
                  style="height: 100%; object-fit: cover"
                  onerror="this.onerror = null; this.src = 'images/optimized/india/india-hotel-800w.jpg';"
                />
                <div class="offer-card-badge">Benefits</div>
              </div>
              <div class="offer-card-content">
                <h3 class="offer-card-title">All-Inclusive Experience</h3>
                <p class="offer-card-subtitle">Luxury & Comfort Included</p>
                <p class="offer-card-description">
                  Enjoy a worry-free journey with our all-inclusive packages. From 5-star hotels and gourmet meals to
                  expert guides and VIP transfers, we cover every detail so you can focus on the experience.
                </p>
                <div class="offer-card-highlight">
                  <span class="offer-label">Early Bird Deal</span>
                  <span class="offer-price">$200 OFF</span>
                </div>
                <div class="offer-card-features">
                  <div class="feature-item">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>5-Star Accommodations</span>
                  </div>
                  <div class="feature-item">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Expert Local Ambassadors</span>
                  </div>
                  <div class="feature-item">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>VIP Access & Transfers</span>
                  </div>
                </div>
                <a href="#contact" class="offer-card-btn" aria-label="Claim All-Inclusive Offer">Claim Offer</a>
              </div>
            </div>
          </div>

          <!-- Offer Card 2: Payment Plans -->
          <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="offer-card h-100">
              <div class="offer-card-image">
                <img
                  src="images/optimized/india/india-5-800w.webp"
                  alt="Flexible Payment Plans for Travel"
                  width="800"
                  height="533"
                  loading="lazy"
                  style="height: 100%; object-fit: cover"
                  onerror="this.onerror = null; this.src = 'images/optimized/india/india-5-800w.jpg';"
                />
                <div class="offer-card-badge">Finance</div>
              </div>
              <div class="offer-card-content">
                <h3 class="offer-card-title">Book Now, Pay Later</h3>
                <p class="offer-card-subtitle">0% Interest Financing</p>
                <p class="offer-card-description">
                  Make your dream vacation a reality without the financial stress. Secure your spot with a small deposit
                  and spread the remaining cost over convenient monthly payments.
                </p>
                <div class="offer-card-highlight">
                  <span class="offer-label">Payment Plan</span>
                  <span class="offer-price">4 Months</span>
                </div>
                <div class="offer-card-features">
                  <div class="feature-item">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Small Initial Deposit</span>
                  </div>
                  <div class="feature-item">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Up to 4 Installments</span>
                  </div>
                  <div class="feature-item">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>0% Interest Rates</span>
                  </div>
                </div>
                <a href="#contact" class="offer-card-btn" aria-label="Plan Your Trip with Financing">Plan Your Trip</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--! Offers ends -->

    <!-- best tour Starts -->
    <section class="trending bg-grey pt-17 pb-6" id="tours">
      <div class="section-shape section-shape-top top-0"></div>
      <div class="container">
        <div class="row align-items-center justify-content-center mb-6 text-center">
          <div class="col-lg-8">
            <div class="section-title">
              <span
                class="badge rounded-pill px-3 py-2 mb-3"
                style="background-color: rgba(191, 48, 58, 0.12); color: var(--color-accent)"
                >Signature International Journeys</span
              >
              <h2 class="mb-2">Explore Our <span class="theme">Curated Adventures</span></h2>
              <p class="lead text-muted mb-3">
                Discover the world with NTC Travels. From the ancient wonders of <strong>Egypt</strong> to the spiritual
                depths of <strong>Incredible India</strong>.
              </p>
              <p class="mb-0 text-muted">
                Handpicked itineraries, 4-5 star accommodations, and expert guides for an unforgettable experience.
              </p>
            </div>
          </div>
        </div>
        <div class="trend-box tour-grid">
          <div class="row align-items-stretch justify-content-center">

            <!-- Single Package: Egypt Dahabiya 11 Days -->
            <div class="col-12 col-md-6 col-lg-4 mb-4">
              <div class="trend-item tour-card rounded box-shadow bg-white h-100 d-flex flex-column">
                <div class="trend-image tour-card__image position-relative" style="height: 220px; overflow: hidden">
                  <?= ntc_picture('images/egipto/egypt.jpg', 'Egypt Pyramids and Dahabiya', [
                    'width' => 600,
                    'height' => 400,
                    'loading' => 'lazy',
                    'style' => 'height: 100%; object-fit: cover; width: 100%',
                    'sizes' => '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px'
                  ]) ?>
                  <div class="color-overlay"></div>
                  <div class="ribbon ribbon-top-left"><span class="fw-bold">New</span></div>
                </div>
                <div class="trend-content tour-card__content p-3 pt-5 position-relative d-flex flex-column flex-grow-1">
                  <div class="trend-meta tour-card__meta bg-theme white px-3 py-2 rounded mb-2 d-inline-block">
                    <div class="entry-author">
                      <i class="icon-calendar" aria-hidden="true"></i>
                      <span class="fw-bold">Sept 16 - 26, 2026 (11 Days)</span>
                    </div>
                  </div>

                  <div class="theme mb-1 h6-style">
                    <i class="flaticon-location-pin" aria-hidden="true"></i> Cairo → Nile Cruise → Luxor
                  </div>
                  <h3 class="mb-2 h4-style">
                    <a href="/tour-egypt" class="text-decoration-none">Egypt on Dahabiya</a>
                  </h3>
                  <p class="text-muted small mb-2">Exclusive Private Sailing on the Nile</p>

                  <p class="text-muted small mb-3">
                    Discover the land of Pharaohs in style. 3 nights in Cairo and 5 nights aboard a private Dahabiya
                    sailing the Nile. A truly exclusive experience away from the crowds.
                  </p>

                  <div class="mb-3">
                    <div class="p-2 bg-light rounded">
                      <h6 class="mb-1 small">
                        <i class="fa fa-tag theme me-2" aria-hidden="true"></i> Price Per Person
                      </h6>
                      <div class="theme fw-bold mb-0 h5-style" id="egypt-price-card">$4,190 USD</div>
                      <small class="text-muted d-block">All Inclusive</small>
                      <small
                        class="d-block mt-1"
                        id="egypt-discount-card"
                        style="color: #bf303a !important; font-weight: bold"
                        >$200 USD OFF if booked before Dec 31!</small
                      >
                    </div>
                  </div>

                  <div class="mb-3">
                    <h6 class="fw-bold small mb-2">
                      <i class="fa fa-check-circle theme me-2" aria-hidden="true"></i> Includes:
                    </h6>
                    <ul class="list-unstyled small">
                      <li class="mb-1">
                        <i class="fa fa-check theme me-1" aria-hidden="true"></i> Private Dahabiya Charter
                      </li>
                      <li class="mb-1">
                        <i class="fa fa-check theme me-1" aria-hidden="true"></i> 5-Star Hotels in Cairo/Luxor
                      </li>
                      <li class="mb-1">
                        <i class="fa fa-check theme me-1" aria-hidden="true"></i> Domestic Flights Included
                      </li>
                      <li class="mb-1">
                        <i class="fa fa-check theme me-1" aria-hidden="true"></i> Private Egyptologist Guide
                      </li>
                      <li class="mb-1">
                        <i class="fa fa-check theme me-1" aria-hidden="true"></i> All Meals on Cruise
                      </li>
                    </ul>
                  </div>

                  <div class="entry-meta border-top pt-2 mt-auto">
                    <div class="entry-author d-flex align-items-center gap-2 flex-wrap justify-content-center">
                      <a href="/tour-egypt" class="nir-btn small" aria-label="View details for Egypt Tour"
                        ><i class="fa fa-info-circle me-1" aria-hidden="true"></i> Details</a
                      >
                      <a
                        href="#"
                        class="nir-btn-white small card-whatsapp-btn"
                        data-tour="egypt"
                        onclick="return handleCardWhatsApp(event, 'egypt');"
                        aria-label="Book Egypt Tour on WhatsApp"
                        ><i class="fab fa-whatsapp me-1" aria-hidden="true"></i> Book</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Single Package: Incredible India 12 Days -->
            <div class="col-12 col-md-6 col-lg-4 mb-4">
              <div class="trend-item tour-card rounded box-shadow bg-white h-100 d-flex flex-column">
                <div class="trend-image tour-card__image position-relative" style="height: 220px; overflow: hidden">
                  <?= ntc_picture('images/india/india-1.jpg', 'Taj Mahal and Incredible India Journey', [
                    'width' => 600,
                    'height' => 400,
                    'loading' => 'lazy',
                    'style' => 'height: 100%; object-fit: cover; width: 100%',
                    'sizes' => '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px'
                  ]) ?>
                  <div class="color-overlay"></div>
                  <div class="ribbon ribbon-top-left"><span class="fw-bold">New</span></div>
                </div>
                <div class="trend-content tour-card__content p-3 pt-5 position-relative d-flex flex-column flex-grow-1">
                  <div class="trend-meta tour-card__meta bg-theme white px-3 py-2 rounded mb-2 d-inline-block">
                    <div class="entry-author">
                      <i class="icon-calendar" aria-hidden="true"></i>
                      <span class="fw-bold">April 22 - May 3, 2026 (12 days)</span>
                    </div>
                  </div>

                  <div class="theme mb-1 h6-style">
                    <i class="flaticon-location-pin" aria-hidden="true"></i> Delhi → Jaipur → Agra → Varanasi →
                    Rishikesh
                  </div>
                  <h3 class="mb-2 h4-style"><a href="/tour-india" class="text-decoration-none">India</a></h3>
                  <p class="text-muted small mb-2">A dream full of contrasts, spirituality, and experiences</p>

                  <p class="text-muted small mb-3">
                    Experience a sensory, cultural, and spiritual journey through the heart of India. Discover its
                    vibrant culture, sacred places, and timeless traditions in an exclusive group of 20-30 travelers.
                  </p>

                  <div class="mb-3">
                    <div class="p-2 bg-light rounded">
                      <h6 class="mb-1 small">
                        <i class="fa fa-tag theme me-2" aria-hidden="true"></i> Price Per Person
                      </h6>
                      <div class="theme fw-bold mb-0 h5-style">$4,390 USD</div>
                      <small class="text-muted d-block">All Inclusive</small>
                      <small class="text-muted d-block mt-1" style="color: #bf303a !important; font-weight: bold"
                        >$200 USD OFF if booked before Dec 15</small
                      >
                    </div>
                  </div>

                  <div class="mb-3">
                    <h6 class="fw-bold small mb-2">
                      <i class="fa fa-check-circle theme me-2" aria-hidden="true"></i> Includes:
                    </h6>
                    <ul class="list-unstyled small">
                      <li class="mb-1">
                        <i class="fa fa-check theme me-1" aria-hidden="true"></i> 5-star & Heritage Hotels
                      </li>
                      <li class="mb-1">
                        <i class="fa fa-check theme me-1" aria-hidden="true"></i> All transfers & guided tours
                      </li>
                      <li class="mb-1">
                        <i class="fa fa-check theme me-1" aria-hidden="true"></i> Domestic flights included
                      </li>
                      <li class="mb-1">
                        <i class="fa fa-check theme me-1" aria-hidden="true"></i> English speaking Ambassador
                      </li>
                      <li class="mb-1">
                        <i class="fa fa-check theme me-1" aria-hidden="true"></i> Monument entrance fees
                      </li>
                    </ul>
                  </div>

                  <div class="entry-meta border-top pt-2 mt-auto">
                    <div class="entry-author d-flex align-items-center gap-2 flex-wrap justify-content-center">
                      <a
                        href="/tour-india"
                        class="nir-btn small"
                        aria-label="View details for Incredible India Journey"
                        ><i class="fa fa-info-circle me-1" aria-hidden="true"></i> Details</a
                      >
                      <a
                        href="#"
                        class="nir-btn-white small card-whatsapp-btn"
                        data-tour="india"
                        onclick="return handleCardWhatsApp(event, 'india');"
                        aria-label="Book Incredible India Journey on WhatsApp"
                        ><i class="fab fa-whatsapp me-1" aria-hidden="true"></i> Book</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-5">
          <p class="mb-3 fw-bold text-muted">Looking for a custom variation of the route?</p>
          <a href="#contact" class="nir-btn"><i class="fa fa-map-marked-alt me-2"></i>Request a Tailored Itinerary</a>
        </div>
      </div>
    </section>
    <!-- best tour Ends -->

    <!-- contact starts -->
    <section class="contact-main pt-6 pb-60" id="contact">
      <div class="container">
        <div class="contact-info-main mt-0">
          <div class="row">
            <div class="col-lg-10 col-offset-lg-1 mx-auto">
              <div class="contact-info bg-white">
                <div class="contact-info-title text-center mb-4 px-5">
                  <h3 class="mb-1">Connect With NTC Travels & Dreams</h3>
                  <p class="mb-0">
                    Ready to embark on a journey of a lifetime? Discover the magic of India with our exclusive
                    <strong>Incredible India Journey</strong> (12 Days | $4,390 USD). We offer flexible payment plans,
                    premium accommodations, and expert local guides to ensure an unforgettable experience.
                  </p>
                </div>
                <div class="contact-info-content row mb-1">
                  <div class="col-lg-4 col-md-6 mb-4 d-flex">
                    <div class="info-item bg-lgrey px-4 py-5 border-all text-center rounded w-100 d-flex flex-column">
                      <div class="info-icon mb-3 d-flex justify-content-center align-items-center" style="height: 80px">
                        <i class="fa fa-phone theme" style="font-size: 3.5rem"></i>
                      </div>
                      <div class="info-content flex-grow-1 d-flex flex-column justify-content-center">
                        <h3>WhatsApp</h3>
                        <p class="m-0">+1 408-609-0027</p>
                        <p class="small text-muted m-0">Chat with us directly!</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4 d-flex">
                    <div class="info-item bg-lgrey px-4 py-5 border-all text-center rounded w-100 d-flex flex-column">
                      <div class="info-icon mb-3 d-flex justify-content-center align-items-center" style="height: 80px">
                        <i class="fa fa-clock theme" style="font-size: 3.5rem"></i>
                      </div>
                      <div class="info-content flex-grow-1 d-flex flex-column justify-content-center">
                        <h3>Response Time</h3>
                        <p class="m-0">Within 24 Hours</p>
                        <p class="small text-muted m-0">Monday - Sunday, 9AM-9PM</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12 mb-4 d-flex">
                    <div class="info-item bg-lgrey px-4 py-5 border-all text-center rounded w-100 d-flex flex-column">
                      <div class="info-icon mb-3 d-flex justify-content-center align-items-center" style="height: 80px">
                        <i class="fa fa-globe theme" style="font-size: 3.5rem"></i>
                      </div>
                      <div class="info-content flex-grow-1 d-flex flex-column justify-content-center">
                        <h3>Website</h3>
                        <p class="m-0">www.ntcluxurytravels.com</p>
                        <p class="small text-muted m-0">Book online anytime!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="contact-form1" class="contact-form">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="bg-lgrey rounded p-5">
                        <h4 class="mb-4 theme">Why Book With Us?</h4>
                        <ul class="list-unstyled">
                          <li class="mb-3">
                            <i class="fa fa-check theme me-2"></i> <strong>Complete All-Inclusive Packages</strong> -
                            Entire trip included, no hidden costs
                          </li>
                          <li class="mb-3">
                            <i class="fa fa-check theme me-2"></i> <strong>Flexible Payment Plans</strong> - Monthly
                            installments available (0% interest)
                          </li>
                          <li class="mb-3">
                            <i class="fa fa-check theme me-2"></i> <strong>Expert Local Guides</strong> - Authentic
                            experiences and cultural immersion
                          </li>
                          <li class="mb-3">
                            <i class="fa fa-check theme me-2"></i> <strong>Personalized Service</strong> - Tailored
                            attention for every traveler
                          </li>
                          <li class="mb-3">
                            <i class="fa fa-check theme me-2"></i> <strong>24/7 Support</strong> - We answer WhatsApp
                            within 24 hours
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div id="contactform-error-msg"></div>
                      <form
                        method="post"
                        action="#"
                        name="contactform_ntc"
                        id="contactform_ntc"
                        onsubmit="handleContactFormNTC(event)"
                      >
                        <!-- BASIC INFO -->
                        <h5 class="mb-3 theme">Your Information</h5>
                        <div class="form-group mb-2">
                          <input
                            type="text"
                            name="first_name"
                            class="form-control"
                            id="ntc_fullname"
                            placeholder="Full Name *"
                            required
                          />
                        </div>
                        <div class="form-group mb-2">
                          <input
                            type="email"
                            name="email"
                            class="form-control"
                            id="ntc_email"
                            placeholder="Email Address *"
                            required
                          />
                        </div>
                        <div class="form-group mb-3">
                          <input
                            type="tel"
                            name="phone"
                            class="form-control"
                            id="ntc_phone"
                            placeholder="WhatsApp Number (e.g., +1 408-609-0027) *"
                            required
                          />
                        </div>

                        <div class="form-group mb-3">
                          <input
                            type="text"
                            name="departure_city"
                            class="form-control"
                            id="ntc_departure_city"
                            placeholder="Home City / Departure Airport"
                          />
                          <small class="text-muted d-block mt-1"
                            >Required for flight quotes. Example: New York, USA.</small
                          >
                        </div>

                        <!-- INQUIRY TYPE -->
                        <h5 class="mb-3 theme">How Can We Help?</h5>
                        <div class="form-group mb-3">
                          <select
                            name="inquiry_type"
                            class="form-control"
                            id="ntc_inquiry_type"
                            required
                            onchange="updateFormFields()"
                          >
                            <option value="">-- Select One --</option>
                            <option value="booking_india">Book: Incredible India (Apr 2026)</option>
                            <option value="booking_egypt">Book: Egypt on Dahabiya (Sept 2026)</option>
                            <option value="question_india">Question: India Tour</option>
                            <option value="question_egypt">Question: Egypt Tour</option>
                            <option value="question_general">Question: General / Custom Trip</option>
                          </select>
                        </div>

                        <!-- NUMBER OF TRAVELERS -->
                        <div class="form-group mb-3" id="travelers_group" style="display: none">
                          <label class="mb-2 form-label fw-bold">How Many People Will Travel?</label>
                          <select name="travelers_count" class="form-control" id="ntc_travelers_count">
                            <option value="">-- Select number of people --</option>
                            <option value="1">1 Person</option>
                            <option value="2">2 People (Couple/Friends)</option>
                            <option value="3">3 People</option>
                            <option value="4">4 People</option>
                            <option value="5">5 People</option>
                            <option value="6">6 People</option>
                            <option value="7-10">7-10 People (Group)</option>
                            <option value="10+">10+ People (Large Group)</option>
                          </select>
                          <small class="text-muted d-block mt-1">Group discounts available for 5+ people</small>
                        </div>

                        <div class="form-group mb-3" id="travel_style_group" style="display: none">
                          <label class="mb-2 form-label fw-bold">Who will be traveling?</label>
                          <select name="travel_style" class="form-control" id="ntc_travel_style">
                            <option value="">-- Select traveler profile --</option>
                            <option value="couple">Couple getaway</option>
                            <option value="family">Family trip (kids included)</option>
                            <option value="friends">Friends or small group</option>
                            <option value="solo">Solo traveler</option>
                            <option value="corporate">Corporate / incentive group</option>
                          </select>
                        </div>

                        <div class="form-group mb-3" id="priority_group" style="display: none">
                          <label class="mb-2 form-label fw-bold">What matters most for this trip?</label>
                          <select name="primary_interest" class="form-control" id="ntc_primary_interest">
                            <option value="">-- Select top priority --</option>
                            <option value="culture">Culture & local immersion</option>
                            <option value="nature">Nature & outdoor adventure</option>
                            <option value="photography">Photography & scenic viewpoints</option>
                            <option value="luxury">Luxury & comfort upgrades</option>
                            <option value="custom">Help me customize the experience</option>
                          </select>
                          <small class="text-muted d-block mt-1"
                            >We tailor excursions, hotels, and pace based on what you value most.</small
                          >
                        </div>

                        <!-- TRAVEL DATES -->
                        <div class="form-group mb-3" id="dates_group" style="display: none">
                          <label class="mb-2 form-label fw-bold">Preferred Travel Dates or Flexibility</label>
                          <input
                            type="text"
                            name="travel_dates"
                            class="form-control"
                            id="ntc_travel_dates"
                            placeholder="e.g., April 22 - May 3, 2026 or 'Flexible'"
                          />
                          <small class="text-muted d-block mt-1" id="tour_dates_info"></small>
                        </div>

                        <!-- PAYMENT PLAN -->
                        <div class="form-group mb-3" id="payment_group" style="display: none">
                          <label class="mb-2 form-label fw-bold">Payment Preference</label>
                          <select name="payment_option" class="form-control" id="ntc_payment_option">
                            <option value="">-- Select payment method --</option>
                            <option value="full_payment">Full Payment (5% Discount)</option>
                            <option value="2_installments">2 Installments (0% Interest)</option>
                            <option value="3_installments">3 Installments (0% Interest)</option>
                            <option value="4_installments">4 Monthly Installments (0% Interest)</option>
                            <option value="ask_options">Tell me available options</option>
                          </select>
                          <small class="text-muted d-block mt-1">All installment plans have 0% interest</small>
                        </div>

                        <!-- SPECIAL REQUESTS & QUESTIONS -->
                        <h5 class="mb-3 theme">Additional Details</h5>
                        <div class="form-group mb-2">
                          <label class="mb-2 form-label fw-bold">Any Special Requests or Questions?</label>
                          <textarea
                            name="comments"
                            class="form-control"
                            id="ntc_comments"
                            placeholder="Tell us about dietary restrictions, special occasions, accessibility needs, or anything else you'd like us to know..."
                            rows="4"
                          ></textarea>
                          <small class="text-muted d-block mt-1">Optional but helpful for us to serve you better</small>
                        </div>

                        <!-- CONTACT CONFIRMATION -->
                        <div class="form-group mb-3">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="ntc_contact_me"
                              name="contact_me"
                              checked
                            />
                            <label class="form-check-label" for="ntc_contact_me">
                              Contact me via WhatsApp with details and confirmation
                            </label>
                          </div>
                        </div>

                        <!-- SUBMIT -->
                        <div class="comment-btn text-center">
                          <input type="submit" class="nir-btn w-100" id="ntc_submit" value="Send to WhatsApp" />
                        </div>
                        <p class="text-center small text-muted mt-3">
                          Your information will be sent to our WhatsApp line.<br />
                          We'll respond with pricing, availability & confirmation within 24 hours!
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- contact Ends -->

<?php include 'includes/footer.php'; ?>
<?php include 'includes/scripts.php'; ?>
