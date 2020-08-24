import React from 'react'

import Header from './Header'
import DvdList from './DvdList'

class DVDLibrary extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <DvdList />
            </div>
        )
     } 
 }

 export default DVDLibrary

