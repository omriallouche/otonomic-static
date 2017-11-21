(function ($, window, undefined) {
    $(document).on("click", "a", function(e) {
        var el = $(this);
        try {
            ot_analytics.track(
                ot_analytics.get_event_name(el),
                null,
                ot_analytics.get_event_params(el)
            );
        } catch(e){
            console.log(e);
        }
    });
})(jQuery, window);
