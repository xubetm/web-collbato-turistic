document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".play-btn");
    if (!btn) return;

    const container = btn.closest(".youtube-container");
    const videoId = container.dataset.video;

    container.innerHTML = `<iframe ...></iframe>`;
  });
});
