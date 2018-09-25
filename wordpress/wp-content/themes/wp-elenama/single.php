<?php get_header(); ?>

<div class="page-inner">
  <div class="container">
    <div class="row">

      <?php if (have_posts()): while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class('col-xl-8 offset-xl-2'); ?>>
          <?php if (function_exists('easy_breadcrumbs')) easy_breadcrumbs(); ?>
          <div class="looper--headline">
            <?php the_category(', '); ?><span class="hnh-date">Дата публикации: <span><?php the_time('j F Y'); ?></span></span>
          </div><!-- /.looper--headline -->
          <h1 class="inner-title"><?php the_title(); ?></h1>
          <?php get_template_part('sharing'); ?>
          <?php the_content(); ?>
          <?php get_template_part('sharing'); ?>
          <!-- /.article--share -->
          <?php edit_post_link(); ?>
        </article>
      <?php endwhile; endif; ?>

      <h4 class="recent-news col-xl-8 offset-xl-2">Последние новости</h4>
      <?php query_posts("showposts=4"); ?>
        <?php get_template_part('loop'); ?>
      <?php wp_reset_query(); ?>

    </div>
    <!-- /.row -->
  </div>
  <!-- /.container -->
</div>
<!-- /.page-inner -->

<?php get_footer(); ?>
