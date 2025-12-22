document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".youtube-container").forEach((container) => {
    const btn = container.querySelector(".play-btn");
    btn.addEventListener("click", () => {
      const videoId = container.dataset.video;
      container.innerHTML = `<iframe
        src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1"
        title="Cavalcada de Reis Collbató"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`;
    });
  });
});
