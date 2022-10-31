const calculator = document.querySelector('.calculator');
const buttons = document.querySelector('.calculator__buttons');

const firstOperend = document.querySelector('.calculator__operend--left');
const operator = document.querySelector('.calculator__operator');
const secondOperend = document.querySelector('.calculator__operend--right');
const calculatedResult = document.querySelector('.calculator__result');

function calculate(n1, operator, n2) {
    let result = 0;
    
    if (operator === '+') {
        result = n1 + n2;
    } else if (operator === '-') {
        result = n1 - n2;
    } else if (operator === '*') {
        result = n1 * n2;
    } else if (operator === '/') {
        result = n1 - n2;
    }
    return result.toString();
}
// console.log(calculate(4,'-',5));

buttons.addEventListener('click',(event) => {
    const target = event.target;
    const action = target.classList[0];
    const buttonContent = target.textContent;
    // console.log(action);

    if (target.matches('button')) {
        if (action === 'number') {
            console.log(`숫자 ${buttonContent} 버튼`);
        } else if (action === 'operator') {
            console.log(`연산자 ${buttonContent} 버튼`);
        } else if (action === 'decimal') {
            console.log(`소수점 버튼`);
        } else if (action === 'clear') {
            console.log(`초기화 버튼`);
        } else if (action === 'calculate') {
            console.log(`계산 버튼`);
        } else {
            ;
        }
    }
})

const display = document.querySelector('.calculator__display--for-advanced')
