<?php
/**
 * NTC Travels - Componente Header + Nav
 * Réplica exacta del menú de index.html
 *
 * Variables disponibles (definir antes de incluir):
 * @var string $current_page - Página actual ('home', 'egypt', 'india', 'contact')
 */

$current_page = $current_page ?? 'home';
?>
<body class="home-thh">

  <!-- Preloader -->
  <div id="preloader">
    <div class="preloader-content">
      <img src="images/logo-NTC-bg.png" alt="NTC Travels" class="preloader-logo" width="150" height="auto" />
      <div class="preloader-spinner"></div>
    </div>
  </div>
  <!-- Preloader Ends -->

  <!-- header starts -->
  <header class="main_header_area">
    <h1 class="visually-hidden">NTC Travels & Dreams - Tailor Made Tours & Luxury Travel</h1>

    <!-- Navigation Bar -->
    <div class="header_menu" id="header_menu">
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-flex d-flex align-items-center justify-content-between w-100 pb-3 pt-3">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <a class="navbar-brand" href="/#banner">
                <img src="images/logo-NTC-bg.png" alt="NTC Travels & Dreams" title="NTC Travels & Dreams" />
              </a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="navbar-collapse1 d-flex align-items-center" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav" id="responsive-menu">
                <li<?php echo ($current_page === 'home') ? ' class="active"' : ''; ?>>
                  <a href="/#banner">Home</a>
                </li>
                <li<?php echo ($current_page === 'about') ? ' class="active"' : ''; ?>>
                  <a href="/#about-us">About Us</a>
                </li>
                <li<?php echo ($current_page === 'contact') ? ' class="active"' : ''; ?>>
                  <a href="/#contact">Contact</a>
                </li>
              </ul>
            </div>
            <!-- /.navbar-collapse -->

            <div id="slicknav-mobile"></div>
          </div>
        </div>
        <!-- /.container-fluid -->
      </nav>
    </div>
    <!-- Navigation Bar Ends -->
  </header>
  <!-- header ends -->
