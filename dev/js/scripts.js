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
      repeat: 0,
      repeatDelay: 2,
      ease: "power1.inOut",
      motionPath:{
        path: "#logopath",
        align: "#logopath",
        autoRotate: -75,
        alignOrigin: [0.5, 0.5]
}
    });

  return tl;
}

function bluegradientAnimation() {
        var tl = gsap.timeline();
        tl.fromTo("#bluegradient", 
       {drawSVG: "0% 0%"},
        
        {
                duration: .3,
                fill: "none",
                drawSVG: "100%"
            })
       
        return tl;

        






}


function pinkgradientAnimation() {
        var tl = gsap.timeline();
        tl.fromTo("#pinkgradient", 
       {drawSVG: "0% 0%"},
        
        {
                duration: .3,
                fill: "none",
                drawSVG: "-100%"
            })
       
        return tl;

        

}

function orangegradientAnimation() {
        var tl = gsap.timeline();
        tl.fromTo("#orangegradient", 
       {drawSVG: "0% 0%"},
        
        {
                duration: .3,
                fill: "none",
                drawSVG: "100%"
            })
       
        return tl;

        
}

let tl= gsap.timeline();
tl.from("#w", {
autoAlpha: 0,
x: "200%",
stagger: 0.5,
ease: "expo.out"
}
);


























function wAnimation() {
        var tl = gsap.timeline();
        tl.fromTo("#w", 
       {drawSVG: "0% 0%"},
        
        {
                duration: 1,
                fill: "none",
                drawSVG: "100%"
            })
       
        return tl;


}
function wsAnimation (){
        gsap.to(".#w", {
                duration: 1,
                scale: 0.1,
                x: 40,
                ease: "power1.inOut",
                stagger: {
                  grid: [7,15],
                  from: "end",
                  axis: "x",
                  ease: "power3.inOut",
                  amount: 1.5
                }
              });
        

}












function aAnimation() {
        var tl = gsap.timeline();
        tl.fromTo("#a", 
       {drawSVG: "0% 0%"},
        
        {
                duration: 1,
                fill: "none",
                drawSVG: "100%"
            })
       
        return tl;

        






}
function pAnimation() {
        var tl = gsap.timeline();
        tl.fromTo("#p", 
       {drawSVG: "0% 0%"},
        
        {
                duration: 1,
                fill: "none",
                drawSVG: "100%"
            })
       
        return tl;

        






}
function p_2Animation() {
        var tl = gsap.timeline();
        tl.fromTo("#p_2", 
       {drawSVG: "0% 0%"},
        
        {
                duration: 1,
                fill: "none",
                drawSVG: "100%"
            })
       
        return tl;

        






        }

        function lAnimation() {
                var tl = gsap.timeline();
                tl.fromTo("#l", 
               {drawSVG: "0% 0%"},
                
                {
                        duration: 1,
                        fill: "none",
                        drawSVG: "100%"
                    })
               
                return tl;
        
                
        
        
        
        
        
                }
                function eAnimation() {
                        var tl = gsap.timeline();
                        tl.fromTo("#e", 
                       {drawSVG: "0% 0%"},
                        
                        {
                                duration: 1,
                                fill: "none",
                                drawSVG: "100%"
                            })
                       
                        return tl;
                
                        
                
                
                
                
                
                        }
                        function rAnimation() {
                                var tl = gsap.timeline();
                                tl.fromTo("#r", 
                               {drawSVG: "0% 0%"},
                                
                                {
                                        duration: 1,
                                        fill: "none",
                                        drawSVG: "100%"
                                    })
                               
                                return tl;
                        
                                
                        
                        
                        
                        
                        
                                }
                
        



var mainTL = gsap.timeline();
mainTL.add(tealoopAnimation())
.add(bluegradientAnimation())
.add(pinkgradientAnimation())
.add(orangegradientAnimation())
.add(wAnimation(),"do")
.add(wsAnimation(),"do")
.add(aAnimation(),"do")
.add(pAnimation(),"do")
.add(p_2Animation(),"do")
.add(lAnimation(),"do")
.add(eAnimation(),"do")
.add(rAnimation(),"do")





GSDevTools.create();
