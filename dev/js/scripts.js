import {
    gsap
} from "gsap";




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




var MainTL = gsap.timeline();
MainTL.add(heroAnimation);




let exploreBtn = document.querySelector("#explore-btn");

varbuttonTL = gsap.timeline({
    paused: true
});
buttonTL.to("#explore-btn", {
    duration: 1,
    scale: 2
});

exploreBtn.addEventListener("mouseover", function () {
    buttonTL.play();
})

exploreBtn.addEventListener("mouseout", function () {
    buttonTL.reverse();
})