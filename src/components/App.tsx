import {FC, useMemo} from "react";
import {IBookshelf} from "../types/app";
import Bookshelf from "./bookshelf/Bookshelf";

const BOOKSHELF: IBookshelf = {
    shelfName: 'Websites',
    row: {
        rows: [
            {books: [{name: 'Tobit', link: 'https://tobit.com'}]}
        ],
        books: [
            {name: 'Communication & Entertainment', link: 'https://google.com'}
        ]
    },
}

const App: FC = () => {
    return useMemo(() => (
        <div><Bookshelf shelfName={BOOKSHELF.shelfName} row={BOOKSHELF.row}/></div>
    ), []);
}

App.displayName = 'App';

export default App;