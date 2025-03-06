const useStorage = () => {
    const set = (keyName: string, store: any) => localStorage.setItem(keyName, JSON.stringify(store));

    const get = (keyName: string) => JSON.parse(localStorage.getItem(keyName) as string);

    const find = (keyName: string) => localStorage.getItem(keyName) ? true: false;

    const remove = (keyName: string) => localStorage.removeItem(keyName);

    const clear = () => localStorage.clear();

    return {
        set,
        get,
        find,
        remove,
        clear
    }
}

export default useStorage;