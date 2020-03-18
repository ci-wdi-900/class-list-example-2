const item1 = document.querySelector('#item-1');
const item2 = document.querySelector('#item-2');
const item3 = document.querySelector('#item-3');
const item4 = document.querySelector('#item-4');

console.log(item1.classList[0]);
console.log(item1.classList[1]);

const secondClass = item1.classList[1];
console.log('the second class is:', secondClass);
item1.classList.remove('big');
console.log('the first class is now: ', item1.classList[0]);
console.log('but since we saved it in a variable, secondClass is still: ', secondClass);
item1.classList.add('big');
console.log('since we put big back on, the second class is now: ', item1.classList[1]);
item1.classList.toggle('big'); // back off
item1.classList.toggle('big'); // back on
item1.classList.toggle(secondClass);
console.log('class-1 toggled off: ', item1.classList);
item1.classList.toggle(secondClass);
console.log('class-1 toggled on: ', item1.classList);
item1.classList.toggle(secondClass);
console.log('class-1 toggled off: ', item1.classList);
