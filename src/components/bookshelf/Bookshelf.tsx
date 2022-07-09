import React, {FC, useMemo} from "react";
import './bookshelf.scss';
import {IBookshelf} from "../../types/app";

const Bookshelf: FC<IBookshelf> = ({row, shelfName}) => {
    return useMemo(() => (
        <div className='bookshelf'>
            <div className='bookshelf__name'>{shelfName}</div>
            <div className='bookshelf__first-row'>FirstRow</div>
        </div>
    ), [shelfName]);
}

Bookshelf.displayName = 'Bookshelf';

export default Bookshelf;