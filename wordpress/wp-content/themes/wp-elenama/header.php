<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>

  <link href="//www.google-analytics.com/" rel="dns-prefetch">
  <link href="//fonts.googleapis.com" rel="dns-prefetch">
  <link href="//cdnjs.cloudflare.com" rel="dns-prefetch">

  <!-- icons -->
  <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/img/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/img/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/img/favicon/favicon-16x16.png">
  <link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/img/favicon/site.webmanifest">
  <link rel="mask-icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon/safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="theme-color" content="#ffffff">

  <!-- css + javascript -->
  <link href="//fonts.googleapis.com/css?family=Cormorant+Garamond:400,600,700|Istok+Web:400,700&amp;subset=cyrillic" rel="stylesheet">

  <!--[if lt IE 9]>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->

  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>

  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
  <!-- wrapper -->
  <div class="wrapper">
    <header role="banner">
      <div class="container-fluid">
        <div class="row">

          <div class="header--logo col-xl-2 col-lg-2 col-md-2 col-sm-2">
            <?php if ( !is_front_page() && !is_home() ){ ?>
              <a href="<?php echo home_url(); ?>">
            <?php } ?>
              <img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="<?php wp_title( '' ); ?>" title="<?php wp_title( '' ); ?>" class="logo-img">
            <?php if ( !is_front_page() && !is_home() ){ ?>
              </a>
            <?php } ?>
            <span class="header--logo__title">GEOMETRY OF DESTINY</span>
          </div><!-- /header--logo -->

          <nav class="header--nav col-xl-6 offset-xl-2 col-lg-7 offset-lg-1 col-md-7 offset-md-0 col-sm-10 offset-sm-2" role="navigation">
            <?php wpeHeadNav(); ?>
          </nav><!-- /header--nav -->

          <div class="header--phone col-xl-2 col-lg-2 col-md-10 col-sm-10">
            <a href="tel:+380504802828" class="header--phone__phone"><i class="ico-phone"></i>+38 050 480 28 28</a>
            <p>Доступный в <a class="header--phone__viber" href="">Viber</a> и <a class="header--phone__watsapp" href="">WatsApp</a></p>
          </div><!-- /header--phone -->

        </div><!-- /.row -->
      </div><!-- /.container -->
    </header><!-- /header -->

    <section role="main">
