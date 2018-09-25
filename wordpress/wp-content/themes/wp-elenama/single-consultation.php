<?php get_header(); ?>

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>

    <?php $image = get_field('single_header_background');
      if( !empty($image) ) {
        $bgi = $image['url'];
      } else {
        $bgi  = get_template_directory_uri() . '/img/karta-vashego-rebenka.jpg';
      }
    ?>

    <div class="single-consult--header" style="background-image: url(<?php echo $bgi ; ?>);">
      <div class="container">
        <div class="row">
          <div class="single-consult--breadcrumbs col-xl-6 offset-xl-2">
            <?php if (function_exists('easy_breadcrumbs')) easy_breadcrumbs(); ?>
          </div><!-- /.single-consult--breadcrumbs -->
          <h1 class="inner-title col-xl-6 offset-xl-2 col-lg-6 offset-lg-1"><i class="icon-card <?php the_field('css_ico_selector'); ?>"></i><?php the_title(); ?></h1>
          <p class="col-xl-6 offset-xl-2"><?php the_field('short_description'); ?></p>
          <div class="single-consult--buttons col-xl-6 offset-xl-2">
            <a class="single-consult--order" href="#">Онлайн запись</a> <a href="JavaScript:html5Lightbox.showLightbox(3, 'https://www.youtube.com/embed/<?php the_field('youtube'); ?>');" rel="lightbox" class="single-consult--video"><i class="svgico svgico-play"></i>Коротко о консультации</a>
          </div><!-- /.single-consult--buttons -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
      <a href="#consult-about" class="single-consult-headline__more"><i class="ico-more"></i>Узнать больше</a>
    </div>
    <!-- /.single-consult--header -->

    <div class="single-consult--content" id="consult-about">
      <div class="container">
        <div class="row">
          <article id="post-<?php the_ID(); ?>" <?php post_class('col-xl-9'); ?>>
            <?php the_content(); ?>
          </article>

          <?php get_sidebar(); ?>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.single-consult--content -->

    <div class="call-me-hidden">
      <?php echo do_shortcode('[contact-form-7 id="187" title="Consultation"]'); ?>
    </div>
    <!-- /.call-me-hidden -->

  <?php endwhile; endif; ?>

<?php get_footer(); ?>
