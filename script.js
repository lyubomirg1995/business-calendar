
$(function () {
    
// second argument targets the button,then text context is stored in localstorage
    $('.time-block').on('click', '.saveBtn', function(event) {
        event.preventDefault();

        var timeBlockId = $(this).parent().attr('id');
        var timeBlockText = $(this).siblings('.description').val();

        localStorage.setItem(timeBlockId, JSON.stringify(timeBlockText));
})
  
  

// each text box has its color conditionally changed according to the current time compared to business hours
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
    
    
    // text-content is retrieved from localStorage and persists after being saved
    $('.time-block').each(function() {
        var timeBlockId = $(this).attr('id');
        var textString = localStorage.getItem(timeBlockId);
        var text = JSON.parse(textString)
        $(this).children('.description').val(text);
    })


      //current month and day is displayed at the top
       var currentDate = dayjs(); 
      $('#currentDay').text(currentDate.format('dddd, MMMM D YYYY'));
  });
  