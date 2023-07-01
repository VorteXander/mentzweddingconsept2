document.addEventListener('DOMContentLoaded', function () {
  const track = document.getElementById("image-track");
  const images = track.getElementsByClassName("image");
  const dimmer = document.getElementById("dimmer");

  for (const image of images) {
    image.addEventListener("click", function () {
      // Increase width and height of selected image
      this.style.width = "84vmin";
      this.style.height = "84vmin";

      // Calculate position to center the image
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const imageWidth = parseFloat(this.style.width);
      const imageHeight = parseFloat(this.style.height);
      const leftOffset = (windowWidth - imageWidth) / 2;
      const topOffset = (windowHeight - imageHeight) / 2;

      // Position the image in the center
      this.style.left = `${leftOffset}px`;
      this.style.top = `${topOffset}px`;

      // Apply dimming effect to other images
      for (const otherImage of images) {
        if (otherImage !== this) {
          otherImage.style.opacity = "0.5";
        }
      }

      // Display the dimmer
      dimmer.style.display = "block";

      // Disable dragging on the selected image

    });
  }

  dimmer.addEventListener("click", function () {
    // Restore image size, position, and opacity
    for (const image of images) {
      image.style.width = "40vmin";
      image.style.height = "56vmin";
      image.style.left = "";
      image.style.top = "";
      image.style.opacity = "1";

      // Enable dragging on all images
      image.style.pointerEvents = "auto";
    }

    // Hide the dimmer
    this.style.display = "none";
  });

  // gets the position of the mouse when clicked
  window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
  }

  // mouse movement
  window.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    let nextPercentage = (mouseDelta / maxDelta) * -100;

    nextPercentage = Math.min(nextPercentage, 0);
    nextPercentage = Math.max(nextPercentage, -100);

    track.dataset.percentage = nextPercentage;

    track.animate(
      { transform: `translate(${nextPercentage}%, -50%)` },
      { duration: 1200, fill: "forwards" }
    );

    const images = track.getElementsByClassName("image");
    for (const image of images) {
      image.animate(
        { objectPosition: `${100 + nextPercentage}% center` },
        { duration: 1200, fill: "forwards" }
      );
    }
  }

  window.onmouseup = e => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
  }
});
