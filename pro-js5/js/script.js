'use  strict'

const InputEl=document.querySelectorAll('#input')
const BtnEl=document.querySelector('#btn-submit')
let Title=document.querySelector('#Document')

BtnEl.addEventListener('click',()=>{
    Title.textContent = input.value;
    input.value = "";
})


