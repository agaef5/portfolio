
var activeEmbed;
var isClickOutsideEnabled = false;

function toggleEmbed(embedType) {
    activeEmbed = document.querySelector('.' + embedType);
    
    var isInactive = activeEmbed.classList.contains('embed_inactive');

      if (isInactive) {
        activeEmbed.classList.add('embed_active');
        activeEmbed.classList.remove('embed_inactive');
        isClickOutsideEnabled = true;
      } else {
        activeEmbed.classList.add('embed_inactive');
        activeEmbed.classList.remove('embed_active');
      }
      
      closeOtherEmbeds(activeEmbed);
      
  };

function closeOtherEmbeds(activeEmbed) {
    var allEmbeds = document.querySelectorAll(".audio_player");

    for (var i = 0; i < allEmbeds.length; i++) {
        if (allEmbeds[i] != activeEmbed) {
            allEmbeds[i].classList.remove('embed_active');
            allEmbeds[i].classList.add('embed_inactive');
        }
    }
};


//close embed when user clicks outside the embed
document.addEventListener('click', function(event) {
  if (isClickOutsideEnabled) {
      var clickedElement = event.target;
 
      var isEmbed = clickedElement.classList.contains('audio_player') || 
                    clickedElement.classList.contains('radio_button') ||
                    clickedElement.closest('.audio_player') ||
                    clickedElement.closest('.radio_button');

      if (!isEmbed) {
          activeEmbed.classList.add('embed_inactive');
          activeEmbed.classList.remove('embed_active');
          isClickOutsideEnabled = false;
      }
  }
});