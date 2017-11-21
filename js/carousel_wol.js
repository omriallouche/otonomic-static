(function() {
    "use strict";
    var _$carousel = $(".tweet_carousel"),
        _$carousel_container = $(".tweet_carousel_container"),
        _$carousel_section = $("#tweets"),
        _tweet_advance_interval = false,
        _TWEET_ADVANCE_PERIOD_MS = 5e3,
        _NUMBER_OF_TWEETS = $(".tweet_carousel li").length;
    $(window).load(function() {
        if (_$carousel.length) _startAutoAdvance()
    });
    $(document).ready(function() {
        $(".tweet_carousel_controls a").on("click", function(e) {
            e.preventDefault();
            _stopAutoAdvance();
            var action = $(e.currentTarget).data("action");
            switch (action) {
                case "left":
                    return _moveToPrevious();
                case "right":
                    return _moveToNext()
            }
        });
    });


    function _moveToPrevious() {
        _$carousel_section.addClass("animate");
        _$carousel_container.addClass("animate left");
        var callback = setTimeout(function() {
            _$carousel_section.removeClass("animate");
            _$carousel.find("li").each(function() {
                var $el = $(this);
                var current_position = parseInt($el.attr("data-position"), 10);
                var new_position = (current_position + 1) % _NUMBER_OF_TWEETS;
                $el.attr("data-position", new_position)
            });
            _$carousel_container.removeClass("animate left")
        }, 500);
        return false;
    }

    function _moveToNext() {
        _$carousel_section.addClass("animate");
        _$carousel_container.addClass("animate right");
        var callback = setTimeout(function() {
            _$carousel_section.removeClass("animate");
            _$carousel.find("li").each(function() {
                var $el = $(this);
                var current_position = parseInt($el.attr("data-position"), 10);
                var new_position = ((current_position - 1) % _NUMBER_OF_TWEETS + _NUMBER_OF_TWEETS) % _NUMBER_OF_TWEETS;
                $el.attr("data-position", new_position)
            });
            _$carousel_container.removeClass("animate right")
        }, 500);
        return false;
    }

    function _startAutoAdvance() {
        if (!_tweet_advance_interval) {
            _tweet_advance_interval = setInterval(_moveToNext, _TWEET_ADVANCE_PERIOD_MS)
        }
    }

    function _stopAutoAdvance() {
        clearInterval(_tweet_advance_interval);
        _tweet_advance_interval = false
    }
})();