export const checkPassword = (password) => {
    const check = !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password);
    if (password.length > 7 && check) {
        console.log(!/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password));
        return true;
    }

    return false;
};
