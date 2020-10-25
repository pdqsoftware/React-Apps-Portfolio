import React from 'react'
import ReactDOM from 'react-dom'

import ImageLibrary from './components/ImageLibrary'


// JSX - JavaScript XML
var template = <p>Boilerplate JSX from app.js!</p>
var appRoot = document.getElementById('app')
ReactDOM.render(<ImageLibrary />, appRoot)
