<?php /* Template Name: News Page */ get_header(); ?>

  <div class="news-list">
    <div class="container">
      <div class="row">
        <?php if (function_exists('easy_breadcrumbs')) easy_breadcrumbs(); ?>
        <div class="news-list--title col-xl-12"><?php the_title(); ?></div>
        <ul class="news-list--catlist col-xl-12">
          <?php wp_list_categories( 'orderby=name&title_li=' ); ?>
        </ul>
        <?php get_template_part('loop'); ?>
        <?php get_template_part('pagination'); ?>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </div>
  <!-- /.news-list -->

<?php get_footer(); ?>
