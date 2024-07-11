import chalk from 'chalk';

// Prompt schema for the main menu
const schemaPrompt = {
    name: 'select',
    description: chalk.yellow.bold(
        'Choose one of the options below\n1. Generate QRCode or 2. Generate Password\nYour choise'
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.bold.italic('Please choose a valid option\n'),
    required: true,
};

export default schemaPrompt;
