<?php get_header(); ?>

  <div class="page-inner">
    <div class="container">
      <div class="row">

        <?php if (have_posts()): while (have_posts()) : the_post(); ?>
          <article id="post-<?php the_ID(); ?>" <?php post_class('col-xl-8 offset-xl-2'); ?>>
            <?php if (function_exists('easy_breadcrumbs')) easy_breadcrumbs(); ?>
            <h1 class="inner-title"><?php the_title(); ?></h1>
            <?php the_content(); ?>
            <?php edit_post_link(); ?>
          </article>
        <?php endwhile; endif; ?>

      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </div>
  <!-- /.page-inner -->

<?php get_footer(); ?>
