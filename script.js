class Calculator {
  numbers = [0, ''];
  action = '';
  current = 0;
  operate() {
    this.numbers[0] = eval(`${this.numbers[0]}${this.action}${this.numbers[1]}`);
  }
  showDisplay(current = this.current) {
    if (this.current === 1 && this.numbers[1] === '') {
      return this.numbers[current - 1];
    } else {
      return this.numbers[current];
    }
  }
}

let calculator = new Calculator();

const buttons = document.querySelectorAll('button');
const display = document.querySelector('#answer');

buttons.forEach(button => {
  button.addEventListener('click', function () {
    let value = this.getAttribute("value");
    let action = this.getAttribute("action");
    if (value && calculator.numbers[calculator.current] === 0) {
      calculator.numbers[calculator.current] = value;
    } else if (value) {
      calculator.numbers[calculator.current] += value;
    } else if (action) {
      calculator.current = 1;
      switch (action) {
        case 'clear':
          calculator = new Calculator();
          break;
        case 'divide':
          calculator.action = '/';
          break;
        case 'multiply':
          calculator.action = '*';
          break;
        case 'subtract':
          calculator.action = '-';
          break;
        case 'sum':
          calculator.action = '+';
          break;
        case 'operate':
          calculator.operate();
          calculator.current = 0;
          calculator.numbers[1] = '';
          break;
        default:
          break;
      }
    } else {
      calculator.numbers[calculator.current] = `${calculator.numbers[calculator.current]}.`;
    }
    display.textContent = calculator.showDisplay();
  });
});