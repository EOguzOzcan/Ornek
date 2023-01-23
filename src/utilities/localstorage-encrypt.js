import localstorageEncrypt from "localstorage-encrypt"

const localStorageName = process.env.REACT_APP_LOCALSTORAGE_NAME || "store"
const localStorageKey = process.env.REACT_APP_LOCALSTORAGE_KEY || "my-secret-key"
const localStorageExpire = process.env.REACT_APP_LOCALSTORAGE_EXPIRE || 12

const defaultAbilities = [
	{
		action: "manage",
		subject: "all",
	},
];

const ls = localstorageEncrypt.init(localStorageName, localStorageKey, localStorageExpire)

/**
 * 
 * @param {string} key 
 * @param {any} data 
 */
export const saveToLocalStorage = async (key = "", data = any) => {
	ls.save(key, data)
}

/**
 * 
 * @param {string} key 
 * @returns local data decripted
 */
// FIXME: getFromLocalStorage("userData") kısmına bakılacak, 
export const getFromLocalStorage = (key = "") => {
	if (ls.get(key)) {
		return ls.get(key)
	} else {
		return null
	}
}


export const deleteFromLocalStorage = (key = "") => {
	ls.remove(key)
}


export const deleteAll = () => {
	ls.clear()
}


export const dsetroyLocalStorage = () => {
	ls.deactivate()
}


