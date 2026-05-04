/* ============================================================
   MATHIS ALLEN- Portfolio
   main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Fade-in on scroll ────────────────────────────────────── */
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('in');
    }),
    { threshold: 0.08 }
  );

  document.querySelectorAll('.fade').forEach(el => observer.observe(el));

});
