document.addEventListener("DOMContentLoaded", function () {
  addSmoothScrollListener("#circle", "about-page");
  addSmoothScrollListener("#our-products", "page-1");
  addSmoothScrollListener("#home", "page-home");
  addSmoothScrollListener("#about", "about-page");
  addSmoothScrollListener("#our-team", "our-team-page");
  addSmoothScrollListener("#contact", "contact-us");
  addSmoothScrollListener(".image-nav-bar", "page-home");

  var images = document.getElementsByClassName("img-card");
  new simpleParallax(images, {
    delay: 0.1,
    scale: 1.5,
    transition: "cubic-bezier(.17,.67,.83,.67)",
  });
});

// -------------- Functions  --------------
function smoothScrollTo(targetPosition, duration) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  function scrollStep(timestamp) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startPosition + distance * progress);

    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
}

function navBarPhone() {
  var content = document.getElementById("myLinks");
  if (content.style.display === "flex") {
    content.style.display = "none";
  } else {
    content.style.display = "flex";
  }
}

function addSmoothScrollListener(selector, targetId) {
  document.querySelectorAll(selector).forEach(function (element) {
    element.addEventListener("click", function () {
      const targetSection = document.getElementById(targetId);
      smoothScrollTo(targetSection.offsetTop, 700);
    });
  });
}
