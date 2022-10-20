import $ from "jquery";

let $nav = $('nav[data-nav]');
let isVisible = false;

$(".nav-btns").on("click", function () {
    console.log("click");
    if (isVisible === false) {
        $nav.show();
        isVisible = true;
    } else {
        $nav.hide();
        isVisible = false;
    }
})
import {
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to("#hero-2", {
    duration: 2,
    x: 0,
    rotation: 360,
    scrollTrigger: {
        trigger: "#hero-2",
        toggleActions: "restart pause reverse pause",
        markers: true

    }











});