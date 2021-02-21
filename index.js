//--------------------------------------------------task1----------------------------------------------------------
//Створити HTML сторінку. На сторінці є рядок для введення тексту, абзац та кнопка.
// Написати JavaScript-код. При введенні тексту в абзаці має відображатись останній натиснутий символ

let input1 = document.getElementById('input1');
let result1 = document.getElementById('result1');

input1.onkeyup = (ev) => {
    result1.textContent = ev.key;
    ev.preventDefault();
}

//--------------------------------------------------task2----------------------------------------------------------
//Створити HTML сторінку. На сторінці є рядок для введення тексту.
// Написати JavaScript-код.  В рядок для введення вводиться текст і натискається клавіша Enter (її код має номер 13).
// При натисканні на Enter введений текст має попадати в абзац під рядком для введення, вміст рядка для введення при цьому має очиститись.

let input2 = document.getElementById('input2');
let result2 = document.getElementById('result2');
let button = document.getElementById('button');

input2.addEventListener('keyup', ev => {
    if (ev.keyCode === 13) {
        button.click();
    }
})

button.onclick = (ev) => {
    result2.textContent=input2.value;
    input2.value='';
    ev.preventDefault();

}