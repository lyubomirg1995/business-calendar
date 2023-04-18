// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    $('.time-block').on('click', '.saveBtn', function(event) {
        event.preventDefault();

        var timeBlockId = $(this).parent().attr('id');
        var timeBlockText = $(this).siblings('.description').val();

        localStorage.setItem(timeBlockId, JSON.stringify(timeBlockText));

})
  
  

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    $('.time-block').each(function() {
      var businessHour = parseInt($(this).attr("id").split("-")[1]);
      var currentTime = dayjs().hour();

      if(businessHour < currentTime) {
        $(this).addClass("past");
      } else if (businessHour === currentTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
      
 })
    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
    $('.time-block').each(function() {
        var timeBlockId = $(this).parent().attr('id')
        var textString = localStorage.getItem(timeBlockId);
        var text = JSON.parse(textString)
        $(this).children('.description').val(text);
    })



       var currentDate = dayjs(); 
      $('#currentDay').text(currentDate.format('dddd, MMMM D YYYY'));
  });
  