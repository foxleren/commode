const urls = {
    deployUrl: '.',
    localUrl: 'commode'
}

export const contentPrefix = urls.localUrl;
//export const contentPrefix = urls.deployUrl;
export let theme = 'dark';

// window.onload = () => {
//     document.getElementById('preloader').classList.remove('visible');
//     document.getElementById('preloader').classList.add('hidden');
//
//     console.log(document.getElementById('preloader').className);
// }

const setFixedHeader = () => {
    const body = document.querySelector('body');
    body.classList.toggle('show-menu');
    const header = document.getElementById('header-fixed');
    header.classList.toggle('show-menu');
}
const setAbsoluteHeader = () => {
    const body = document.querySelector('body');
    body.classList.toggle('show-menu');
    const header = document.getElementById('header-absolute');
    header.classList.toggle('show-menu');
}
export const setHeader = (position) => {
    if (position === 'fixed') {
        return setFixedHeader();
    }
    return setAbsoluteHeader();
}