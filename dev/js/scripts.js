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



function tealoopAnimation() {
        var tl = gsap.timeline();
        gsap.to("#tealoop"), {
                duration: 5,
                repeat: 12,
                repeatDelay: 3,
                yoyo: true,
                ease: "power1.inOut",
                motionPath: "#logopath",
                align: "#logopath",
                autoRotate: true,
                alignOrigin: [0.5, 0.5]
        }


        return tl;
}











var mainTL = gsap.timeline();
mainTL.add(tealoopAnimation());



GSDevTools.create();