import {
        gsap
} from "gsap";
import {
        GSDevTools
} from "gsap/GSDevTools";
import {
        DrawSVGPlugin
} from "gsap/DrawSVGPlugin";
import {
        MotionPathPlugin
} from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);


function logoAnimation() {
        var tl = gsap.timeline();
        tl.fromTo("#logopath", {
                        drawSVG: "5% 5%"
                }, {
                        duration: 1,
                        fill: "black",
                        drawSVG: "100%"
                })
                .from("#line", {
                        duration: 1,
                        drawSVG: "0%"


                });

        return tl;



}

var mainTL = gsap.timeline();
mainTL.add(logoAnimation())



GSDevTools.create();