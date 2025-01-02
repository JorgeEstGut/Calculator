let values = [];
let result = 0;

let display = document.getElementById('display');
let btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        let value = btn.getAttribute('data-value');
        if (value === 'C') {
            values = [];
            result = 0;
            display.innerHTML = '';
        } else if (value === '=') {
            let str = values.join('');
            result = eval(str);
            display.innerHTML = result;
            values = [];
            values.push(result);
        } else {
            values.push(value);
            display.innerHTML = values.join('');
        }
    });
});