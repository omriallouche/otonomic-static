var is_ssb=(window.macgap||window.winssb);
$("nav .mobile_menu_btn, nav.mobile_menu a").click(function(b){var a=$(b.currentTarget);
if(a.hasClass("close")||a.hasClass("mobile_menu_btn")){b.preventDefault();
$("body").toggleClass("show_mobile_nav");
return
}if(is_ssb&&a.attr("target")){$("body").removeClass("show_mobile_nav")
}});
$(window).load(function(){$("nav.mobile_menu").removeClass("loading")
});