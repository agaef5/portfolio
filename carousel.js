$(document).ready(function() {
    // Variables
    const carousel = $(".project_gallery");
    let isDragging = false;
    let isLinkClickDisabled = false;
    let startX, startScrollLeft;
  
    // Event listeners
    carousel.on("mousedown touchstart", (e) => {
      isDragging = true;
      isLinkClickDisabled = false;
      startX = e.pageX || e.originalEvent.touches[0].pageX;
      startScrollLeft = carousel.scrollLeft();
      carousel.addClass("dragging");
      // Disable smooth scrolling during drag
      carousel.css("transition", "none");
    });
  
    $(document).on("mouseup touchend", () => {
      if (isDragging) {
        isDragging = false;
        carousel.removeClass("dragging");
        // Restore smooth scrolling
        carousel.css("transition", "");
      }
    });
  
    $(document).on("mousemove touchmove", (e) => {
      if (!isDragging) return;
  
      const currentPosition = e.pageX || e.originalEvent.touches[0].pageX;
      const distanceX = currentPosition - startX;
      carousel.scrollLeft(startScrollLeft - distanceX);
      isLinkClickDisabled = true; // Set the flag during dragging
    });
  
    // Prevent links from opening
    $(".project_container").on("click", (e) => {
      if (isLinkClickDisabled) {
        e.preventDefault(); // Prevent link from opening during dragging
        e.stopPropagation(); // Stop event propagation
      }
    });
  });
  