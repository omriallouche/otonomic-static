(function ($, window, undefined) {

    var usr_email = getParameterByName('email');
    console.log(usr_email);
    if(usr_email) {
        var disable_automove = true;
        $(document).ready(function (e) {
            $('#user_email').val(usr_email);
            $('#user_email_confirm').val(usr_email);
            $('#email-next').simulateClick();
            $('#user_email-notice').hide();
        });

    }

    var start_slide = $.param.fragment();
    if(start_slide) {
        move_slide_by_id(start_slide);
    }
    $(window).bind( 'hashchange', function(e) {
        var id = $.param.fragment();
        move_slide_by_id(id);
        Cookies.set('oto_stage', id, {expires: 30});
    });

    var settings = {
        user_edits_contact: false,
        user_edits_store: false,
        user_edits_booking: true
    };

    window.do_redirect = 0;

    var page_id = getParameterByName('page_id');
    var page_name = getParameterByName('page_name');
    var category = getParameterByName('category');
    var category_list = getParameterByName('category_list');

    window.authorized_channel = [];

    /*
    var contact_load_timestamp;
    var store_load_timestamp;
    var category_load_timestamp;

    page_load_timestamp = new Date();
     */

    if (page_name) {
        $('.site-name').html(page_name);
        $('.ot-fb-name').html(page_name);
    }

    if(category) {
        $('#fb_category').val(category);
    }

    // Stage next btn
    $('.btn-next').click(function(event){
        //event.preventDefault();
        move_slide( $(this), event);
    });

    /*
    // Stage-3 next btn - Store/Booking
    $('.js-stage3-next').click(function(event){
        //event.preventDefault();
        move_slide( $(this), event);

        var values = {};
        values.show_store = $('#option-online-store').hasClass('checked') ? 'yes' : 'no';
        values.show_booking = $('#option-booking').hasClass('checked') ? 'yes' : 'no';
        enqueue_submit('show_store',   values.show_store,   'send_store');
        return enqueue_submit('show_booking', values.show_booking, 'send_booking');
    });
*/

    $(".js-switch-to-congratz").click(function(event){
        initializeLoading();
//        window.location.hash = "#congratz";
        move_slide( $(this), event);
        $('.websitedomain').html( Cookies.get('user_website_domain') );

        switchToCongratz();
        //$('#User_site_creation').submit();
    });

    $('#User_site_creation').submit(function(){
        return false;
    });

    $('[data-toggle="tooltip"]').tooltip();

    // function that switched to stage-5 from stage-4
    /////////////////////////////////////////////////////
    function switchToCongratz() {
        var form_data = $('#User_site_creation').serialize();

        var request_url;
        request_url = builder_domain+"/migration/index.php";

        enqueue_submit('blogname',   $('#business_name_confirm').val(),   'business_name');
        enqueue_submit('user_email',   $('#user_email_confirm').val(),   'submit_user_email');
    }

    if (page_id) {
        window.site_url = builder_domain+'/wp-admin/admin-ajax.php?action=check_page&page_id='+page_id;
        $('#oto-web-url').html('<a href="'+window.site_url+'">this link</a>');
        createWebsiteUsingAjax(page_id);
        if(settings.user_edits_address) {
            getFacebookPageAddress(page_id);
        }
    }
})(jQuery, window);
;
(function ($, window, undefined) {
    $("#user_email, #user_email_confirm").val(Cookies.get('user_email'));

    $("#business_name, #business_name_confirm").val(Cookies.get('user_business_name'));

    $('.replace-sitename').html(Cookies.get('user_business_name'));
    if (Cookies.get('oto_stage') !== undefined && !disable_automove) {
        window.location.hash = "#" + Cookies.get('oto_stage');
    }
    activateEmailNext();
    activateBNameNext();

    $('#fb-page-next').bind('click', function (e) {

        var selected_fb_page = $('#page-list .fb-page-select.selected').attr('data-fb-id');
        pageName = $('#page-list .fb-page-select.selected').attr('data-name');
        pageCategory = $('#page-list .fb-page-select.selected').attr('data-category');

        /*
        ot_analytics.track(
            'Signup Fb Page Submitted',
            'Installer',
            {
                pageDafault: selected_fb_page,
                fbPages: Cookies.get('fb_user_pages')
            }
        );
        */

        /* Verify this page */
        try {
            FB.api('/' + selected_fb_page, { fields: 'category,category_list,link,name', access_token: fb_app_token}, function (response) {
                if (response.id == selected_fb_page) {
                    pageSelected(response);

                } else {
                    pageSlide = 'bother-blocked';
                    ot_analytics.track(
                        'Onboarding errors',
                        'Installer',
                        {
                            'pageId': 'blocked'
                        }
                    );
                    move_slide_by_id(pageSlide);
                    window.location.hash = pageSlide;
                }
                console.log(response);
            });
        } catch (e) {
        }
    });

    $('.installer-stage:visible:first').find('input[type=text],input[type=email],textarea,select,.oto-fb-login').filter(':visible:first').focus();

    $('.websitedomain').html(Cookies.get('user_website_domain'));
})(jQuery, window);
;
(function ($, window, undefined) {
    $("#user_email").on("keyup paste blur", function() {
        $("#user_email_confirm").val($(this).val());
        activateEmailNext();
    });

    $('#user_email').keypress(function(event){
        if(event.keyCode == 13){
            event.preventDefault();
            $("#email-next").simulateClick();
        }
    });

    $('#email-next').bind('click', function (e){
        var email = $('#user_email').val();
        Cookies.set('user_email', email, { expires: 365 });
        var user_unique_id = email;
        Cookies.set('user_unique_id', user_unique_id, { expires: 365 });

        var data = {
            email:    email,
            createdAt:  Date()
        };

        ot_analytics.track(
            'User identified',
            'Installer',
            data
        );
        ot_analytics.identify(
            user_unique_id,
            data
        );
    });
})(jQuery, window);
;
(function ($, window, undefined) {
    $("#business_name").on("keyup paste blur", function() {
        $("#business_name_confirm").val($(this).val());
        $('.replace-sitename').html($(this).val());
        activateBNameNext();
    });

    $('#business_name').keypress(function(event){
        if(event.keyCode == 13){
            event.preventDefault();
            $("#bname-next").simulateClick();
        }
    });

    $('#bname-next').bind('click', function (e){
        var business_name = $('#business_name').val();
        Cookies.set('user_business_name', business_name, { expires: 365 });
        var user_unique_id = Cookies.get('user_unique_id');

        var data = {
            'siteName': business_name,
            'business': business_name
        };

        if(user_unique_id) {
            ot_analytics.identify(
                user_unique_id,
                data
            );
        }
    });
})(jQuery, window);
;
(function ($, window, undefined) {
    $("#user_email_confirm").on("keyup paste blur", function() {
        $("#user_email").val($(this).val());
        Cookies.set('user_email', $(this).val(), { expires: 30 });
    });

    $("#business_name_confirm").on("keyup paste blur", function() {
        $("#business_name").val($(this).val());
        $('.replace-sitename').html($(this).val());
        Cookies.set('user_business_name', $(this).val(), { expires: 30 });
    });

    $('.edit-link').bind('click', function(e){
        $href = '#confirm';
        if( $('#page-list .fb-page-select').length > 1 ) {
            $href = '#gather';
        }
        $('#bname-next').attr('href', $href);
    });
})(jQuery, window);
;
(function ($, window, undefined) {
    $('.reload-fb-pages').bind('click', function (e) {
        loadFBPages({
            fb_token: Cookies.get('user_fb_token'),
            suppressSlide: false,
            pageSlide: 'gather'
        });
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
var splash_loading_messages = [];
var phrases = [];
$.getJSON('/messages.json', function (json) {
    splash_loading_messages = json || [];
    // Loop the phrases to cover the longest load time possible in the browser.
    phrases = getPhrases() || [];
    /*while (phrases.length > 0 && phrases.length < 70) {
        phrases = phrases.concat(phrases);
    }*/
});
;
var LoadingScreen = {};
var greenCheckmarkIdPrefix = "defaultSplash-greyCheck-";
var grayCheckmarkIdPrefix = "defaultSplash-greenCheck-";
var phraseIdPrefix = "defaultSplash-phraseText-";
var verticalSpacing = 90;
var secondsPerSlide = 1.5;

var pageName="Test Page";
var pageCategory="Sample Category";

var progressTimer = false;

function getPhrases() {
    // #LoadingMessages
    // These are just fallback messages in case our cluster config yields
    // no messages for some reason.
    var default_phrases = [

    ];
    // Ensure compatibility to where we don't have the messages embedded in
    // a variable, and ensure we always have a default set of phrases even
    // if somehow cluster config yields an empty set.
    var custom_phrases = window.splash_loading_messages;
    if (custom_phrases && custom_phrases.length > 0) {
        return custom_phrases;
    } else {
        return default_phrases;
    }
}

function shuffleArray(array) {
    return array;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function createSVG(tag, properties, opt_children) {
    var newElement = document.createElement(tag);
    for(prop in properties) {
        newElement.setAttribute(prop, properties[prop]);
    }
    if (opt_children) {
        opt_children.forEach(function(child) {
            newElement.appendChild(child);
        })
    }
    return newElement;
}

function createPhraseText(phrase, index, yOffset) {
    var span = createSVG("span", {
        class: 'splash-text-wrapper'
    });
    var text = createSVG("div", {
        id: phraseIdPrefix + index,
        class: 'splash-text'
    });
    var greyCheck = createSVG("div", {
        id: greenCheckmarkIdPrefix + index,
        class: 'check-green'
    });
    var greenCheck = createSVG("div", {
        id: grayCheckmarkIdPrefix + index,
        class: 'check-gray'
    });
    span.appendChild(greyCheck);
    span.appendChild(greenCheck);
    span.appendChild(document.createTextNode(phrase + "..."));
    text.appendChild(span);
    return text;
}

function addPhrasesToDocument(phrases) {
    phrases.forEach(function(phrase, index) {
        var yOffset = 30 + verticalSpacing * index;
        phrase = phrase.replace(/{{pageName}}/g, pageName);
        phrase = phrase.replace(/{{pageCategory}}/g, pageCategory);
        document.getElementById("defaultSplash-phrases").appendChild(createPhraseText(phrase, index, yOffset));
    });
}

/**
 * We generate the css for keyframes in javascript in order to
 * 1. Minimize page load time (with many phrases these take up many lines)
 * 2. Scale appropriately as phrases are added/removed.
 * 3. Make everything well factored. This could be done in sass (loops) but
 * would then require an additional build step. (And we'd have to maintain
 * consistency in the phrase count between the two.)
 */
function generateKeyframeCSS(num_keyframes) {
    var generated_keyframes_style = document.createElement("style");
    generated_keyframes_style.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(generated_keyframes_style);
    function enumerateSlideUpKeyframes() {
        var style = "";
        for (var i = 0; i < num_keyframes + 1; i++) {
            style += "\
        " + (i * 100 / num_keyframes) + "% {\
            -webkit-transform: translateY(-" + (verticalSpacing * i) + "px);\
                    transform: translateY(-" + (verticalSpacing * i) + "px);\
        } ";
        }
        return style;
    }
    function enumerateFadeKeyframes() {
        var style = "";
        for (var i = 0; i < num_keyframes + 1; i++) {
            style += "#" + grayCheckmarkIdPrefix + i + " { \
      animation: fade-opacity-in 5000ms;\
      animation-delay: " + ((i - 3) * secondsPerSlide) + "s;\
      opacity: 0;\
    }";
            style += "#" + greenCheckmarkIdPrefix + i + " { \
      animation: fade-opacity-in 5000ms;\
      animation-delay: " + ((i - 3) * secondsPerSlide) + "s;\
    }";
        }
        return style;
    }
    var animation_duration = secondsPerSlide * num_keyframes;
    var slide_up_keyframes =  enumerateSlideUpKeyframes();
    var style_rule = "@-webkit-keyframes slide-phrases-upward { " + slide_up_keyframes + " }" +
        "@keyframes slide-phrases-upward { " + slide_up_keyframes + " }";
    style_rule += " #defaultSplash-phrases {\
  -webkit-animation: slide-phrases-upward " + animation_duration + "s;\
          animation: slide-phrases-upward " + animation_duration + "s;\
}";
    style_rule += enumerateFadeKeyframes();
    generated_keyframes_style.innerHTML = style_rule;
}

function initializeLoading() {
    startProgress();
    addPhrasesToDocument(phrases);

    function getBrowser() {
        var N=navigator.appName, ua=navigator.userAgent, tem;
        var M=ua.match(/(opera|chrome|safari|firefox|msie|trident)\/?\s*(\.?\d+(\.\d+)*)/i);

        if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
        M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];

        return M[0];
    }
    var browser = getBrowser();
    if (browser === "MSIE" || browser === "Trident") {
        /**
         * IE doesn't support animations on SVG elements, so we manually animate
         * the upwards scroll.
         */
        var upward_moving_group = document.getElementById("defaultSplash-phrases");
        upward_moving_group.currentY = 0;
        var last_time = new Date().getTime();
        function manuallyAnimateLoading() {
            var current_time = new Date().getTime();
            upward_moving_group.setAttribute("transform",
                "translate(0 " + upward_moving_group.currentY + ")");
            upward_moving_group.currentY -= verticalSpacing * (current_time - last_time) / (1000 * secondsPerSlide);
            if (upward_moving_group.currentY > -phrases.length * verticalSpacing) {
                requestAnimationFrame(manuallyAnimateLoading);
            }
            last_time = current_time;
        }
        manuallyAnimateLoading();
    }

    generateKeyframeCSS(phrases.length);

    /**
     * We want to both load as fast as possible and also attempt to increase the
     * fidelity of the loader when possible. For this reason we switch out the
     * font to the desired proxima-nova once it becomes available.
     * SVG Text elements don't offer fallbacks in their font-family property, so
     * in order to do this we detect when the font is loaded and swap the property
     * on the Text elements when it becomes available.
     */
    var fontTimeout;
    /*var compareFont1 = document.getElementById("fontLoadComparer-arial");
    var compareFont2 = document.getElementById("fontLoadComparer-proxima");

    (function replaceFontWhenLoaded() {
        if (compareFont1.getBoundingClientRect().width !==
            compareFont2.getBoundingClientRect().width) {
            phrases.forEach(function(_, i) {
                var phraseText = document.getElementById(phraseIdPrefix + i);
                phraseText.setAttribute("font-family", "proxima-nova");
            });
        } else {
            fontTimeout = window.setTimeout(replaceFontWhenLoaded, 50);
        }
    })();*/


    function removeDefaultSplash() {
        var default_splash = document.getElementById("loading_screen");
        if (fontTimeout) {
            window.clearTimeout(fontTimeout);
        }
        if (default_splash.className.contains("defaultSplash--displayNone")) {
            return;
        }
        default_splash.className = default_splash.className + " defaultSplash--displayNone"
    }
    LoadingScreen.stop = removeDefaultSplash;

    /**
     * Transition to the app once it loads. Apparently this doesn't detect if
     * LunaUI is completely loaded, but it should be good enough. After we fade
     * out remove the loader from the dom so as to prevent any possible breakage
     * via covering the entire app with a transparent screen.
     */
    (function fadeOutOnUILoaded() {
        if (document.getElementById("asana_main") !== null) {
            var default_splash = document.getElementById("loading_screen");
            default_splash.className =
                default_splash.className + " defaultSplash--fadeOutLoading";

            default_splash.addEventListener("animationend", removeDefaultSplash,
                false);
            // Safety so that even if animation end doesn't fire we still hide.
            window.setTimeout(removeDefaultSplash, 1000);
        } else {
            window.setTimeout(fadeOutOnUILoaded, 100);
        }
    })();
}

function progressStep2() {
    jQuery('#scrolling-text').fadeTo(200, 0.8);
    jQuery('#progress-comp-wrapper').show();
    jQuery('#progress-wrapper').hide();
    jQuery('#progress-comp-wrapper').fadeTo(250, 1);

    jQuery('#defaultSplash-phrases').css('transform', 'translateY(-1710px)');
    jQuery('#defaultSplash-phrases').css('-webkit-transform', 'translateY(-1710px)');
}
function startProgress() {
    var per = 0;
    progressTimer = setInterval(function() {

        if (per < 100) {
            $('#progress-percentage').text(per);
            if (per == 37 ) {
                $('#progress-text').html('analyzing');
            } else if (per == 73 ) {
                $('#progress-text').html('thinking');
            }
        } else {
            clearInterval(progressTimer);
            $('#progress-percentage').text('100');

            progressStep2();

            //window.location.hash = "#build";
            //move_slide_by_id( "build" );
            /*if (per > 102) {
                $('.congratz-title').text('Taking you to your new website...');
                //$('.ot-fb-name').html('');
                //$('.site-name').html('');

                clearInterval(progressTimer);

                // now redirect
                //window.location.replace(window.site_url);
            }*/
        }
        //if(per == 100) {

            //ga('set', 'metric5', '1');
            //track_event('Loading Page', 'Redirect to website', '');
            //window.do_redirect = 1;
            //redirect_to_website();

            // Load slide 6


        //}
        per++;
    }, 280);
};
var builder_domain;
var appid;
var disable_automove = false;
var fb_app_token = '373931652687761|d154036467714f4ac4706e653a1211ad';
if (is_localhost()) {
    builder_domain = "http://wp.test";
    appid = '286934271328156';
} else {
    builder_domain = 'http://wp.'+window.location.hostname.replace('www.', '');
    appid = '373931652687761';
};
function getParameterByName(name) {
    return getParameterByNameFromString(name, location.search);
}

function getParameterByNameFromString(name, str) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(str);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function is_localhost() {
    if (location.host == 'otonomic.test' || location.host == 'localhost') {
        return true;
    }

    return false;
};
var saveDataOnServer = (function() {

    var identified = false;

    getDataFromCookies = function() {
        var id = Cookies.get('otonomic_id');
        var user_email = Cookies.get('user_email');
        var website_name = Cookies.get('user_business_name');
        var fb_user_token = Cookies.get('user_fb_token');
        var fb_user_details = Cookies.get('user_fb_details');
        var fb_user_pages = Cookies.get('fb_user_pages');
        var fb_selected_page = Cookies.get('fb_selected_page');

        return {
            id: id,
            user_email:user_email,
            website_name:website_name,
            fb_user_token:fb_user_token,
            fb_user_details:fb_user_details,
            fb_user_pages:fb_user_pages,
            fb_selected_page:fb_selected_page
        };
    };

    sendRequest = function(dataSent, successCallback) {
        request = $.ajax({
            type: "POST",
            url: '/server/save-data.php',
            data: dataSent,
            success: successCallback
        });
    };

    successCallback = function (data, status, jqxhr) {
        var dataSent = getDataFromCookies();
        data = jQuery.parseJSON(data);
        Cookies.set('otonomic_id', data.id, { expires: 30 });
        Cookies.set('user_website_domain', data.website_domain, { expires: 30 });

        /*
         ot_analytics.track(
            'savedDataOnServer',
            'installer',
            {
                'dataSent': dataSent,
                'datareceived': data
            }
        );
        if(!identified) {
            identified = true;
         ot_analytics.identify(
                data.id,
                dataSent
            );
        }
        */
    };

    run = function() {
        var dataSent = getDataFromCookies();
        sendRequest(dataSent, successCallback);
    };

    return {
        'run': run,
        'getDataFromCookies': getDataFromCookies,
    }
}());
;
function activateEmailNext() {
    if(!is_valid_email(jQuery('#user_email').val())) {
        jQuery('#email-next').attr('disabled', 'disabled');
    } else {
        jQuery('#email-next').removeAttr('disabled');
    }
}

function activateBNameNext() {
    jQuery('#business_name-text-limit').hide();
    jQuery('#business_name').removeClass('overlimit');

    if(jQuery('#business_name').val().length<3) {
        jQuery('#bname-next').attr('disabled', 'disabled');

    } else if(jQuery('#business_name').val().length>30) {
        jQuery('#bname-next').attr('disabled', 'disabled');
        jQuery('#business_name-text-limit').show();
        jQuery('#business_name').addClass('overlimit');

    } else {
        jQuery('#bname-next').removeAttr('disabled');
    }
}

function activateFBNext() {
    jQuery('#fb-next').attr('disabled', 'disabled');
    var fb_token = Cookies.get('user_fb_token');
    if(fb_token) {
        /* Check if token is valid */
        try {
            FB.api('/me', {access_token: fb_token,limit: 100}, function (response) {
                jQuery('#fb-next').removeAttr('disabled');
            });
        } catch(e) {
            console.log(e);
        }
    }
}
function is_valid_email(email) {
    var result = email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
    return !!result;
};
function move_slide_by_id(id) {
    if(!id)
        id = "email";
    if($(".installer-stage:visible").attr('id') == id)
        return;
    $(".installer-stage:visible").fadeOut(100, function () {
        jQuery('#'+id).removeClass('hidden').fadeIn(100, function(){
            $('.installer-stage:visible:first').find('input[type=text],input[type=email],textarea,select,.oto-fb-login').filter(':visible:first').focus();
        });

        ot_analytics.track('Viewed ob slide: ' + id, 'onSlide', {"category": "Onboarding", "action": "Slide viewed", "label": id});
    });
}

function move_slide(pressed_button, event) {
    var current_slide = pressed_button.parents('.installer-stage');
    $('.notice').hide();
    var next_slide = current_slide.next().attr('id');
    // Check for required fields
    var required_fields = pressed_button.attr('data-required-fields');
    if(required_fields && required_fields.length) {
        required_fields = required_fields.split(',');
        var can_move_slide = true;
        $.each(required_fields, function (index, value) {
            if (!$(value).val()) {
                $(value + '-notice').show();
                can_move_slide = false;
            }
            if($(value).val() && (value == '#user_email' || value == '#user_email_confirm')){
                if(!is_valid_email($(value).val())){
                    $(value + '-valid-notice').show();
                    can_move_slide = false;
                }
            }
        });
        if (!can_move_slide) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        }
    }

    // Move to next slide
    current_slide.fadeOut(100, function () {
        current_slide.next().removeClass('hidden').fadeIn(100);
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    saveDataOnServer.run();
}
;
function timed_submit(submit_function, submit_parameter) {
    if (window.is_blog_ready == 1) {
        submit_function();
    } else {
        window[submit_parameter] = 1;
    }
}

function callback(data) {
    window.is_blog_ready = 1;

    if (data.redirect.indexOf("http://") < 0) {
        data.redirect = "http://" + data.redirect;
    }

    if (data.site_url.indexOf("http://") < 0) {
        data.site_url = "http://" + data.site_url;
    }

    if (data.status == 'fail') {
        //window.location = data.site_url;
        console.log('Site Exists');
        ot_analytics.track(
            'siteExists',
            'installer',
            {
                'message':data.message,
                'url':data.site_url
            }
        );
        ot_analytics.track('Account Manage', 'Site Exists', data.message);
        ga('set', 'metric6', '1');
        // track_virtual_pageview('site_exists');

    } else {
        var page_type = window.page_type || 'Fan Page';

        ot_analytics.track(
            'siteCreated',
            'installer',
            {
                'url':data.site_url
            }
        );

        ot_analytics.track('Account Manage', 'Site Created', page_type);
        ga('set', 'metric4', '1');
        // track_virtual_pageview('site_created');
    }

    <!-- START Facebook Pixel Tracking for Site created-->
    window._fbq = window._fbq || [];
    /*if(!is_localhost()) {
        window._fbq.push(['track', facebook_site_created_pixel_id, {'value':'0.00', 'currency':'USD'}]);
    }*/
    <!-- END Facebook Pixel Tracking -->

    window.site_url = data.site_url;
    // window.blog_redirect = data.redirect;
    window.blog_redirect = data.site_url;
    window.blog_id = data.blog_id;
    window.token = data.token;

    jQuery('#oto-web-url').html('<a href="'+data.redirect+'">'+data.site_url+'</a>');

    if( data.status === 'fail') {
        /* Switch to error window */
        if(data.message != 'Sorry, that site already exists!') {
            if (progressTimer)
                clearInterval(progressTimer);
            /* Now move to error slide */
            ot_analytics.track(
                'Onboarding errors',
                'Installer',
                {
                    'pageId':'stuck'
                }
            );
            move_slide_by_id('bother-stuck');
            window.location.hash = '#bother-stuck';
            if (data.message)
                jQuery('#gen-error-message').html(data.message);

            /*if(data.message != 'Sorry, that site already exists!') {
             alert(data.message);
             }*/
            //window.location.replace(data.redirect);
        }
        return;
    }

    blog_created();

    redirect_to_website();
}

function blog_created() {
    ot_analytics.track(
        'blogCreated',
        'installer',
        {}
    );
    window.callbacks = window.callbacks || [];
    $.each( window.callbacks, function(index, callback_function) {
        window[callback_function]();
    });

    send_user_fb_details();
    return;
}

function redirect_to_website() {
    if(window.do_redirect == 1 && window.is_blog_ready == 1) {
        window.location.replace(window.blog_redirect);
    }
}




function enqueue_submit(setting, value, callback_function) {
    window[setting] = value;

    if(window.is_blog_ready) {
        window[callback_function]();

    } else {
        window.callbacks = window.callbacks || [];
        window.callbacks.push(callback_function);
    }
}

function send_template() {
    var skin = window.skin || '';
    ot_analytics.track('Loading Page', 'Select Template', skin);
    return post_WP_settings({ skin: skin }, 'Select Template');
}

function post_WP_settings(data, tracking_action, endpoint) {
    endpoint = endpoint  || 'settings.set_many';
    tracking_action = tracking_action  || data;

    return request = $.ajax({
        type: "POST",
        url: window.site_url + '/?json=' + endpoint,
        data: { values: data },
        success: function (data, status, jqxhr) {
            if (jqxhr.status == 307) {
                $.post(window.site_url + '/?json=settings.set_many', { values: values_changes });
                ot_analytics.track('Loading Page', tracking_action, '307');
                return;
            }
            if (data.status == "ok") {
                ot_analytics.track('Loading Page', tracking_action, 'Success');
            } else {
                ot_analytics.track('Loading Page', tracking_action, 'Failure: data.respond.msg: ' + (data.respond && data.respond.msg));
            }
        },
        complete: function (jqxhr, status) {
            if (status !== 'success') {
                ot_analytics.track('Loading Page', tracking_action, 'Failure: ' + status);
            }
        }
    });
}

function send_user_fb_details()
{
    fb_user_auth = 'yes';
    fb_user_id = jQuery('#fb_user_id').val();
    fb_user_t = jQuery('#fb_user_token').val();

    if(fb_user_auth == 'yes')
    {
        var settings_data = {
            wp_otonomic_blog_connected: 'yes',
            otonomic_connected_fb_user_id: fb_user_id,
            otonomic_connected_fb_user_token: fb_user_t
        };
        post_WP_settings(settings_data, 'FB Connected');
    }
}

function createWebsiteUsingAjax(page_id) {
    var request_data = {};
    request_data.theme = "dreamthemeVC";
    request_data.facebook_id = encodeURIComponent(page_id);

    // var request_url = "http://wp.otonomic.com/migration/index.php?" + $.param(request_data);
    localhost = is_localhost();

    var request_url;
    request_url = builder_domain+"/migration/index.php";

    return $.ajax({
        url: request_url,
        type: "GET",
        dataType: "jsonp",
        data: request_data,
        jsonp: "callback",
        jsonpCallback: "callback"
    });
}

function business_name() {
    return post_WP_settings({ blogname: jQuery('#business_name_confirm').val() });
}
function submit_user_email() {
    var user_email = window.user_email || '';
    ot_analytics.track('Installer', 'Submit Email', user_email);
    var user_id = window.user_id;
    return post_WP_settings({ user_email: user_email, user_id: user_id }, 'Submit Email', 'settings.set_user_email');

};
$.fn.simulateClick = function() {
    return this.each(function() {
        if('createEvent' in document) {
            var doc = this.ownerDocument,
                evt = doc.createEvent('MouseEvents');
            evt.initMouseEvent('click', true, true, doc.defaultView, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
            this.dispatchEvent(evt);
        } else {
            this.click(); // IE
        }
    });
};