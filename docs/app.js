let horizontalScroller = function () {
  // DOM element(s)
  const slider = document.querySelector(".slider");

  // when windowY scrolls move the slider
  window.onscroll = () => {
    slider.style.left = `${-window.scrollY}px`;
  };

  // Variables to work with the scroll
  let currentPos = slider.getBoundingClientRect().left;
  let newPos, diff, speed;

  // get the new position and check difference with current and create skew effect
  const callDistort = () => {
    newPos = slider.getBoundingClientRect().left;
    diff = newPos - currentPos;
    speed = diff * 0.25;

    slider.style.transform = `skewX(${speed}deg)`;

    currentPos = newPos;

    requestAnimationFrame(callDistort);
  };

  callDistort();
};

// Invoke code
horizontalScroller();
