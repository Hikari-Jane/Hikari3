//ローディング画面のアニメーション↓

const loadingText = document.querySelector('#loading_text p');
const loadingAnimation = document.querySelector('#loading-animation');
const loadingScreen =document.querySelector('#loading_screen');

window.addEventListener('load', () => {
    
    loadingText.animate(
        {
            opacity:[1,0],
            visibility:'hidden',
        },
        {
            duration:2000,
            fill:'forwards',
        });
    
    loadingAnimation.animate(
        {
            opacity:[0,1],
        },
        {
            duration:3000,
            fill:'forwards',
        });
    
    loadingScreen.animate(
        {
            translate:[0,'0 -100vh'],
        },
        {
            duration:1000,
            fill:'forwards',
        }
    );
});




//ローディング画面のアニメーション↑

//BASIC INFOのアニメーション↓

const basicInfo = document.querySelector('#basic_info');
const keyframes1 = {
    translate : ['200px 0',0],
    opacity : [0,1],
    };
const showBasicInfo = (e) => {
    e[0].target.animate(keyframes1,2000);
};

const basicinfoObserver = new IntersectionObserver(showBasicInfo);
basicinfoObserver.observe(basicInfo);

    /////

const introAnimation = document.querySelector('#intro_animation');
const keyframes3 = {
    opacity : [0,1],
};
const options3 = {
    duration: 6000,
    fill: 'forwards',
};
const showIntroAnimation = (e) => {
    e[0].target.animate(keyframes3,options3);
};
const introAnimationObserver = new IntersectionObserver(showIntroAnimation);
introAnimationObserver.observe(introAnimation);
    /////

//BASIC INFOのアニメーション↑

//GALLERYのアニメーション↓
const galleryGallery = document.querySelector('#gallery_gallery');

const showGallery = (e) => {
    const keyframes2 = {
        translate : ['-200px 0',0],
        opacity : [0,1],
    };
    e[0].target.animate(keyframes2,2000);
};

const galleryObserver = new IntersectionObserver(showGallery);
galleryObserver.observe(galleryGallery);

    /////

const galleryAnimation = document.querySelector('#gallery_animation');
const items = document.querySelectorAll('.item');
const showGalleryAnimation = () => {
    for (let i=1; i<items.length; i++) {
        const keyframes4 = {
            filter : ['blur(10px)','blur(0)'],
        };
        const options4 = {
            duration : 1000,
            delay : i*300,
            rootMargin : '800px',
            fill : 'forwards',
        };
        items[i].animate(keyframes4,options4);
    };
};
const galleryAnimationObserver = new IntersectionObserver(showGalleryAnimation);
galleryAnimationObserver.observe(galleryAnimation);

    /////

const keyframes5 = {
    opacity : [0,1],
};
for (let l=1; l<items.length; l++) {
    const itemsAnimation = () => {
    items[l].animate(keyframes5, 500);
    };
    items[l].addEventListener('mouseover', itemsAnimation);
};

//GALLERYのアニメーション↑