gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
  trigger: ".bottle",
  start: "-7%",
  pin: true,
  pinSpacing: false,
  stagger: 0.3,
  // markers: true,
});
