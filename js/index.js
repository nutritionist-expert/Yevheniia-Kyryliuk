const template={carousel(){$(".owl-carousel").owlCarousel({loop:!1,margin:20,nav:!1,items:3,responsive:{0:{items:1,margin:20},768:{items:2,margin:20},1024:{items:3,margin:20}}})},mobileMenu(){$(".header").on("click",".js-menu-toggle",function(){$(this).toggleClass("active"),$(this).siblings(".header-menu").toggleClass("active")})},smoothScrool(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"}),$(".header-menu").removeClass("active"),$(".js-menu-toggle").removeClass("active")})})}};template.carousel(),template.mobileMenu(),template.smoothScrool();