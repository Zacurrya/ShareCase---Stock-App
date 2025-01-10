import React from 'react'
export default function StockLayout(props) {
    return (
        <div className="Stock">
            <div>
                <span>
                    <img src={props.src} />
                </span>
                <div>
                    <h2>{props.name}</h2>
                    <h3>{props.ticker}</h3>
                </div>
                <p>{props.price}</p>
            </div>
        </div>
    )   
}