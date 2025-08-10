document.addEventListener("click", function (event) {
  const navbar = document.getElementById("navbarNav");
  const toggler = document.querySelector(".navbar-toggler");

  // Cek kalau navbar lagi terbuka & klik di luar navbar
  if (navbar.classList.contains("show") && 
      !navbar.contains(event.target) && 
      !toggler.contains(event.target)) {
    toggler.click(); // tutup navbar
  }
});
