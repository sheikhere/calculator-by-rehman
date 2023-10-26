import chalk from 'chalk';
//--------------------------------------------------
export function calculator(operator, num1, num2, num3) {
    if (operator === 'Addition') {
        console.log(chalk.yellow("\nThe addition of first and second number is = ") + chalk.blackBright(num1 + num2));
    }
    else if (operator === 'Subtraction') {
        console.log(chalk.yellow("\nThe subtraction of first and second number is = ") + chalk.blackBright(num1 - num2));
    }
    else if (operator === 'multiplication') {
        console.log(chalk.yellow("\nThe multiplication of first and second number is = ") + chalk.blackBright(num1 * num2));
    }
    else if (operator === 'division') {
        console.log(chalk.yellow("\nthe division of first and second number is = ") + chalk.blackBright(num1 / num2));
    }
    else if (operator === 'reminder') {
        console.log(chalk.yellow("\nthe reminder after division of first and second number is = ") + chalk.blackBright(num1 % num2));
    }
    return operator;
}
;
//-----------------------------------------------------
export function thank() {
    console.log(`\n${chalk.magenta('Thank you for using this calculator\n')}`);
}
