const contents = document.querySelectorAll('.accordion-content');
const icons = document.querySelectorAll('.text-icon');

function buttonClick(index) {
  var contentDisplay = contents[index].style.display;
  if (contentDisplay === 'none' || contentDisplay === '') {
    contents[index].style.display = 'flex';
    icons[index].style.content = 'url("assets/images/icon-minus.svg")'
  } else if (contentDisplay === 'flex') {
    contents[index].style.display = 'none';
    icons[index].style.content = 'url("assets/images/icon-plus.svg")'
  }
}