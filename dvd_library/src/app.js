import React from 'react'
import ReactDOM from 'react-dom'


import DVDLibrary from './components/DVDLibrary'

// const title = 'DVD Library'

// JSX - JavaScript XML
// var template = <p>{ title }</p>


var appRoot = document.getElementById('app')
ReactDOM.render(<DVDLibrary />, appRoot)
