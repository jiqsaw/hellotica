export interface IWorkMain {
    all: string[],
    branding: string[],
    print: string[],
    commercial: string[],
    packaging: string[],
    web: string[]
}

export interface IWork {
    type?: string;
    name?: string;
    src: string;
}

export interface IWorkDetail {
    gallery: Array<IWorkDetailItem>;
}

export interface IWorkDetailItem extends IWork {
    width?: number;
    height?: number;
}

export enum WORK_TYPES {
    all,
    web,
    print,
    branding,
    packaging
}