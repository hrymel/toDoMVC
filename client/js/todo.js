(function(){
  $(document).ready(function() {

    //Add items to list
    $('#inputBtn').on("click", function(event) {
      var inputText = $('#inputTask').val();
      var addToList = "<li> <label><input type='checkbox' onchange='percDone()'> " + inputText + "</input></label></li>";
      $(addToList).appendTo("ul");
      $('#inputTask').val('');
    });

    //Reset list and form
    $('#resetBtn').on("click", function(event) {
      $('.addThemHere').empty();
      $('#inputTask').val('');
      $('#percDoneNum').text('0');
    });

    //Apply styling to done items
    $(document).on('click', 'li', function(e) {
      $(this).toggleClass('done');
      var numOfLi = $('li').length;
      var checkedItems = $('li :checked').length;
      var percDone = (checkedItems / numOfLi) * 100;
      $('#percDoneNum').text(percDone);
    });

    //delete checked items
    $('#deleteBtn').on("click", function(event) {
      $('li :checked').parent().parent().remove();
    });

  });
})()