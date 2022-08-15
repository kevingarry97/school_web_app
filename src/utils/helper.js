export function activeMenu(path) {
    return window.location.pathname == path ? 'text-white bg_secondary rounded' : 'text-black';
}