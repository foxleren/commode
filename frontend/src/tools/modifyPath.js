export const modifyPath = ({path, isDarkMode}) => {
    if (isDarkMode) {
        return path.replace('lightMode', 'darkMode');
    } else {
        return path.replace('darkMode', 'lightMode');
    }
}

export const modifyImagesPath = ({arr, isDarkMode}) => {
    console.log("modifyImagesPath")
    for (let i = 0; i < arr.length; i++) {
        arr[i] = modifyPath({path: arr[i], isDarkMode: isDarkMode});
    }
    return arr;
}