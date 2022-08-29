export const modifyPath = ({path, isDarkMode}) => {
    if (isDarkMode) {
        return path.replace('lightMode', 'darkMode');
    } else {
        return path.replace('darkMode', 'lightMode');
    }
}