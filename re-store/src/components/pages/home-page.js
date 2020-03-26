import React from 'react';
import BookList from '../book-list';
import ShoppingCartTable from '../shopping-cart-table';

const HomePage = () => {

    return (
        <div>
            <BookList />
            <ShoppingCartTable />
            <br />
            <hr />
            <br />
        </div>
    );
};

export default HomePage;
