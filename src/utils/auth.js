const tokenKey = "token-key";
const metaKey = "meta-key";
const cloundName = "clound-name";
const cloundEmail = "clound-email";

export const getToken = function getToken() {
    return localStorage.getItem(tokenKey);
};

export const getName = function getName() {
    return localStorage.getItem(cloundName);
};

export const setToken = function setToken(token) {
    return localStorage.setItem(tokenKey, token);
};

export const setName = function setName(name) {
    return localStorage.setItem(cloundName, name);
};

export const setEmail = function setEmail(email) {
    return localStorage.setItem(cloundEmail, email);
};

export const getEmail = function getEmail() {
    return localStorage.getItem(cloundEmail);
};

export const removeToken = function removeToken() {
    return localStorage.removeItem(tokenKey);
};

export const setMetaList = function setMetaList(meta) {
    return localStorage.setItem(metaKey, JSON.stringify(meta));
};

export const getMetaList = function getMetaList() {
    return JSON.parse(localStorage.getItem(metaKey));
};
