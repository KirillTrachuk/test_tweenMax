const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', (e) => {
//     cursor.style.left = e.pageX + 'px';
//     cursor.style.top = e.pageY + 'px';
// })

t1 = new TimelineMax({ paused: true });

t1.to(".nav-container", 1, {
    left: 0,
    ease: Expo.easeInOut
});

t1.staggerFrom(".menu > div", 0.8, {
    y: 100,
    opacity: 0,
    ease: Expo.easeInOut
}, "0.1", "-=0.4");

t1.staggerFrom(".socials", 0.8, {
    y: 100, opacity: 0, ease: Expo.easeInOut
}, "0.4", "-=0.6");

t1.reverse();
$(document).on("click", ".menu-open", function() {
    t1.reversed(!t1.reversed());
    console.log("=====")
});
$(document).on("click", ".menu-close", function() {
    t1.reversed(!t1.reversed());
    console.log('close')
});

const link = document.querySelectorAll('.hover-this')
const animateit = function (e) {
    const span = this.querySelector('span');
    const { offsetX: x, offsetY: y } = e,
    { offsetWidth: width, offsetHeight: height } = this,

    move = 25,
    xMove = x / width * (move * 2) - move,
    yMove = y / height * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === 'mouseleave') span.style.transform = '';

};

const editCursor = e => {
    const { clientX: x,  clientY: y } = e;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
};

link.forEach(b => b.addEventListener('mousemove', animateit));
link.forEach(b => b.addEventListener('mouseleave', animateit));
window.addEventListener('mousemove', editCursor)