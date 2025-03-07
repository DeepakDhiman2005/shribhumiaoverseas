export interface authInterface {
    name?: string,
    email?: string,
    token?: string | null,
    isAuthenticated?: boolean,
    _id?: string,
}

export interface userInterface {
    name?: string,
    email?: string,
    isAuthenticated?: boolean,
    _id?: string,
}