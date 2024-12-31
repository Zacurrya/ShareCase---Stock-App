/**
export default function Stock(Name, Ticker, Logo, Price, Change, ChangePercent) {
    return (
        <div className="stock">
            <h1>{Name}</h1>
            <h2>{Ticker}</h2>
            <img src={Logo} alt={Name} logo />
            <h3>{Price}</h3>
            <h4>{Change}</h4>
            <h5>{ChangePercent}</h5>
        </div>
    )
}
*/

import React, { useState, useEffect } from 'react'

export default function Stock(Name, Ticker, Logo, Price, Change, ChangePercent) {
    useEffect(() => {
        
    }, [resourceType])
}