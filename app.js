lucide.createIcons();

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    
    gsap.fromTo(".hero-content > *", 
        { 
            y: 40, 
            opacity: 0 
        },
        { 
            y: 0, 
            opacity: 1, 
            duration: 1.2, 
            stagger: 0.15, 
            ease: "power3.out",
            delay: 0.2
        }
    );

    gsap.fromTo(".banner-content",
        {
            y: 20,
            opacity: 0
        },
        {
            scrollTrigger: {
                trigger: ".banner-content",
                start: "top 90%",
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        }
    );

    gsap.fromTo(".section-header",
        {
            y: 30,
            opacity: 0
        },
        {
            scrollTrigger: {
                trigger: ".section-header",
                start: "top 85%",
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        }
    );

    gsap.fromTo(".service-card",
        {
            y: 50,
            opacity: 0
        },
        {
            scrollTrigger: {
                trigger: ".service-card",
                start: "top 85%",
            },
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out"
        }
    );

    gsap.fromTo(".contact-content > *",
        {
            y: 30,
            opacity: 0
        },
        {
            scrollTrigger: {
                trigger: ".contact-content",
                start: "top 85%",
            },
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out"
        }
    );
});
