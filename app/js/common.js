window.onload = function() {
let el = document.querySelector(".loading-screen");
TweenMax.to(el, 4, {
    delay: 2.6,
    top: "-110%",
    ease: Expo.easeInOut
});
console.log(el)
}