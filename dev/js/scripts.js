import {
    gsap
} from "gsap";

gsap.from("#line-1", {
    duration: 1,
    x: -200,
    alpha: 0
})
gsap.from("#line-2", {
    duration: 1,
    x: -100,
    alpha: 0,
    delay: 0.15
})
gsap.from("#explore-btn", {
    duration: 1,
    x: 200,
    alpha: 0,
    delay: 1
})

let exploreBtn = document.querySelector("#explore-btn");

exploreBtn.addEventListener("mouseover", function () {
    gsap.to("#explore-btn", {
        duration: 1,
        scale: 2
    });
})

exploreBtn.addEventListener("mouseout", function () {
    gsap.to("#explore-btn", {
        duration: 1,
        scale: 1
    });
})