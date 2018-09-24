<?php /* Template Name: Home Page */ get_header(); ?>

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>

    <div class="homeblock-headline">
      <div class="container-fluid">

        <div class="homeblock-headline--container">
          <div class="row">
            <h4 class="homeblock-headline__title col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-8">Елена Ма<span>Профессиональный ведический астролог  </span></h4>
            <h5 class="homeblock-headline__description col-xl-6 offset-xl-3 col-lg-6 offset-lg-1 col-md-8">У тебя есть <span>твой путь</span> <span class="homeblock-headline__small">Следуя своему пути ты будешь счастлив.</span></h5>
          </div><!-- /.row -->
          <a href="#homeblock-about" class="homeblock-headline__more"><i class="ico-more"></i>Узнать больше</a>
        </div>
        <!-- /.homeblock-headline--container -->

      </div><!-- /.container -->
    </div><!-- /.homeblock-headline -->

    <div class="homeblock-about" id="homeblock-about">
      <div class="container-fluid">
        <div class="row">
          <h1 class="homeblock-about__title col-12"><?php the_title(); ?></h1>
          <div class="homeblock-about__content col-xl-4 offset-xl-6 col-lg-4 offset-lg-6 col-md-6 offset-md-6 col-sm-12">
            <?php the_content(); ?>
            <a href="#">Читать больше</a>
          </div><!-- /.homeblock-about__content col-xl-6 offset-xl-6 -->
          <div class="homeblock-about__slider_title col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1">Мои консультации<span>помогут вам:</span></div><!-- /.homeblock-about__slider_title -->
          <div class="homeblock-about__slider_container col-xl-5 offset-xl-5 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1">
            <div class="homeblock-about__slider_slider">
              <?php if( have_rows('slider') ) { while ( have_rows('slider') ) : the_row(); ?>
                <h6><?php the_sub_field('item'); ?></h6>
              <?php endwhile; } ?>
            </div><!-- /.homeblock-about__slider_slider -->
          </div><!-- /.homeblock-about__slider_container -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </div><!-- /.homeblock-about -->

    <div class="homeblock-cards">
      <div class="container">
        <div class="row">
          <?php $posts = get_field('consultations_list'); if( $posts ): ?>
          <?php foreach( $posts as $post): // variable must be called $post (IMPORTANT) ?>
            <?php setup_postdata($post); ?>
              <div class="cards-item col-xl-4 col-lg-4 col-md-6 col-sm-6">
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
      <!-- /.container-fluid -->
    </div>
    <!-- /.homeblock-cards -->

    <div class="homeblock-halftext">
      <div class="container-fluid">
        <div class="row">
          <div class="homeblock-halftext--content col-xl-5 offset-xl-2 col-lg-6 offset-lg-1 col-md-7">
            <h3 class="homeblock-halftext__title">Джйотиш</h3>
            <p>Джйотиш - ведическая астрология как традиция древнего знания и духовная наука о взаимосвязи человека и Вселенной помогает  нам найти свой путь, узнать в чем заключена  наша сила и последовать своему предназначению.</p>
            <p>Мы все приходим в этот мир, имея уникальные дарования и таланты. Знание о том, в чем заключен ваш потенциал позволяет вам с уверенностью проявлять себя и достигать успеха.</p>
            <p>Свет этого знания затрагивает глубины вашего существа и пробуждает память о том, кто вы и за чем вы здесь.</p>
            <p>Карту рождения человека можно рассматривать и трактовать именно в этом контексте.  Благодаря такой трактовке вы получите  практические инструменты для самореализации, для творческого и осмысленного проживания Жизни и следования геометрии своей Судьбы.</p>
            <a href="/konsultatsii/">выбрать консультацию</a>
          </div>
          <div class="homeblock-halftext--image col-xl-5 col-lg-5 col-md-5"></div>
        </div><!-- /.row -->
      </div><!-- /.container -->
    </div><!-- /.homeblock-halftext -->

    <div class="homeblock-news">
      <div class="container">
        <div class="row">
          <h4 class="homeblock-news--title col-xl-12">Новости</h4>

          <?php query_posts("showposts=4"); ?>
            <?php get_template_part('loop'); ?>
          <?php wp_reset_query(); ?>

          <div class="homeblock-news--more col-xl-10 offset-xl-1 col-lg-12 offset-lg-0">
            <a href="/novosti/">Все новости</a>
          </div><!-- /.homeblock-news--more col-xl-10 -->

        </div><!-- /.row -->
      </div><!-- /.container -->
    </div><!-- /.homeblock-news -->

  <?php endwhile; endif; ?>

<?php get_footer(); ?>
