 // === feedback estudiante ===
  const slider = document.querySelector(".feedback-slider");
  const indicators = document.querySelector(".feedback-slider-indicators");

  if (slider && indicators) {
    const items = Array.from(slider.querySelectorAll(".feedback-item"));
    const gap = 40;
    let index = 0;
    let dots = [];

    function getVisibleCount() {
      const width = window.innerWidth;
      if (width < 768) return 1;
      if (width < 1200) return 2;
      return 3;
    }

    function buildDots() {
      indicators.innerHTML = "";
      const visible = getVisibleCount();
      const totalDots = Math.max(items.length - visible + 1, 1);
      dots = [];

      for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => {
          index = i;
          updateSlider();
        });
        indicators.appendChild(dot);
        dots.push(dot);
      }
    }

    function updateSlider() {
      const cardWidth = items[0].offsetWidth + gap;
      const visible = getVisibleCount();
      const maxIndex = items.length - visible;
      index = Math.max(0, Math.min(index, maxIndex));
      const scrollPosition = index * cardWidth;
      slider.scrollTo({ left: scrollPosition, behavior: "smooth" });
      updateDots();
    }

    function updateDots() {
      dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    }

    function onScroll() {
      const cardWidth = items[0].offsetWidth + gap;
      const newIndex = Math.round(slider.scrollLeft / cardWidth);
      if (newIndex !== index) {
        index = newIndex;
        updateDots();
      }
    }

    slider.addEventListener("scroll", onScroll);
    window.addEventListener("resize", () => {
      const oldIndex = index;
      buildDots();
      index = Math.min(oldIndex, dots.length - 1);
      updateDots();
    });

    buildDots();
  }
