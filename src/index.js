import React from 'react';
import ReactDOM from 'react-dom';
import Page2 from './page2.js'

const root = document.getElementById('root')

const Apps = () => {
    return(
        <Page2 />
    )
}

ReactDOM.render(<Apps />, root)