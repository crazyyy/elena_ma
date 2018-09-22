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
  <link href="favicon.ico" rel="shortcut icon">

  <!-- css + javascript -->
  <link href="//fonts.googleapis.com/css?family=Cormorant+Garamond:400,600,700|Istok+Web:400,700&amp;subset=cyrillic" rel="stylesheet">

  <!-- icons -->
  <link href="<?php echo get_template_directory_uri(); ?>/favicon.ico" rel="shortcut icon">

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
          </div><!-- /header--logo -->

          <nav class="header--nav col-xl-4 offset-xl-4 col-lg-5 offset-lg-3 col-md-7 offset-md-0 col-sm-10 offset-sm-2" role="navigation">
            <?php wpeHeadNav(); ?>
          </nav><!-- /header--nav -->

          <div class="header--phone col-xl-2 col-lg-2 col-md-3 col-sm-10">
            <a href="tel:+380504802828" class="header--phone__phone"><i class="ico-phone"></i>050 480 28 28</a>
            <p>Доступный в <a class="header--phone__viber" href="">Viber</a></p>
          </div><!-- /header--phone -->

        </div><!-- /.row -->
      </div><!-- /.container -->
    </header><!-- /header -->

    <section role="main">
