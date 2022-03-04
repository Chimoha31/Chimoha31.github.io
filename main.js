'use strict';

// inputでaddしたものをランダムボタンに格納する。
// そのランダムボタンを押したらストップする。

const foods = [];

const input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const resultBtn = document.querySelector('.result');
const resultFood = document.querySelector('.resultFood');


const foodsList = document.querySelector('.foodsList');
const ul = document.querySelector('ul');

addBtn.addEventListener('click', function(e) {
  e.preventDefault();
  foods.push(input.value);
  input.value="";

  const li = document.createElement('li');
  for(let i = 0; i < foods.length; i++) {
    li.textContent = foods[i];
    ul.appendChild(li);
    console.log(foodsList);
  }
});


resultBtn.addEventListener('click', function() {
    resultFood.innerHTML = foods[Math.floor(Math.random() * foods.length)]
    console.log(foods);
})