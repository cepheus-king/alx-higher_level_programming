const ToggleHeader = $('DIV#toggle_header');
ToggleHeader.click(function () {
  const header = $('header');
  if (header.hasClass('red')) {
    header.removeClass('red');
    header.addClass('green');
  } else {
    header.removeClass('green');
    header.addClass('red');
  }
});
