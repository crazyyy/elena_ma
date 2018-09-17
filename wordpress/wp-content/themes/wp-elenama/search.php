<?php get_header(); ?>

  <div class="news-list">
    <div class="container">
      <div class="row">
        <div class="news-list--title col-xl-12"><?php echo sprintf( __( '%s Search Results for ', 'wpeasy' ), $wp_query->found_posts ); echo get_search_query(); ?></div>
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
