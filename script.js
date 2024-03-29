const spans = document.querySelectorAll('#player span');
const pc = document.querySelector('#pc');
const msg = document.querySelector('p');
const clicked = function (event) {
  if (!document.body.classList.contains('noclick')) {
    document.body.classList.add('noclick');
    const target = event.target;
    target.classList.add('chosen');
    for (var span of spans) {
      if (target !== span) {
        span.classList.add('hidden');
      }
    }
    var random = parseInt(Math.random() * 3);
    pc.textContent = spans[random].textContent;
    pc.dataset.id = spans[random].id;
    pc.classList.remove('hidden');
    setTimeout(results.bind(this, target), 250);
  }
};
const results = function (target) {
  if (target.id == pc.dataset.id) {
    msg.textContent = 'Draw';
  }
  if (target.id == 'rock'    && pc.dataset.id == 'paper'  || 
      target.id == 'paper'   && pc.dataset.id == 'scissor'|| 
      target.id == 'scissor' && pc.dataset.id == 'rock') {
    msg.textContent = 'You lost';
  }
  if (target.id == 'rock'    && pc.dataset.id == 'scissor' || 
      target.id == 'paper'   && pc.dataset.id == 'rock'    || 
      target.id == 'scissor' && pc.dataset.id == 'paper') {
    msg.textContent = 'You Win';
  }
  msg.classList.remove('hidden');
  setTimeout(reset, 1500);
}
const reset = function () {
  for (var span of spans) {
    span.classList.remove('hidden', 'chosen');
  }
  msg.classList.add('hidden');
  pc.classList.add('hidden');
  setTimeout(function () {
    document.body.classList.remove('noclick');
  }, 500);
}
for (var span of spans) {
  span.addEventListener('click', clicked);
}