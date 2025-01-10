import StockData from '../StockData.js'
import StockLayout from './StockLayout'
import React from 'react'

export default function StockList() {
    const stockList = StockData.map((stock) => {
        return(
                <StockLayout
                    ticker = { stock.ticker }
                    name = { stock.name }
                    price = { stock.price }
                    src = { stock.src }
                />
            )}
    )
    return (
        stockList
    )
}