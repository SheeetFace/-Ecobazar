interface IPath {
    pathname: string;
    search: string;
    hash: string;
}

export interface ILocation<T=''> extends IPath {
    state: T;
    key: string;
}