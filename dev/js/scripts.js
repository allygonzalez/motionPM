import {
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set("#hero h1 span", {
    alpha: 0.25
})


function heroAnimation() {
    var tl = gsap.timeline();

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
        // desktop setup code here...
        tl.from("#line-1", {
                duration: .5,
                x: -200,
                alpha: 0

            })
            .from("#line-2", {
                duration: .5,
                x: -100,
                alpha: 0,

            }, "-=0.25")
            .from("#explore-btn", {
                duration: .5,
                x: 200,
                alpha: 0,

            }, "-=0.25")
    });

    mm.add("(max-width: 767px)", () => {
        // mobile setup code here...
        tl.from("#line-1", {
                duration: .5,
                y: -200,
                alpha: 0

            })
            .from("#line-2", {
                duration: .5,
                y: -100,
                alpha: 0,

            }, "-=0.25")
            .from("#explore-btn", {
                duration: .5,
                y: 200,
                alpha: 0,

            }, "-=0.25")
    });

    return tl;

}

let exploreBtn = document.querySelector("#explore-btn");

var buttonTL = gsap.timeline({
    paused: true
})
buttonTL.to("#explore-btn", {
    duration: 1,
    scale: 1.3
});

exploreBtn.addEventListener("mouseover", function () {
    buttonTL.play();
})

exploreBtn.addEventListener("mouseout", function () {
    buttonTL.reverse();
});










function historyAnimation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#history",
            scrub: true,
            markers: false,
            end: "top 30%"
        }
    });
    tl.from("#history aside div", {
            duration: 1,
            scale: 3,
            alpha: 0
        }, "starthistory")
        .from("#history h1", {
            duration: 1,
            x: "-=200%",
            alpha: 0
        }, "starthistory")
        .from("#history p", {
            duration: 1,
            x: "-=100%",
            alpha: 0
        }, "starthistory")
    return tl;
}

function wonderAnimation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#hero-2",
            scrub: true,
            markers: true,
            end: "top 40%",
            start: "top 80%"
        }
    });
    tl.from("bg-img", {
            duration: 5,
            clipPath: "inset(0 50%)"
        })
        .from("#hero-2 h1", {
            duration: 1,
            scale: 3,
            alpha: 0
        }, "-=50%")
    return tl;
}



var mainTimeline = gsap.timeline();
mainTimeline.add(heroAnimation())
    .add(historyAnimation())
    .add(wonderAnimation());