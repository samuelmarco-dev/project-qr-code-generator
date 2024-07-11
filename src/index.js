import prompt from 'prompt';
import schemaPrompt from './model/schema.js';
import chalk from 'chalk';

(async function main() {
    prompt.get([schemaPrompt], async (err, result) => {
        if (err) console.log(err);

        if (parseInt(result.select) === 1)
            console.log(chalk.bgBlue('\nOption select: QRCode'));
        if (parseInt(result.select) === 2)
            console.log(chalk.bgBlue('\nOption select: Password'));
    });

    prompt.start();
})();
