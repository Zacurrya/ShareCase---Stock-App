import React from 'react'
import StockList from './StockList'
import SearchBar from './SearchBar';
export default function Main() {
    const d = new Date();
    let year = d.getFullYear();
    let date = <span>{d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}</span>;
    return (
        <main>
            <h1>💸 Visualize your steps to wealth 💸</h1>
            <p>{ date }</p><br/>
            <p>ShareCase is a platform which allows you to view your portfolio, plan ahead and view stocks.</p>
            <SearchBar />
            <StockList />
        </main>
    )
}