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
          <h1 class="inner-title col-xl-6 offset-xl-2"><?php the_title(); ?></h1>
          <p class="col-xl-6 offset-xl-2">Знаете ли вы, что момент начала любого действия определяет развитие и исход ситуации? Знание благоприятного момента – залог успешного развития ситуации и получения счастливого результата.</p>
          <div class="single-consult--buttons col-xl-6 offset-xl-2">
            <a class="single-consult--order" href="#">Онлайн запись</a> <a href="https://www.youtube.com/watch?v=MdYGQ7B0Vew" rel="lightbox" class="single-consult--video"><i class="svgico svgico-play"></i>Коротко о консультации</a>
          </div><!-- /.single-consult--buttons -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.single-consult--header -->

    <div class="single-consult--content">
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

  <?php endwhile; endif; ?>

<?php get_footer(); ?>
