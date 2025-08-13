// document.addEventListener('DOMContentLoaded', () => {
//   const el = document.getElementById('about-running');
//   const container = el.parentElement;

//   const SPEED = 100; // px per detik
//   let textWidth, containerWidth;
//   let x; 
//   let lastTime = null;

//   function measure() {
//     textWidth = el.offsetWidth;
//     containerWidth = container.offsetWidth;
//     x = -textWidth; // mulai dari luar kiri
//     el.style.transform = `translateX(${x}px)`;
//   }

//   window.addEventListener('resize', measure);

//   function step(timestamp) {
//     if (!lastTime) lastTime = timestamp;
//     const dt = (timestamp - lastTime) / 1000;
//     lastTime = timestamp;

//     // Gerakkan terus tanpa pause
//     x += SPEED * dt;
//     el.style.transform = `translateX(${x}px)`;

//     if (x > containerWidth) {
//       x = -textWidth; // reset ke kiri
//     }

//     requestAnimationFrame(step);
//   }

//   // tunggu render selesai baru hitung ukuran
//   setTimeout(() => {
//     measure();
//     requestAnimationFrame(step);
//   }, 50);
// });