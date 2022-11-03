import {
    gsap
} from "gsap";
import {
    DrawSVGPlugin
} from "gsap/DrawSVGPlugin";
import {
    GSDevTools
} from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function boxAnimation() {
    var tl = gsap.timeline();
    tl.fromTo("#lightning", {
            drawSVG: "0% 5%"
        }, {
            duration: 1,
            fill: "purple",
            drawSVG: "100%"
        })
        .from("#line", {
            duration: 1,
            drawSVG: "0%"
        });
    return tl;
}


var mainTl = gsap.timeline();
mainTl.add(boxAnimation());






GSDevTools.create();




function patternMotion() {
    var tl = gsap.timeline();
    tl.from(".bigstar", {
        duration: 3,
        rotate: -180,
        transformOrigin: "center"
    }, "playPattern")
    tl.from(".smallstar", {
        duration: 3,
        rotate: 180,
        transformOrigin: "center"
    }, "playPattern")
    tl.from(".tinystar", {
        duration: 3,
        rotate: -180,
        transformOrigin: "center"
    }, "playPattern")
    return tl;
}

function UIMotion() {


    var tl = gsap.timeline()
    tl.fromTo("#square", {
            drawSVG: "0% 5%"
        }, {
            duration: 1,
            drawSVG: "100%"
        })
        .from("#line", {
            duration: 1,
            drawSVG: "5%"
        });
    return tl;

}


var mainTL = gsap.timeline();
mainTL.add(boxAnimation())
    .add(patternMotion())
    .add(UIMotion());



GSDevTools.create();