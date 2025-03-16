export const validateEmail = (email) => {
    const regex = /^[^\se]+@[^\se)+\.[^\se]+$/;
    return regex.test(email);
};