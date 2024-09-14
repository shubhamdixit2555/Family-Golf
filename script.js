// notice 
document.querySelector("#notice_continue").addEventListener("click", () => {
    document.querySelector(".alert_box").style.display = 'none';
    document.body.classList.remove('no-scroll');
});

// Initially disable scrolling
document.body.classList.add('no-scroll');


// move cursor
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.crsr');
    const cursorBlur = document.querySelector('.crsr_blur');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        // Adjust the position to center the cursor and cursor blur
        const cursorWidth = cursor.offsetWidth / 2;
        const cursorHeight = cursor.offsetHeight / 2;
        const cursorBlurWidth = cursorBlur.offsetWidth / 2;
        const cursorBlurHeight = cursorBlur.offsetHeight / 2;

        cursor.style.transform = `translate(${x - cursorWidth}px, ${y - cursorHeight}px)`;
        cursorBlur.style.transform = `translate(${x - cursorBlurWidth}px, ${y - cursorBlurHeight}px)`;
    });

    const links = document.querySelectorAll('a, button, .pointer');

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add("crsr_hover");
            // cursorBlur.style.transform += ' scale(3)';
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove("crsr_hover");
            // cursorBlur.style.transform = cursorBlur.style.transform.replace(' scale(3)', '');
        });
    });
});


// nav hover color
const nav = document.querySelector(".nav");
const nav_children = document.querySelectorAll(".inner_nav h4");
nav_children.forEach(child => {
    child.addEventListener("mouseenter", () => {
        if (window.getComputedStyle(nav).backgroundColor === "rgba(0, 0, 0, 0)") {
            child.style.color = "black";
        } else {
            child.style.color = "#95C11E";
        }
    });

    child.addEventListener("mouseleave", () => {
        // Reset the color when the mouse leaves
        child.style.color = ""; // This will reset to the original color
    });
});


// nav bg change 
gsap.to(".nav", {
    backgroundColor: "black",
    height: "100px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start:"top -10%",
        end: "top -10%",
        scrub: 1
    }
})

// main bg change
gsap.to(".main",{
    backgroundColor: "rgb(0, 0, 0)",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -11%",
        end: "top -80%",
        scrub: 2
    }
})

// down arrow page2 
const arrow = document.querySelector(".arrow_down");
const arrow_icon = document.querySelector(".arrow_down_icon");
arrow.addEventListener("click", () => {
    const page2 = document.querySelector(".page2");
    // Calculate the position to scroll to, adjusting for the 100px navbar
    const offsetPosition = page2.getBoundingClientRect().top -  100;

    // Scroll the page to that position smoothly
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    })
})

// down arrow hover
arrow.addEventListener("mouseenter", () => {
    arrow.style.backgroundColor = "#95C11E";
    arrow.style.transform = "scale(0.5)";
})
arrow.addEventListener("mouseleave", () => {
    arrow.style.backgroundColor = "transparent";
    arrow.style.transform = "scale(1)";
})


// food images container picture changing function
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.food_inner_images');
    const buttons = document.querySelectorAll('.img_btn');
    let currentIndex = 0;
    let startX, endX;

    function showImage(index) {
        // Hide all images and remove active class from all buttons
        images.forEach(img => img.style.display = 'none');
        buttons.forEach(btn => btn.classList.remove('btn_active'));

        // Show the selected image and add active class to the corresponding button
        images[index].style.display = 'block';
        buttons[index].classList.add('btn_active');
    }
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }
    // Add click event listeners to buttons
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentIndex = index;
            showImage(currentIndex);
        });
    });

    // Swipe functionality
    document.querySelector('.food_images').addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    })
    document.querySelector('.food_images').addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        if (startX > endX + 50) {
            nextImage();
        } else if (startX < endX - 50) {
            prevImage();
        }
    });

    // Initialize the first image and button as active
    showImage(currentIndex);
});


// note animation
gsap.to("#note_img_1",{
    left: "10%",
    scrollTrigger: {
        trigger: ".note",
        scroller: "body",
        start: "top 70%",
        end: "top 70%",
        scrub: 2,
        // markers: true
    }
})
gsap.to("#note_img_2",{
    right: "10%",
    scrollTrigger: {
        trigger: ".note",
        scroller: "body",
        start: "top 70%",
        end: "top 70%",
        scrub: 2,
        // markers: true
    }
})


// big text outline color change while hovering on it
const big_text = document.querySelector('.big_txt_p');
const pg4_btns = document.querySelectorAll('.btn_pg4');
pg4_btns.forEach(button => {
    button.addEventListener('mouseover', () => {
        big_text.style.webkitTextStroke = '2px #95C11E';
    });
    button.addEventListener('mouseout', () => {
        big_text.style.webkitTextStroke = '2px white';
    });
});

// gsap for animate big text
gsap.to(big_text,{
    top: "7.5%",
    scrollTrigger: {
        trigger: ".btnWithText",
        scroller: "body",
        start: "top 85%",
        end: "top 98%",
        scrub: 2,
    }
})



// opening links
const default_url = "https://sidcupfamilygolf.com/";

function linkOpen(target) {
    window.open(default_url + target);
}
function TOPTRACER_RANGE(){
    window.open( default_url + 'toptracer-range');
}
function GOLF_LESSONS(){
    window.open( default_url + 'GOLF-LESSONS');
}
function ADVENTURE_GOLF(){
    window.open( default_url + 'ADVENTURE-GOLF');
}
function CAFE(){
    window.open( default_url + 'coffee-shop');
}
function EVENTS(){
    window.open( default_url + 'EVENTS');
}
function contact(){
    window.open( default_url + 'contact');
}
function pay_gap(){
    window.open( default_url + 'gender-pay-gap');
}
function terms_and_conditions(){
    window.open( default_url + 'terms-and-conditions');
}
function privacy_policy(){
    window.open( default_url + 'privacy-policy');
}
function web_design(){
    window.open("https://www.cbwebsitedesign.co.uk/");
}
function BOOK_RANGE(){
    window.open( "https://bookings.sidcupfamilygolf.com");
}
function BOOK_GOLF(){
    window.open("https://mrmulligan.com/sidcup");
}
function direction(){
    window.open("https://www.google.co.uk/maps/place/Sidcup+Family+Golf/@51.4315106,0.0771001,15z/data=!4m6!3m5!1s0x47d8abfd060438a7:0x1d7137d3e754b75a!8m2!3d51.4315106!4d0.0771001!16s%2Fg%2F1trqggsk?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D");
}
function facebook() {
    window.open("https://www.facebook.com/SidcupFamilyGolf");
}
function instagram() {
    window.open("https://www.instagram.com/sfg_uk/");
}
function family_golf() {
    window.open("https://sidcupfamilygolf.com/");
}


// Adding aditional animations 
var tl = gsap.timeline();

// page1
tl.from(".page1 h1, .page1 h2, .page1 p", {
    y: 150,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})

// page2 (about)
gsap.from(".about .left_about", {
    x:-100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".about",
        scroller: "body",
        start: "top 75%",
        end: "top 100%",
        scrub: 2,
    }    
})
gsap.from(".about .center_about h2", {
    y: 150,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".about",
        scroller: "body",
        start: "top 75%",
        end: "top 100%",
        scrub: 3
    }
})
gsap.from(".about .center_about p", {
    y: 150,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".about",
        scroller: "body",
        start: "top 75%",
        end: "top 100%",
        scrub: 3
    }
})
gsap.from(".about .right_about", {
    x:100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".about",
        scroller: "body",
        start: "top 75%",
        end: "top 100%",
        scrub: 2
    }
})

// green linear container
gsap.from(".page3 .green_gradient", {
    y:150,
    opacity: 0,
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top 98%",
        end: "top 100%",
        scrub: 2,
    }    
})
gsap.from(".green_gradient #gradient_img_1", {
    x:-100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top 90%",
        end: "top 100%",
        scrub: 2,
    }    
})
gsap.from(".green_gradient h2", {
    y: 150,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top 90%",
        end: "top 100%",
        scrub: 2,
    }
})
gsap.from(".green_gradient #gradient_img_2", {
    x:100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top 90%",
        end: "top 100%",
        scrub: 2,
    }
})

// food container
gsap.from(".food_images .left", {
    y: 150,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".food_images",
        scroller: "body",
        start: "top 80%",
        end: "top 100%",
        scrub: 2,
    }    
})
gsap.from(".food_images .right", {
    y: 150,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".food_images",
        scroller: "body",
        start: "top 80%",
        end: "top 100%",
        scrub: 2,
    }
})

// footer
gsap.from(".footer div", {
    y: 150,
    opacity: 0,
    scrollTrigger: {
        trigger: ".footer",
        scroller: "body",
        start: "top 85%",
        end: "top 100%",
        scrub: 2,
    }  
})