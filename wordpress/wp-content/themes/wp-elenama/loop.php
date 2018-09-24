<?php if (have_posts()): while (have_posts()) : the_post(); ?>
  <div id="post-<?php the_ID(); ?>" <?php post_class('looper--item col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 offset-md-0 col-sm-12'); ?>>

    <div class="looper--headline">
      <?php the_category(', '); ?><span class="hnh-date">Дата публикации: <span><?php the_time('j F Y'); ?></span></span>
    </div><!-- /.looper--headline -->
    <h3 class="looper--name"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h3>
    <?php wpeExcerpt('wpeExcerpt40'); ?>
    <a href="<?php the_permalink(); ?>" class="looper--item_more">Подробнее</a>

  </div><!-- /looper--item col-xl-8 offset-2 -->
<?php endwhile; endif; ?>
