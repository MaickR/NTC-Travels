<?php
/**
 * NTC Travels - Footer Component
 * Exact replica of index.html footer
 */
?>

    <footer class="footer-main pt-20 pb-4">
      <div class="section-shape top-0" style="background-image: url(images/shape8.png)"></div>
      <div class="footer-upper pb-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5 col-md-6 col-sm-12 mb-4 pe-4">
              <div class="footer-about">
                <img
                  src="images/logo-NTC.jpg"
                  alt="NTC Travels & Dreams Logo"
                  style="max-width: 150px; height: auto"
                  width="150"
                  height="50"
                  loading="lazy"
                />
                <p class="mt-3 mb-3 white">
                  NTC Travels & Dreams specializes in creating bespoke travel experiences that transform ordinary trips
                  into unforgettable adventures. From the spiritual depths of India to custom global getaways, we curate
                  every detail to ensure your journey exceeds expectations.
                </p>
                <ul>
                  <li class="white"><strong>Phone:</strong> +1 408-609-0027</li>
                  <li class="white"><strong>Website:</strong> www.ntcluxurytravels.com</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div class="footer-links">
                <h3 class="white">Quick Links</h3>
                <ul>
                  <li><a href="/#banner">Home</a></li>
                  <li><a href="/#about-us">About Us</a></li>
                  <li><a href="/#contact">Contact</a></li>
                  <li><a href="/#tours">Our Tours</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div class="footer-links">
                <h3 class="white">Signature Experiences</h3>
                <ul>
                  <li><a href="/tour-india">Incredible India Journey</a></li>
                  <li><a href="/tour-egypt">Egypt on Dahabiya</a></li>
                  <li><a href="/#contact">Custom Travel Planning</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-payment">
        <div class="container">
          <div class="row footer-pay align-items-center justify-content-between text-lg-start text-center">
            <div class="col-lg-8 footer-payment-nav mb-4">
              <ul class="">
                <li class="me-2">We Support:</li>
                <li class="me-2"><i class="fab fa-cc-mastercard fs-4"></i></li>
                <li class="me-2"><i class="fab fa-cc-paypal fs-4"></i></li>
                <li class="me-2"><i class="fab fa-cc-stripe fs-4"></i></li>
                <li class="me-2"><i class="fab fa-cc-visa fs-4"></i></li>
                <li class="me-2"><i class="fab fa-cc-discover fs-4"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-copyright">
        <div class="container">
          <div class="copyright-inner rounded p-3 text-center">
            <div class="copyright-text">
              <p class="m-0 white">
                &copy; <?php echo date('Y'); ?> NTC Travels & Dreams. All rights reserved. Powered by
                <a href="https://www.avalon.com" target="_blank" rel="noopener" class="theme">AVALON</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="particles-js"></div>
    </footer>
    <!-- footer ends -->

    <!-- Back to top start -->
    <div id="back-to-top">
      <a href="#"></a>
    </div>
    <!-- Back to top ends -->

    <!-- search popup -->
    <div id="search1">
      <button type="button" class="close">&times;</button>
      <form>
        <input type="search" value="" placeholder="type keyword(s) here" />
        <button type="submit" class="btn btn-primary">Search</button>
      </form>
    </div>

    <!-- login registration modal -->
    <div class="modal fade log-reg" id="exampleModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <div class="post-tabs">
              <!-- tab navs -->
              <ul class="nav nav-tabs nav-pills nav-fill" id="postsTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    aria-controls="login"
                    aria-selected="false"
                    class="nav-link active"
                    data-bs-target="#login"
                    data-bs-toggle="tab"
                    id="login-tab"
                    role="tab"
                    type="button"
                  >
                    Login
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    aria-controls="register"
                    aria-selected="true"
                    class="nav-link"
                    data-bs-target="#register"
                    data-bs-toggle="tab"
                    id="register-tab"
                    role="tab"
                    type="button"
                  >
                    Register
                  </button>
                </li>
              </ul>
              <!-- tab contents -->
              <div class="tab-content blog-full" id="postsTabContent">
                <!-- login tab -->
                <div aria-labelledby="login-tab" class="tab-pane fade active show" id="login" role="tabpanel">
                  <div class="row">
                    <div class="col-lg-6 d-none d-lg-inline-block">
                      <div class="log-bg rounded"></div>
                    </div>
                    <div class="col-lg-6">
                      <form class="p-4">
                        <div class="head-title mb-4">
                          <h4>Sign in to your account</h4>
                        </div>
                        <div class="form-group mb-2">
                          <label class="form-label">Email Address</label>
                          <input type="email" class="form-control" placeholder="Your Email" />
                        </div>
                        <div class="form-group mb-2">
                          <label class="form-label">Password</label>
                          <input type="password" class="form-control" placeholder="Your Password" />
                        </div>
                        <button type="submit" class="nir-btn w-100 mt-2">Login</button>
                        <div class="other-links mt-3 text-center">
                          <span>Or continue with</span>
                          <div class="links d-flex gap-2 mt-2 justify-content-center">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-google"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <!-- register tab -->
                <div aria-labelledby="register-tab" class="tab-pane fade" id="register" role="tabpanel">
                  <div class="row">
                    <div class="col-lg-6 d-none d-lg-inline-block">
                      <div class="log-bg rounded"></div>
                    </div>
                    <div class="col-lg-6">
                      <form class="p-4">
                        <div class="head-title mb-4">
                          <h4>Register a new account</h4>
                        </div>
                        <div class="form-group mb-2">
                          <label class="form-label">Full Name</label>
                          <input type="text" class="form-control" placeholder="Your Name" />
                        </div>
                        <div class="form-group mb-2">
                          <label class="form-label">Email Address</label>
                          <input type="email" class="form-control" placeholder="Your Email" />
                        </div>
                        <div class="form-group mb-2">
                          <label class="form-label">Password</label>
                          <input type="password" class="form-control" placeholder="Your Password" />
                        </div>
                        <div class="form-group mb-2">
                          <label class="form-label">Confirm Password</label>
                          <input type="password" class="form-control" placeholder="Confirm Password" />
                        </div>
                        <button type="submit" class="nir-btn w-100 mt-2">Register</button>
                        <div class="other-links mt-3 text-center">
                          <span>Or continue with</span>
                          <div class="links d-flex gap-2 mt-2 justify-content-center">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-google"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
