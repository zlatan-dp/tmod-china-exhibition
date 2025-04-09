const bentoBox = document.querySelector('.bento-box');
const elements = document.querySelectorAll('.bento-item');

function setBentoBoxClass(classname) {
  bentoBox.className = 'bento-box ' + classname;
}

elements.forEach((element, index) => {
  const className = 'hover-' + (index + 1);
  element.addEventListener('mouseenter', () => setBentoBoxClass(className));
  element.addEventListener('mouseleave', () => setBentoBoxClass('default'));
});
