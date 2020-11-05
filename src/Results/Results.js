import React from 'react';

import "./Results.css"

function Results({title, id}) {

    const href = `https://docs.google.com/document/d/${id}/edit`

    return (
        <div className="results">
            <a href={href}>
                <h5>Title: {title}</h5>
            </a>
        </div>
    )
}

export default Results
