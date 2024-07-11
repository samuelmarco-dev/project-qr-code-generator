import prompt from 'prompt';
import chalk from 'chalk';
import schemaMenu from './schemas/schemaMenu.js';
import { qrCode } from './services/qrCode.js';

(async function main() {
    prompt.get([schemaMenu], async (err, result) => {
        if (err) console.log(err);

        if (parseInt(result.select) === 1) {
            console.log(chalk.bgBlue('\nOption select: QRCode\n'));
            await qrCode.create();
        }
        if (parseInt(result.select) === 2) {
            console.log(chalk.bgBlue('\nOption select: Password'));
        }
    });

    prompt.start();
})();
