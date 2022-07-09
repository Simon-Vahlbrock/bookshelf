export interface IBookshelf {
    shelfName: string;
    row: IRow;
    isOpen?: boolean;
    backgroundColor?: RGBColor;
}

type IRow = { rows: IRow[] } | { books: IBook[] } | {rows: IRow[], books: IBook[]};

export interface IBook {
    name: string;
    link: string;
    icon?: string;
}

type RGBColor = string