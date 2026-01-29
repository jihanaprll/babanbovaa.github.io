gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".reveal").forEach(el => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%"
    }
  });
});

/* MODAL */
const modal = document.querySelector(".modal");
document.querySelector(".open-modal").onclick = () => {
  modal.classList.add("show");
};
document.querySelector(".close").onclick = () => {
  modal.classList.remove("show");
};
