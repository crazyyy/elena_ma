<?php /* Template Name: Consultation Page */ get_header(); ?>

  <div class="page-inner page-consult">
    <div class="container">
      <div class="row">

        <?php if (have_posts()): while (have_posts()) : the_post(); ?>
          <article id="post-<?php the_ID(); ?>" <?php post_class('col-xl-8 offset-xl-2'); ?>>
            <?php if (function_exists('easy_breadcrumbs')) easy_breadcrumbs(); ?>
            <h1 class="inner-title"><?php the_title(); ?></h1>
            <div class="page-consult--container">
              <div class="row">
                <?php $posts = get_field('consultations_list'); if( $posts ): ?>
                <?php foreach( $posts as $post): // variable must be called $post (IMPORTANT) ?>
                  <?php setup_postdata($post); ?>
                    <div class="cards-item col-xl-4">
                      <i class="icon-card <?php the_field('css_ico_selector'); ?>"></i>
                      <h3><?php the_title(); ?></h3>
                      <?php /* wpeExcerpt('wpeExcerpt10'); */ ?>
                      <p><?php the_field('short_description'); ?></p>
                      <a href="<?php the_permalink(); ?>">Подробнее</a>
                    </div>
                    <!-- /.cards-item col-xl-4 -->
                  <?php endforeach; ?>
                  <?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
                <?php endif; ?>
              </div>
              <!-- /.row -->
            </div>
            <!-- /.page-consult--container -->
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
