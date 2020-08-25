import React from 'react'

import Header from './Header'
import DvdList from './DvdList'
import AddNewTitle from './AddNewTitle'
import Select from './Select'

class DVDLibrary extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Select />
                <DvdList />
                <AddNewTitle />
            </div>
        )
     } 
 }

 export default DVDLibrary

