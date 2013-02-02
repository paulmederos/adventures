// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function() {

  $('.timeline-preview').toggle(function() {
    var description = '#' + $(this).data('description');
    $(description).slideDown(300, 'swing');
    $(this).addClass('pressed');
    event.preventDefault();
  }, function() {
    // Hide the content based on data attribute of link clicked.
    hideTimelineDescription($(this));
  });

});

function hideTimelineDescription(toggledButton){
    var description = toggledButton.data('description');
    var descriptionElement = '#' + description;
    $(descriptionElement).slideUp(300, 'swing');
    toggledButton.removeClass('pressed');
    $(".description-trigger-open[data-description='" + description +"']").fadeIn();
    event.preventDefault();
}