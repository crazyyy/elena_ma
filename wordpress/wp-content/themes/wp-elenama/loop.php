<?php if (have_posts()): while (have_posts()) : the_post(); ?>
  <div id="post-<?php the_ID(); ?>" <?php post_class('looper--item col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 offset-md-0 col-sm-12'); ?>>

    <?php
      $category = get_the_category();
      $category_parent_id = $category[0]->category_parent;
      if ( $category_parent_id != 0 ) {
        $category_parent = get_term( $category_parent_id, 'category' );
        $css_slug = $category_parent->slug;
        $cat_name = $category_parent->name;
      } else {
        $css_slug = $category[0]->slug;
        $cat_name = $category[0]->name;
      }
    ?>
    <div class="looper--headline">
      <a class="catname_<?php echo $css_slug; ?>" href="/<?php echo $css_slug; ?>"><?php echo $cat_name; ?></a><span class="hnh-date">Дата публикации: <span><?php the_time('j F Y'); ?></span></span>
    </div><!-- /.looper--headline -->
    <h3 class="looper--name"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h3>
    <?php wpeExcerpt('wpeExcerpt40'); ?>
    <a href="<?php the_permalink(); ?>" class="looper--item_more">Подробнее</a>

  </div><!-- /looper--item col-xl-8 offset-2 -->
<?php endwhile; endif; ?>
