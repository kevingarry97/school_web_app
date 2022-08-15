export const getCurrentUser = () => {
    try {
        const jwt = localStorage.getItem('token');
        return jwt;
    } catch (ex) {
        return null;
    }
}