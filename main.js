const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
const title = document.querySelector('#title');

const leftRead = document.querySelector('#left-read');
const rightRead = document.querySelector('#right-read');
/*left.mouseenter = e => container.classList.add('hover-left');
left.mouseleave = e => container.classList.remove('hover-left');

right.mouseenter = e => container.classList.add('hover-right');
right.mouseleave = e => container.classList.remove('hover-right');
*/

left.addEventListener('mouseenter', () => {
  container.classList.add('hover-left');
  title.classList.add('title-fade');
});
left.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left');
  title.classList.remove('title-fade');

  if(container.classList.contains('read-left'))container.classList.remove('read-left');

});

right.addEventListener('mouseenter', () => {
  container.classList.add('hover-right');
  title.classList.add('title-fade');
});
right.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right');
  title.classList.remove('title-fade');

  if(container.classList.contains('read-right'))container.classList.remove('read-right');
});

leftRead.onclick = e => {
  e.preventDefault();
  if(container.classList.contains('read-left'))container.classList.remove('read-left');
  else container.classList.add('read-left');
}

rightRead.onclick = e => {
  e.preventDefault();
  if(container.classList.contains('read-right'))container.classList.remove('read-right');
  else container.classList.add('read-right');
}



window.onload = () => {
  title.classList.add('title-fade');
  setTimeout(() => title.classList.remove('title-fade'), 400);
}
