<?php
$page_title = "Egypt on Dahabiya: Cairo & Nile 11 Days | NTC Travels & Dreams";
$page_description = "Experience Egypt in 11 days: Cairo, the Pyramids, and a private Dahabiya cruise on the Nile with NTC Travels & Dreams.";
$page_keywords = "Egypt tour, Dahabiya cruise, Cairo, Nile cruise, Pyramids";
$canonical_url = "https://www.ntcluxurytravels.com/tour-egypt";
$og_image = "https://www.ntcluxurytravels.com/images/optimized/egipto/pyramids-1920.webp";
$current_page = 'tours';
include 'includes/head.php';
include 'includes/picture.php';
include 'includes/header.php';
?>

    <!-- BreadCrumb Starts -->
    <section class="breadcrumb-main breadcrumb-egypt pb-20 pt-14">
      <div
        class="section-shape section-shape1 top-inherit bottom-0"
        style="background-image: url(images/shape8.png)"
      ></div>
      <div class="breadcrumb-outer">
        <div class="container">
          <div class="breadcrumb-content text-center">
            <h1 class="mb-3">Egypt on Dahabiya</h1>
            <h4 class="white mb-4">The Grand Journey NTC Style</h4>
            <p class="white mb-4">Sept 16-26, 2026 | 11 Days / 10 Nights | Private Cruise</p>
            <nav aria-label="breadcrumb" class="d-block">
              <ul class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="/#tours">Tours</a></li>
                <li class="breadcrumb-item active" aria-current="page">Egypt (11 Days)</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <!-- BreadCrumb Ends -->

    <!-- Tour Details Starts -->
    <section class="trending pt-6 pb-0 bg-lgrey overflow-hidden">
      <div class="tabs-navbar1 bg-white sticky1 bordernone py-3 tab-sticky">
        <ul id="tabs" class="nav nav-tabs bordernone mb-0 overflow-visible" role="tablist">
          <li class="active" role="presentation">
            <a
              data-toggle="tab"
              href="#highlight"
              role="tab"
              aria-controls="highlight"
              aria-selected="true"
              id="highlight-tab"
              >Overview</a
            >
          </li>
          <li role="presentation">
            <a
              data-toggle="tab"
              href="#itinerary"
              role="tab"
              aria-controls="itinerary"
              aria-selected="false"
              id="itinerary-tab"
              >Itinerary</a
            >
          </li>
          <li role="presentation">
            <a
              data-toggle="tab"
              href="#includes"
              role="tab"
              aria-controls="includes"
              aria-selected="false"
              id="includes-tab"
              >Includes</a
            >
          </li>
          <li role="presentation">
            <a
              data-toggle="tab"
              href="#single-map"
              role="tab"
              aria-controls="single-map"
              aria-selected="false"
              id="single-map-tab"
              >Map</a
            >
          </li>
        </ul>
      </div>
      <div class="container">
        <div class="single-content tour-details">
          <div id="highlight" role="tabpanel" aria-labelledby="highlight-tab">
            <div class="single-full-title border-b mb-2 pb-2">
              <div class="single-title text-center">
                <h2 class="mb-1">Egypt on Dahabiya</h2>
                <p class="lead text-muted mb-3">A unique experience sailing the Nile in private</p>
                <p class="lead text-muted mb-3"><strong>Sept 16 - 26, 2026</strong> | 11 Days / 10 Nights</p>
                <div class="rating-main">
                  <p class="mb-0 me-2 d-inline-block">
                    <i class="fa fa-map-marker"></i> <strong>Route:</strong> Cairo → Aswan → Nile Cruise → Luxor → Cairo
                  </p>
                </div>
              </div>
            </div>

            <div class="description-images mb-4">
              <div class="row">
                <div class="col">
                  <?= ntc_picture('images/egipto/egypt.jpg', 'Giza Pyramids', [
                    'class' => 'rounded w-100',
                    'width' => 400,
                    'height' => 220,
                    'loading' => 'lazy',
                    'style' => 'height: 220px; object-fit: cover',
                    'sizes' => '(max-width: 768px) 100vw, 33vw'
                  ]) ?>
                </div>
                <div class="col">
                  <?= ntc_picture('images/india/india-4.jpg', 'Ancient Temple', [
                    'class' => 'rounded w-100',
                    'width' => 400,
                    'height' => 220,
                    'loading' => 'lazy',
                    'style' => 'height: 220px; object-fit: cover',
                    'sizes' => '(max-width: 768px) 100vw, 33vw'
                  ]) ?>
                </div>
                <div class="col">
                  <?= ntc_picture('images/egipto/egypt.jpg', 'Nile Cruise on Dahabiya', [
                    'class' => 'rounded w-100',
                    'width' => 400,
                    'height' => 220,
                    'loading' => 'lazy',
                    'style' => 'height: 220px; object-fit: cover',
                    'sizes' => '(max-width: 768px) 100vw, 33vw'
                  ]) ?>
                </div>
              </div>
            </div>

            <div class="description mb-4">
              <h3>Why choose this trip to Egypt?</h3>
              <p>
                Discover Egypt in the most exclusive and authentic way: aboard a <strong>Dahabiya</strong>, a
                traditional luxury sailboat reserved privately for our group. Forget the large crowded cruise ships and
                sail the Nile calmly, visiting islands and temples at your own pace.
              </p>
              <p>
                This 11-day journey includes 3 nights in Cairo to marvel at the Pyramids and the new Grand Egyptian
                Museum, followed by 5 nights of magical sailing from Aswan to Luxor, and ending with 2 nights in Luxor
                to deeply explore the Valley of the Kings. All with private English/Spanish speaking guides and
                first-class services.
              </p>

              <div class="alert alert-success p-3 mb-3" id="egypt-main-discount">
                <strong>🎉 Early Bird Special!</strong> Book before December 31, 2025 and save
                <strong>$200 USD</strong>! Pay only <strong>$3,990 USD</strong> instead of $4,190 USD.
              </div>

              <ul class="list-unstyled mt-3">
                <li class="mb-2">
                  <i class="fa fa-check-circle theme me-2" aria-hidden="true"></i> <strong>Exclusive Cruise:</strong> 5
                  nights on a private Dahabiya (only 8 cabins).
                </li>
                <li class="mb-2">
                  <i class="fa fa-check-circle theme me-2" aria-hidden="true"></i> <strong>Deep Culture:</strong> Visit
                  the Grand Egyptian Museum, Sakkara, Coptic Quarter, and Citadel.
                </li>
                <li class="mb-2">
                  <i class="fa fa-check-circle theme me-2" aria-hidden="true"></i>
                  <strong>Iconic Monuments:</strong> Abu Simbel, Philae, Kom Ombo, Edfu, Karnak, Luxor, and Dendera.
                </li>
                <li class="mb-2">
                  <i class="fa fa-check-circle theme me-2" aria-hidden="true"></i>
                  <strong>All Inclusive:</strong> Domestic flights, full board on cruise, all entrance fees, and private
                  transfers.
                </li>
                <li class="mb-2">
                  <i class="fa fa-check-circle theme me-2" aria-hidden="true"></i>
                  <strong>Luxury Hotels:</strong> Steigenberger El Tahrir (Cairo) + Jolie Ville Hotel & Spa Kings Island
                  or Steigenberger Nile Palace (Luxor).
                </li>
              </ul>
            </div>

            <div class="tour-includes mb-4">
              <div class="includes-grid">
                <div class="include-item">
                  <i class="fa fa-calendar pink mr-1" aria-hidden="true"></i>
                  <span><strong>Dates:</strong> Sept 16-26, 2026</span>
                </div>
                <div class="include-item">
                  <i class="fa fa-users pink mr-1" aria-hidden="true"></i>
                  <span><strong>Group:</strong> Private (Max 16)</span>
                </div>
                <div class="include-item">
                  <i class="fa fa-ship pink mr-1" aria-hidden="true"></i>
                  <span><strong>Boat:</strong> Private Dahabiya</span>
                </div>
                <div class="include-item">
                  <i class="fa fa-plane pink mr-1" aria-hidden="true"></i>
                  <span><strong>Arrival:</strong> Cairo (CAI)</span>
                </div>
                <div class="include-item">
                  <i class="fa fa-flag pink mr-1" aria-hidden="true"></i>
                  <span><strong>Departure:</strong> Cairo (CAI)</span>
                </div>
                <div class="include-item">
                  <i class="fa fa-hotel pink mr-1" aria-hidden="true"></i>
                  <span><strong>Hotels:</strong> Luxury / 5 Stars</span>
                </div>
              </div>
            </div>
          </div>

          <!-- ITINERARY TAB -->
          <div id="itinerary" role="tabpanel" aria-labelledby="itinerary-tab">
            <div class="single-full-title border-b mb-4 pb-2">
              <h3 class="mb-0">Itinerary: 11 Days / 10 Nights</h3>
            </div>

            <!-- Day 1 -->
            <div class="itinerary-item mb-5 pb-4 border-bottom">
              <div class="row">
                <div class="col-lg-2 col-md-3 mb-3 mb-md-0">
                  <div class="day-badge bg-theme text-white p-2 rounded text-center">
                    <div class="day-number" style="font-size: 1.5rem; font-weight: bold">Day 1</div>
                    <div class="day-date">Sept 16</div>
                  </div>
                </div>
                <div class="col-lg-10 col-md-9">
                  <h4 class="mb-2">Arrival in Cairo</h4>
                  <p>
                    Arrival at Cairo International Airport. Reception by our representative for assistance with visa and
                    customs. Private transfer to the hotel.
                  </p>
                  <p class="text-muted mt-2">
                    <strong>Hotel:</strong> Steigenberger El Tahrir or similar | <strong>Accommodation</strong>
                  </p>
                </div>
              </div>
            </div>

            <!-- Day 2 -->
            <div class="itinerary-item mb-5 pb-4 border-bottom">
              <div class="row">
                <div class="col-lg-2 col-md-3 mb-3 mb-md-0">
                  <div class="day-badge bg-theme text-white p-2 rounded text-center">
                    <div class="day-number" style="font-size: 1.5rem; font-weight: bold">Day 2</div>
                    <div class="day-date">Sept 17</div>
                  </div>
                </div>
                <div class="col-lg-10 col-md-9">
                  <h4 class="mb-2">Pyramids, Sphinx & Grand Museum</h4>
                  <p>
                    Visit the <strong>Giza Pyramids</strong> and the mysterious Sphinx. Special lunch at
                    <em>9 Pyramids Lounge</em> with spectacular views.
                  </p>
                  <p>
                    In the afternoon, visit the galleries of the <strong>Grand Egyptian Museum</strong> (GEM), exploring
                    its treasures and monumental statues.
                  </p>
                  <p class="text-muted mt-2"><strong>Meals:</strong> Breakfast, Lunch</p>
                </div>
              </div>
            </div>

            <!-- Day 3 -->
            <div class="itinerary-item mb-5 pb-4 border-bottom">
              <div class="row">
                <div class="col-lg-2 col-md-3 mb-3 mb-md-0">
                  <div class="day-badge bg-theme text-white p-2 rounded text-center">
                    <div class="day-number" style="font-size: 1.5rem; font-weight: bold">Day 3</div>
                    <div class="day-date">Sept 18</div>
                  </div>
                </div>
                <div class="col-lg-10 col-md-9">
                  <h4 class="mb-2">Sakkara & Islamic/Coptic Cairo</h4>
                  <p>Visit the Necropolis of Sakkara and the Step Pyramid of Djoser. Local lunch.</p>
                  <p>
                    Tour of Islamic Cairo (Citadel, Alabaster Mosque) and the Coptic Quarter (Church of St. Sergius, Ben
                    Ezra Synagogue). Walk through the Khan El Khalili bazaar.
                  </p>
                  <p class="text-muted mt-2"><strong>Meals:</strong> Breakfast, Lunch</p>
                </div>
              </div>
            </div>

            <!-- Day 4 -->
            <div class="itinerary-item mb-5 pb-4 border-bottom">
              <div class="row">
                <div class="col-lg-2 col-md-3 mb-3 mb-md-0">
                  <div class="day-badge bg-theme text-white p-2 rounded text-center">
                    <div class="day-number" style="font-size: 1.5rem; font-weight: bold">Day 4</div>
                    <div class="day-date">Sept 19</div>
                  </div>
                </div>
                <div class="col-lg-10 col-md-9">
                  <h4 class="mb-2">Flight to Aswan & Dahabiya Embarkation</h4>
                  <p>
                    Flight to Aswan. Visit the Unfinished Obelisk and the romantic <strong>Philae Temple</strong> by
                    motorboat.
                  </p>
                  <p>
                    Transfer and embarkation on our <strong>Private Dahabiya</strong>. Lunch on board and start of
                    tranquil sailing on the Nile.
                  </p>
                  <p class="text-muted mt-2">
                    <strong>Accommodation:</strong> Dahabiya Boat | <strong>Meals:</strong> Breakfast, Lunch, Dinner
                  </p>
                </div>
              </div>
            </div>

            <!-- Day 5 -->
            <div class="itinerary-item mb-5 pb-4 border-bottom">
              <div class="row">
                <div class="col-lg-2 col-md-3 mb-3 mb-md-0">
                  <div class="day-badge bg-theme text-white p-2 rounded text-center">
                    <div class="day-number" style="font-size: 1.5rem; font-weight: bold">Day 5</div>
                    <div class="day-date">Sept 20</div>
                  </div>
                </div>
                <div class="col-lg-10 col-md-9">
                  <h4 class="mb-2">Abu Simbel</h4>
                  <p>
                    Land excursion to the majestic Temples of <strong>Abu Simbel</strong>, masterpiece of Ramses II.
                    Return to the boat, sailing and relaxation.
                  </p>
                  <p class="text-muted mt-2">
                    <strong>Accommodation:</strong> Dahabiya Boat | <strong>Meals:</strong> Breakfast, Lunch, Dinner
                  </p>
                </div>
              </div>
            </div>

            <!-- Day 6 -->
            <div class="itinerary-item mb-5 pb-4 border-bottom">
              <div class="row">
                <div class="col-lg-2 col-md-3 mb-3 mb-md-0">
                  <div class="day-badge bg-theme text-white p-2 rounded text-center">
                    <div class="day-number" style="font-size: 1.5rem; font-weight: bold">Day 6</div>
                    <div class="day-date">Sept 21</div>
                  </div>
                </div>
                <div class="col-lg-10 col-md-9">
                  <h4 class="mb-2">Sailing to Hardiab Island</h4>
                  <p>Day of scenic sailing enjoying the Nile. Arrival at Hardiab Island. Sunset tea.</p>
                  <p class="text-muted mt-2">
                    <strong>Accommodation:</strong> Dahabiya Boat | <strong>Meals:</strong> Breakfast, Lunch, Dinner
                  </p>
                </div>
              </div>
            </div>

            <!-- Day 7 -->
            <div class="itinerary-item mb-5 pb-4 border-bottom">
              <div class="row">
                <div class="col-lg-2 col-md-3 mb-3 mb-md-0">
                  <div class="day-badge bg-theme text-white p-2 rounded text-center">
                    <div class="day-number" style="font-size: 1.5rem; font-weight: bold">Day 7</div>
                    <div class="day-date">Sept 22</div>
                  </div>
                </div>
                <div class="col-lg-10 col-md-9">
                  <h4 class="mb-2">Kom Ombo & Ramadi Island</h4>
                  <p>
                    Sailing to Kom Ombo. Visit the double temple dedicated to Sobek and Horus. Continuation to El Ramadi
                    Island.
                  </p>
                  <p class="text-muted mt-2">
                    <strong>Accommodation:</strong> Dahabiya Boat | <strong>Meals:</strong> Breakfast, Lunch, Dinner
                  </p>
                </div>
              </div>
            </div>

            <!-- Day 8 -->
            <div class="itinerary-item mb-5 pb-4 border-bottom">
              <div class="row">
                <div class="col-lg-2 col-md-3 mb-3 mb-md-0">
                  <div class="day-badge bg-theme text-white p-2 rounded text-center">
                    <div class="day-number" style="font-size: 1.5rem; font-weight: bold">Day 8</div>
                    <div class="day-date">Sept 23</div>
                  </div>
                </div>
                <div class="col-lg-10 col-md-9">
                  <h4 class="mb-2">Edfu & Arrival in Luxor</h4>
                  <p>Visit the Temple of Horus in Edfu, the best preserved in Egypt. Final sailing towards Luxor.</p>
                  <p class="text-muted mt-2">
                    <strong>Accommodation:</strong> Dahabiya Boat | <strong>Meals:</strong> Breakfast, Lunch, Dinner
                  </p>
                </div>
              </div>
            </div>

            <!-- Day 9 -->
            <div class="itinerary-item mb-5 pb-4 border-bottom">
              <div class="row">
                <div class="col-lg-2 col-md-3 mb-3 mb-md-0">
                  <div class="day-badge bg-theme text-white p-2 rounded text-center">
                    <div class="day-number" style="font-size: 1.5rem; font-weight: bold">Day 9</div>
                    <div class="day-date">Sept 24</div>
                  </div>
                </div>
                <div class="col-lg-10 col-md-9">
                  <h4 class="mb-2">Luxor: West & East Banks</h4>
                  <p>
                    Disembarkation. Visit the West Bank: <strong>Valley of the Kings</strong>, Temple of Hatshepsut, and
                    Colossi of Memnon.
                  </p>
                  <p>Local lunch. Visit the East Bank: Karnak and Luxor Temples. Transfer to hotel.</p>
                  <p class="text-muted mt-2">
                    <strong>Hotel:</strong> Jolie Ville Hotel & Spa Kings Island or similar |
                    <strong>Meals:</strong> Breakfast, Lunch, Dinner
                  </p>
                </div>
              </div>
            </div>

            <!-- Day 10 -->
            <div class="itinerary-item mb-5 pb-4 border-bottom">
              <div class="row">
                <div class="col-lg-2 col-md-3 mb-3 mb-md-0">
                  <div class="day-badge bg-theme text-white p-2 rounded text-center">
                    <div class="day-number" style="font-size: 1.5rem; font-weight: bold">Day 10</div>
                    <div class="day-date">Sept 25</div>
                  </div>
                </div>
                <div class="col-lg-10 col-md-9">
                  <h4 class="mb-2">Abydos & Dendera</h4>
                  <p>
                    Excursion to the impressive temples of Abydos (Seti I) and Dendera (Hathor), architectural jewels
                    with magnificently preserved paintings.
                  </p>
                  <p class="text-muted mt-2">
                    <strong>Hotel:</strong> Jolie Ville Hotel & Spa Kings Island or similar |
                    <strong>Meals:</strong> Breakfast, Lunch, Dinner
                  </p>
                </div>
              </div>
            </div>

            <!-- Day 11 -->
            <div class="itinerary-item mb-5 pb-0">
              <div class="row">
                <div class="col-lg-2 col-md-3 mb-3 mb-md-0">
                  <div class="day-badge bg-theme text-white p-2 rounded text-center">
                    <div class="day-number" style="font-size: 1.5rem; font-weight: bold">Day 11</div>
                    <div class="day-date">Sept 26</div>
                  </div>
                </div>
                <div class="col-lg-10 col-md-9">
                  <h4 class="mb-2">Departure</h4>
                  <p>
                    Transfer to Luxor airport for flight to Cairo and connection with your international return flight.
                  </p>
                  <p class="text-muted mt-2"><strong>Meals:</strong> Breakfast</p>
                </div>
              </div>
            </div>
          </div>

          <!-- INCLUDES TAB -->
          <div id="includes" role="tabpanel" aria-labelledby="includes-tab">
            <div class="single-full-title border-b mb-4 pb-2">
              <h3 class="mb-0">Package Details</h3>
            </div>

            <div class="row mb-4">
              <div class="col-lg-6 col-md-6 mb-4">
                <div class="desc-box bg-light p-4 rounded h-100">
                  <h5 class="mb-3"><i class="fa fa-check-square theme me-2"></i> Included</h5>
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <i class="fa fa-check theme me-2"></i> <strong>Accommodation:</strong> 3 nights Cairo, 5 nights
                      Dahabiya, 2 nights Luxor.
                    </li>
                    <li class="mb-2">
                      <i class="fa fa-check theme me-2"></i> <strong>Meals:</strong> Full board on cruise and Luxor,
                      Breakfast + 2 lunches in Cairo.
                    </li>
                    <li class="mb-2">
                      <i class="fa fa-check theme me-2"></i> <strong>Domestic Flights:</strong> Cairo-Aswan and
                      Luxor-Cairo.
                    </li>
                    <li class="mb-2">
                      <i class="fa fa-check theme me-2"></i> <strong>Transport:</strong> Modern private buses with AC.
                    </li>
                    <li class="mb-2">
                      <i class="fa fa-check theme me-2"></i> <strong>Guide:</strong> Private Egyptologist guide.
                    </li>
                    <li class="mb-2">
                      <i class="fa fa-check theme me-2"></i> <strong>Entrance Fees:</strong> All visits mentioned in the
                      program.
                    </li>
                    <li class="mb-2">
                      <i class="fa fa-check theme me-2"></i> <strong>Exclusive:</strong> Private Dahabiya boat for the
                      group.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-6 col-md-6 mb-4">
                <div class="desc-box bg-light p-4 rounded h-100">
                  <h5 class="mb-3"><i class="fa fa-times-circle theme me-2"></i> Not Included</h5>
                  <ul class="list-unstyled">
                    <li class="mb-2"><i class="fa fa-times theme me-2"></i> International Flights.</li>
                    <li class="mb-2"><i class="fa fa-times theme me-2"></i> Entry Visa ($30 USD approx).</li>
                    <li class="mb-2">
                      <i class="fa fa-times theme me-2"></i> General Tips ($140 USD per person suggested).
                    </li>
                    <li class="mb-2"><i class="fa fa-times theme me-2"></i> Personal expenses and extra drinks.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col-12">
                <div class="alert alert-info rounded p-4">
                  <h5 class="mb-2"><i class="fa fa-info-circle theme me-2"></i> Pricing & Booking</h5>
                  <p class="mb-2">
                    <strong>Price Per Person:</strong>
                    <span class="fw-bold" id="egypt-main-price">$4,190 USD</span> (All Inclusive)
                  </p>
                  <p class="mb-2" id="egypt-main-discount" style="color: #bf303a">
                    <strong>🎉 Early Bird Discount:</strong> $200 USD OFF if you book before December 31, 2025! Pay only
                    <strong>$3,990 USD</strong>
                  </p>
                  <p class="mb-2"><strong>Hotels:</strong></p>
                  <ul class="mb-2">
                    <li>Cairo (3 nights): Steigenberger El Tahrir or similar 5★</li>
                    <li>Nile Cruise (5 nights): Private Dahabiya (8 cabins)</li>
                    <li>Luxor (2 nights): Jolie Ville Hotel & Spa Kings Island or Steigenberger Nile Palace / Achti</li>
                  </ul>
                  <p class="mb-0">
                    <em
                      >*Price includes all services, domestic flights, meals on cruise, entrance fees, and private
                      guides.</em
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- MAP TAB -->
          <div id="single-map" role="tabpanel" aria-labelledby="single-map-tab">
            <h4>Route Map</h4>
            <div class="map rounded overflow-hidden">
              <div style="width: 100%">
                <iframe
                  class="rounded overflow-hidden"
                  height="400"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.163866762366!2d31.23333431511476!3d30.04441968188233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c6dc1d1575%3A0x6f43d036324a3e52!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1625567890123!5m2!1sen!2sus"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Tour Details Ends -->

    <!-- CTA Section -->
    <section class="discount-action cta-egypt pt-0">
      <div class="container">
        <div class="call-banner rounded pt-10 pb-14">
          <div class="call-banner-inner w-75 mx-auto text-center px-5">
            <div class="trend-content-main tour-card__content-main">
              <div class="trend-content tour-card__content mb-5 pb-2 px-5">
                <h5 class="mb-1 theme">Experience the Magic of the Pharaohs</h5>
                <h2>
                  <a href="/#contact">Book your <span class="theme1">Egypt Trip</span> today</a>
                </h2>
                <p>An exclusive experience on a private Dahabiya. Limited spots for September 2026.</p>
              </div>
            </div>
            <div class="d-flex justify-content-center mt-3 flex-wrap gap-2">
              <a
                href="#"
                class="nir-btn cta-whatsapp-btn"
                data-tour="egypt"
                onclick="return handleCTAWhatsApp(event, 'egypt');"
                aria-label="Reserve Egypt Dahabiya Tour via WhatsApp"
                ><i class="fa fa-whatsapp me-2" aria-hidden="true"></i> Reserve Egypt Tour via WhatsApp</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="white-overlay"></div>
      <div class="white-overlay"></div>
      <div class="section-shape top-inherit bottom-0" style="background-image: url(images/shape6.png)"></div>
    </section>
    <!-- CTA Ends -->

<?php include 'includes/footer.php'; ?>
<?php include 'includes/scripts.php'; ?>
