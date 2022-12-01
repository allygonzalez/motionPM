import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);

function tealoopAnimation() {
  var tl = gsap.timeline();
  tl.to("#tealoop",
    {
      duration: 2,
      repeat: 1,
      repeatDelay: 2,
      ease: "power1.inOut",
      motionPath:{
        path: "#logopath",
        align: "#logopath",
        autoRotate: -70,
        alignOrigin: [0.5, 0.5]
}
    });

  return tl;
}

function wAnimation() {
        var tl = gsap.timeline();
        tl.fromTo("#w", 
       {drawSVG: "0 5%"},
        
        {
                duration: 1,
                fill: "purple",
                drawSVG: "100%"
            })
       
        return tl;






}


var mainTL = gsap.timeline();
mainTL.add(tealoopAnimation())
.add(wAnimation());

GSDevTools.create();
