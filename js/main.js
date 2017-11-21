var ot_analytics = (function() {
    var identify = function (user_unique_id, user_identify_data) {
        user_unique_id      = user_unique_id || null;
        user_identify_data  = user_identify_data || {};

        try {
            var props = Cookies.getJSON('utm');

            if (props && typeof(mixpanel)!='undefined') {
                mixpanel.people.set_once(props);
            }
            /* mixpanel.identify(); */
        } catch(e) {}

        if(user_unique_id) {
            analytics.alias(user_unique_id);
            Cookies.set('user_unique_id', user_unique_id, { expires: 365 });

        } else {
            user_unique_id = Cookies.get('user_unique_id');
        }

        return analytics.identify(user_unique_id, user_identify_data);
    };

    var track = function (event, method, eventData) {
        if(method) {
            var data = {
                'method': method
            };
            eventData = $.extend(true, {}, data, eventData);
        }
        try {
            return analytics.track(event, eventData);
        } catch(e) {
            console.log(e);
        }
        return false
    };

    var store_utm_params = function () {
        var campaign_keywords = 'utm_source utm_medium utm_campaign utm_content utm_term'.split(' ');
        var props = {};

        //check to see if the UTM super props exists
        for (var index = 0; index < campaign_keywords.length; index++) {
            if (get_property(campaign_keywords[index])) {
                props[campaign_keywords[index]] = get_property(campaign_keywords[index]);
            }
        }

        //if at least once exists, create the people properties
        if (Object.keys(props).length) {
            try {
                Cookies.set('utm', props);
            } catch(e) {
                console.log('Failed saving UTM cookie.');
            }
            return props;
        }

        return false;
    };

    var get_property = function(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };

    var get_event_name = function(el) {
        if(typeof el.attr('id') !== 'undefined') {
            return "Clicked #" + el.attr('id');
        }
        if(typeof el.attr('name') !== 'undefined') {
            return "Clicked name " + el.attr('name');
        }
        if(el.text().trim()) {
            return "Clicked text '" + el.text().trim() + "'";
        }
        if(typeof el.attr('class') !== 'undefined') {
            return "Clicked ." + el.attr('class').replace(' ', '.');
        }
        return "Clicked an unknown button";
    };

    var get_event_params = function(el) {
        var event_params = {};
        event_params.type = 'click';
        if(typeof el.attr('id') !== 'undefined') {
            event_params.id = el.attr('id');
        }
        if(typeof el.attr('href') !== 'undefined') {
            event_params.href = el.attr('href');
        }
        if(typeof el.attr('name') !== 'undefined') {
            event_params.name = el.attr('name');
        }

        if(typeof el.attr('class') !== 'undefined') {
            event_params.class = el.attr('class');
        }
        if(typeof el.attr('data-analytics') !== 'undefined' && el.attr('data-analytics')) {
            try {
                var data = JSON.parse(el.attr('data-analytics'));
                event_params = $.extend({}, event_params, data);

            } catch(e) {
                console.log('Could not decode JSON string ' + el.attr('data-analytics'));
            }
        }

        return event_params;
    };

    return {
        identify: identify,
        store_utm_params: store_utm_params,
        get_property: get_property,
        track: track,
        get_event_name: get_event_name,
        get_event_params: get_event_params
    };

})();

var props = ot_analytics.store_utm_params();;
(function ($, window, undefined) {
    $(document).on("click", "a, button", function(e) {
        var el = $(this);
        ot_analytics.track(
            ot_analytics.get_event_name(el),
            null,
            ot_analytics.get_event_params(el)
        );
    });
})(jQuery, window);
;
(function ($, window, undefined) {
    $(document).on("click", "a", function(e) {
        var el = $(this);
        if(el.attr('href') == site.create_url) {
            ot_analytics.track('Signup Interested', {});
            ot_analytics.track('Lead', window.location.href);
        }
    });
    $(document).on("submit", "form", function(e) {
        var el = $(this);
        if(el.attr('action') == site.create_url) {
            ot_analytics.track('Signup Interested', {});
            ot_analytics.track('Lead', window.location.href);
        }
    });
})(jQuery, window);;
function bindUI() {
    _$modal = $("#plan_modal");

/*
    $(".btn.create_free").on("click", function (e) {
        e.preventDefault();
        window.location = "/create";
        return
    });
*/

/*
    $(".plan").hover(function () {
        var plan_name = $(this).data("plan-name");
        if (plan_name == "enterprise")return;
        $(".plan_details").find('.column[data-plan="' + plan_name + '"]').addClass("active")
    }, function () {
        $(".plan_details").find('.column[data-plan="' + $(this).data("plan-name") + '"]').removeClass("active")
    });
    $("#team_members").on("textchange", function () {
        var num = parseInt($.trim($(this).val()));
        if (parseInt(num) > 5e3) {
            num = 5e3;
            $("#team_members").val(5e3)
        }
        if (parseInt(num)) {
            TS.web.pricing.members_for_calcs = parseInt(num)
        } else {
            TS.web.pricing.members_for_calcs = TS.web.pricing.members
        }
        TS.web.pricing.update()
    });
    $("#annual_toggle").on("change", function () {
        if ($(this).is(":checked")) {
            TS.web.pricing.is_annual = true
        } else {
            TS.web.pricing.is_annual = false
        }
        TS.web.pricing.update()
    }).trigger("change");
    $(".team_credits").html("$" + TS.web.pricing.format_currency(TS.web.pricing.credits));
*/

/*
    _$nav = $(".common_questions_nav");
    _$tweet_section = $(".from_the_wall_of_love");
    _$tweet_carousel = $(".tweet_carousel");
    _$tweet_carousel_container = $(".tweet_carousel_container");
    _$window = $(window);
    _win_scroll_top = _$window.scrollTop();
    _win_height = _$window.height();
    _nav_offset = _$nav.offset();
    _nav_height = _$nav.height();
    _$common_questions_section = $(".common_questions_and_resources");
    _section_offset = _$common_questions_section.offset();
    _section_height = _$common_questions_section.height();
    _top_padding = _win_height / 2 - _nav_height / 2;
    _fixed_set = false;
    _stuck_to_bottom = false;
    _categories = _calculateQuestionCategoryOffests();
    _updateQuestionNavPosition();
    _updateQuestionNavState(_categories, _win_scroll_top);
    if (_$tweet_carousel.length)_startTweetAnimation();
    _$window.scroll(_scrollHander);
    _$window.resize(function () {
        TS.utility.throttle.method(_windowResizeHandler)
    });

    _$tweet_section.find(".tweet_carousel_controls a").on("click", function (e) {
        e.preventDefault();
        _stopTweetAnimation();
        var action = $(e.currentTarget).data("action");
        switch (action) {
            case"left":
                return _moveTweetAnimationLeft();
            case"right":
                return _moveTweetAnimationRight()
        }
    });
*/

    $(".question_list h4 a").on("click", function (e) {
        e.preventDefault();
        var $question_header = $(e.target).closest("li");
        $question_header.toggleClass("expanded");
        $question_header.find(".ts_icon").toggleClass("ts_icon_plus_square_o").toggleClass("ts_icon_minus_square_o");
        _categories = _calculateQuestionCategoryOffests();
        _updateQuestionNavState(_categories, _$window.scrollTop());
        _section_height = _$common_questions_section.height()
    });
    $(".common_questions_nav li a").on("click", function (e) {
        var id = $(e.target).data("associated-section-id");
        var category = _categories.filter(function (element) {
            return element.id === id
        });
        if (category.length === 0)return;
        var scroll_position = category[0].top;
        $("html, body").animate({scrollTop: scroll_position + 10}, 500);
        e.preventDefault()
    });
/*
    $(".back_to_the_top .btn").on("click", function (e) {
        $("html, body").animate({scrollTop: 0}, 500);
        e.preventDefault()
    })
*/
}

bindUI();
