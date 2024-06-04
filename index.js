#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
/// we made class
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    FuelDecrease() {
        let fuel = this.fuel -= 25;
        this.fuel = fuel;
    }
    FuelIncrease() {
        let fuel = this.fuel = +100;
        this.fuel = fuel;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    FuelDecrease() {
        let fuel = this.fuel -= 25;
        this.fuel = fuel;
    }
}
// ask information for name and selecton
let player = await inquirer.prompt([{
        type: 'input',
        name: 'player',
        message: 'Enter your name'
    }]);
////console.log(player.player);
let opponent = await inquirer.prompt([{
        type: 'list',
        name: 'select',
        message: 'Enter your opponents name',
        choices: ["Skeleton", "Assassin", "Wizard"]
    }]);
////console.log(opponent.select);
/// gather data
let p1 = new Player(player.player);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select == "Skeleton") {
        ////console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt([{
                type: 'list',
                name: 'action',
                message: 'What do you want to do',
                choices: ["Attack", "Drink Portion", "Run For Your Life... "],
            }]);
        if (ask.action == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.FuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.italic.red(`You lOOSE.....`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.FuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.red(`You WIN...`));
                    process.exit();
                }
            }
        }
        if (ask.action == "Drink Portion") {
            p1.FuelIncrease();
            console.log(chalk.bold.italic.green(`U Drank Portion. Your Feul Is ${p1.fuel}`));
        }
        if (ask.action == "Run For Your Life... ") {
            console.log(chalk.red.bold.italic(" You Loose, Better Luck Next Time.."));
            process.exit();
        }
    }
    {
        if (opponent.select == "Assassin") {
            ////console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`)
            let ask = await inquirer.prompt([{
                    type: 'list',
                    name: 'action',
                    message: 'What do you want to do',
                    choices: ["Attack", "Drink Portion", "Run For Your Life... "],
                }]);
            if (ask.action == "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    p1.FuelDecrease();
                    console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                    console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                    if (p1.fuel <= 0) {
                        console.log(chalk.bold.italic.red(`You lOOSE.....`));
                        process.exit();
                    }
                }
                if (num <= 0) {
                    o1.FuelDecrease();
                    console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                    console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                    if (o1.fuel <= 0) {
                        console.log(chalk.bold.italic.red(`You WIN...`));
                        process.exit();
                    }
                }
            }
            if (ask.action == "Drink Portion") {
                p1.FuelIncrease();
                console.log(chalk.bold.italic.green(`U Drank Portion. Your Feul Is ${p1.fuel}`));
            }
            if (ask.action == "Run For Your Life... ") {
                console.log(chalk.red.bold.italic(" You Loose, Better Luck Next Time.."));
                process.exit();
            }
        }
    }
    {
        if (opponent.select == "Wizard") {
            ////console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`)
            let ask = await inquirer.prompt([{
                    type: 'list',
                    name: 'action',
                    message: 'What do you want to do',
                    choices: ["Attack", "Drink Portion", "Run For Your Life... "],
                }]);
            if (ask.action == "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    p1.FuelDecrease();
                    console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                    console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                    if (p1.fuel <= 0) {
                        console.log(chalk.bold.italic.red(`You lOOSE.....`));
                        process.exit();
                    }
                }
                if (num <= 0) {
                    o1.FuelDecrease();
                    console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                    console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                    if (o1.fuel <= 0) {
                        console.log(chalk.bold.italic.red(`You WIN...`));
                        process.exit();
                    }
                }
            }
            if (ask.action == "Drink Portion") {
                p1.FuelIncrease();
                console.log(chalk.bold.italic.green(`U Drank Portion. Your Feul Is ${p1.fuel}`));
            }
            if (ask.action == "Run For Your Life... ") {
                console.log(chalk.red.bold.italic(" You Loose, Better Luck Next Time.."));
                process.exit();
            }
        }
    }
    ///while(p1.fuel > 0 && o1.fuel > 0)
} while (true);
