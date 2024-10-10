export function setStorage(key, data) {
	return localStorage.setItem(key, data);
}

export function getStorage(key) {
	return localStorage.getItem(key);
}

export function removeStorage(key) {
	return localStorage.removeItem(key);
}
