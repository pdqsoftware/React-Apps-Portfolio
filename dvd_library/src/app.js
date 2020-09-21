import React from 'react'
import ReactDOM from 'react-dom'


import DVDLibrary from './components/DVDLibrary'
import 'normalize.css/normalize.css'


// JSX - JavaScript XML
// const title = 'DVD Library'
// var template = <p>{ title }</p>



var appRoot = document.getElementById('app')
ReactDOM.render(<DVDLibrary />, appRoot)
// ReactDOM.render(template, appRoot)
