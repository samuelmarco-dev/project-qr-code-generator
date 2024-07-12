import chalk from 'chalk';

const create = async () => {
    const randomLength = sortLength({
        min: parseInt(process.env.MIN_LENGTH) ?? 3,
        max: parseInt(process.env.MAX_LENGTH) ?? 20,
    });

    const objPassword = {
        uppercase: process.env.UPPERCASE_LETTERS
            ? process.env.UPPERCASE_LETTERS
            : false,
        lowercase: process.env.LOWERCASE_LETTERS
            ? process.env.LOWERCASE_LETTERS
            : true,
        numbers: process.env.NUMBERS ? process.env.NUMBERS : true,
        special: process.env.SPECIAL_CHARACTERS
            ? process.env.SPECIAL_CHARACTERS
            : false,
        length: process.env.PASSWORD_LENGTH
            ? parseInt(process.env.PASSWORD_LENGTH)
            : randomLength,
    };

    const resultPassword = await generate(objPassword);
    console.log(chalk.green(`\nPassword generated successfully!`));
    console.log(chalk.green(`Your generate password is: ${resultPassword}\n`));
};

const generate = async ({ uppercase, lowercase, numbers, special, length }) => {
    if(length < 3 || length > 20) {
        console.log(chalk.red.italic('The password length must be between 3 and 20 characters\n'));
        process.exit();
    }
    
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbersCharacters = '0123456789';
    const specialCharacters = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let password = '';
    let characters = '';

    if (uppercase || uppercase === 'true') characters += uppercaseLetters;
    if (lowercase || lowercase === 'true') characters += lowercaseLetters;
    if (numbers || numbers === 'true') characters += numbersCharacters;
    if (special || special === 'true') characters += specialCharacters;

    for (let index = 0; index < length; index++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }

    return password;
};

/**
 *
 * @param {{ min: number, max: number }}
 * @returns {number}
 */
const sortLength = ({ min, max }) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const password = {
    create,
};
