import qrcode from 'qrcode-terminal';
import prompt from 'prompt';
import chalk from 'chalk';
import schemaQrCode from '../schemas/schemaQrCode.js';

const create = async () => {
    prompt.get(schemaQrCode, async (err, result) => {
        if (err) console.log(err);

        const small = parseInt(result.type) === 2;
        if (parseInt(result.type) === 1) {
            console.log(chalk.bgBlue('\nOption select: Image\n'));
            await generate(result.link, small);
        }
        if (parseInt(result.type) === 2) {
            console.log(chalk.bgBlue('\nOption select: Terminal\n'));
            await generate(result.link, small);
        }
    });

    prompt.start();
};

const generate = async (inputLink, small) => {
    qrcode.generate(inputLink, { small }, (qrcode) => {
        console.log(chalk.green('QRCode generated successfully\n'));
        console.log(qrcode);
    });
};

export const qrCode = {
    create,
};
