(function ($) {

    'use strict';

    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();


    $('nav .dropdown').hover(function () {
        var $this = $(this);
        $this.addClass('show');
        $this.find('> a').attr('aria-expanded', true);
        $this.find('.dropdown-menu').addClass('show');
    }, function () {
        var $this = $(this);
        $this.removeClass('show');
        $this.find('> a').attr('aria-expanded', false);
        $this.find('.dropdown-menu').removeClass('show');
    });


    var offcanvas_toggle = $('.js-offcanvas-toggle');
    offcanvas_toggle.on('click', function () {


        if ($('body').hasClass('offcanvas-open')) {
            $('body').removeClass('offcanvas-open');
        } else {
            $('body').addClass('offcanvas-open');
        }

    });


    $(document).click(function (e) {
        var container = $('.js-offcanvas-toggle, #offcanvas_menu');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('body').hasClass('offcanvas-open')) {
                $('body').removeClass('offcanvas-open');
            }
        }
    });


    $('#date-countdown').countdown('2020/10/10', function (event) {
        var $this = $(this).html(event.strftime(''
            + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
            + '<span class="countdown-block"><span class="label">%d</span> days </span>'
            + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
            + '<span class="countdown-block"><span class="label">%M</span> min </span>'
            + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
    });

    var contentWayPoint = function () {
        var i = 0;
        $('.element-animate').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('element-animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .element-animate.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn element-animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft element-animated');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight element-animated');
                            } else {
                                el.addClass('fadeInUp element-animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 100);
                    });

                }, 100);

            }

        }, {offset: '95%'});
    };
    contentWayPoint();


})(jQuery);