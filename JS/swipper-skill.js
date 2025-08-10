// Inisialisasi Swiper
const skillSwiper = new Swiper(".skillSwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 16,
  loop: true,
  grabCursor: true,
});

// Klik gambar untuk aktifkan head-skill
document.addEventListener("DOMContentLoaded", function () {
  const skillItems = document.querySelectorAll(".skill-item");

  skillItems.forEach((item) => {
    const img = item.querySelector("img");
    const headSkill = item.querySelector(".head-skill");

    img.addEventListener("click", function () {
      // Matikan semua
      document.querySelectorAll(".head-skill").forEach(el => {
        el.classList.remove("active");
      });

      // Aktifkan yang diklik
      headSkill.classList.add("active");
    });
  });
});
