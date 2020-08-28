/**
 * Formats a string with the passed-in arguments.
 * E.g.: format("Hello {0} {1}", "Pepito", "Pérez")
 * @param {string} str - The string to be formated.
 * @param {object|object[]} args - Args to be replaced into the string.
 * @returns {string}
 */
export const format = (str, ...args) => {
    let formatedStr = str;
    args.forEach((value, index) => {
        while (formatedStr.indexOf(`{${index}}`) >= 0) {
            formatedStr = formatedStr.replace(`{${index}}`, value);
        }
    });
    return formatedStr;
};

/**
 * Removes accents from the passed in string. E.g.: Itagüí => Itagui.
 * @param {string} str - The string to remove the accents.
 * @returns {string}
 */
export const removeAccents = (str) =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

/**
 * Gets the capitalized name initials from the passed-in string..
 * E.g.: Carlos => C
 * E.g.: Carlos Gonzalez => CG
 * E.g.: Carlos Alejandro Gonzalez = CG
 * E.g.: Carlos ALejandro Gonzalez Arboleda => CG
 * @param {string} str - The string to get the capitalized name initials.
 * @returns {string}
 */
export const getNameInitials = (str) => {
    if (!str) {
        return '';
    }

    const tokens = str.split(' ');
    let initials = tokens[0].substring(0, 1).toUpperCase();

    if (tokens.length === 2) {
        initials += tokens[1].substring(0, 1).toUpperCase();
    } else if (tokens.length >= 3) {
        initials += tokens[2].substring(0, 1).toUpperCase();
    }

    return initials;
};
