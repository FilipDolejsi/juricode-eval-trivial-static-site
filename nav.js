// Tiny mobile nav toggle. No network calls, no data collection, no AI.
document.getElementById("nav-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("open");
});
