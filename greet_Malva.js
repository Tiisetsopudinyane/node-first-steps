import chalk from 'chalk';
import greet from './greet.js'
const styleMessage=chalk.bgWhite.red(greet('Malva'));

console.log(styleMessage)