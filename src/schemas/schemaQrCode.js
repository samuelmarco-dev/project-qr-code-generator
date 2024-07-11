import chalk from 'chalk';

// Prompt QRCode schema for the main menu
const schemaQrCode = [
    {
        name: 'link',
        description: chalk.yellow.bold(
            'Enter the link to generate the QRCode\nYour link'
        ),
        pattern:
            /^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9.-]*)*(\?[a-zA-Z0-9=&%_.-]+)?$/,
        message: chalk.red.bold.italic('Please insert a valid link\n'),
        required: true,
    },
    {
        name: 'type',
        description: chalk.yellow.bold(
            'Choose the type of QRCode\n1. Image or 2. Terminal\nYour choise'
        ),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold.italic('Please choose a valid option\n'),
        required: true,
    },
];

export default schemaQrCode;
