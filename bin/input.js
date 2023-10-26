import inquirer from "inquirer";
import chalk from 'chalk';
//------------------------------------------------------------
export let { num1, num2, operator } = await inquirer.prompt([{
        type: 'number',
        name: 'num1',
        message: `${chalk.red("Write first number?")}`
    },
    {
        type: 'number',
        name: 'num2',
        message: `${chalk.green("Write second number?")}`
    },
    {
        type: 'rawlist',
        name: 'operator',
        choices: ['Addition', 'Subtraction', 'multiplication', 'division', 'reminder'],
        message: `${chalk.blue("Select Operation")}`
    }
]);
