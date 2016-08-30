$(document).ready(function() {
  var $title = $('<h1>');
  $title.text('Todo App');
  $('body').append($title);

  var $input = $('<input>');
  $input.attr('placeholder', 'TASK HERE');
  var $ul = $('<ul>');
  var $button = $('<button id="add_todo">');
  $button.text('Add Todo');
  $('body').append($input);
  $('body').append($ul);
  $('body').append($button);

  $input.on('change', function(ev) {
    var taskName = $(ev.target).val();
    var $newItem = $('<li>');

    $newItem.text(taskName);
    $ul.append($newItem);

    // var $editbutton = $('<button class="edit">').text('Edit');
    // $newItem.append($editbutton);

    var $removeX = $('<button class="rm">').text('X');
    $newItem.append($removeX);

    $(ev.target).val('');
  });

  $('ul').on('click', '.rm', function(ev) {
    console.log("remove");
    $(this).parent().remove();
  });

});

// $('ul').on('click', '.edit', function (ev) {
//   $(this).parent().remove();
// });
