const total = document.getElementById('total');
const plus = document.getElementById('plus');
const numBox = document.getElementById('numBox');
const minus = document.getElementById('minus');

plus.addEventListener('click', math);
minus.addEventListener('click', math);

var runningTotal = 0;

function math(evt) {
   var id = evt.target.id;
   var num = parseInt(numBox.value);
   num = num || 0;
   id === 'plus'
      ? runningTotal += num
      : id === 'minus'
         ? runningTotal -= num
         : null;
   total.innerHTML = runningTotal;
   runningTotal < 0
      ? total.style.color = 'red'
      : runningTotal >= 0
         ? total.style.color = 'black'
         : null;

   }

