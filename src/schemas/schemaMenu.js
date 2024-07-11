import chalk from 'chalk';

// Prompt menu schema for the main menu
const schemaMenu = {
    name: 'select',
    description: chalk.yellow.bold(
        'Choose one of the options below\n1. Generate QRCode or 2. Generate Password\nYour choise'
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.bold.italic('Please choose a valid option\n'),
    required: true,
};

export default schemaMenu;
