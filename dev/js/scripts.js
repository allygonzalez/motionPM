import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);

function olineAnimation() {
        var tl = gsap.timeline();
        tl.to("#o",
          {
            duration: 3,
            repeat: 0,
            repeatDelay: 2,
            ease: "power1.inOut",
            motionPath:{
              path: "#oline",
              align: "#oline",
              autoRotate: true,
              alignOrigin: [0.5, 0.5]
              
      }
          });
      
        return tl;
      }

      function plineAnimation() {
        var tl = gsap.timeline();
        tl.to("#P",
          {
            duration: 4,
            repeat: 0,
            repeatDelay: 2,
            ease: "power1.inOut",
            motionPath:{
              path: "#pline",
              align: "#pline",
              alignOrigin: [0.5, 0.5]
      }
          });
      
        return tl;
      }


      function smileAnimation() {
        var tl = gsap.timeline();
        tl.fromTo("#smile", 
       {drawSVG: "0% 0%"},
        
        {
                duration: 1.5,
                fill: "none",
                drawSVG: "100%"
            })
       
        return tl;

        

}












      
      
      
      
      var mainTL = gsap.timeline();
mainTL.add(olineAnimation(),"do")
.add(plineAnimation(),"do")
.add(smileAnimation())