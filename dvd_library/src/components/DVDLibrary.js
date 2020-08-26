import React from 'react'

import Header from './Header'
import DvdList from './DvdList'
import AddNewTitle from './AddNewTitle'
import Select from './Select'

class DVDLibrary extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sortOrder: "asc",
            selectedType: "A",
            selectedGenre: "A",
            lastIndex: 0,
            finished: false,
            loaded: false,
            myDvds: []
        }
        this.handleAdd=this.handleAdd.bind(this)
        this.handleChangeOrder=this.handleChangeOrder.bind(this)
        this.handleChangeType=this.handleChangeType.bind(this)
        this.handleChangeGenre=this.handleChangeGenre.bind(this)
    }

    componentDidMount() {
        console.log('Fetching data...')       //  After component is mounted on the DOM

        let parsedJSON = require('../data.json')
        const myDvds = parsedJSON.dvds
        this.setState({
            myDvds: myDvds
        })
        this.setState({
            loaded: true
        })
    }

    handleAdd() {
        // TODO:
        alert('Load module for adding new DVD')
    }

    handleChangeOrder(newOrder) {
        // Change the order when user clicks on the Ascending/Descending dropdown
        if (this.state.sortOrder !== newOrder) {
            // Order has changed
            this.setState({
                sortOrder: newOrder === "asc" ? "asc" : "desc"
            })
        }
    }

    handleChangeType(newType) {
        // Change the selection criteria for DVD Type - All, Movie or Series
        if (this.state.selectedType !== newType) {
            // Type has changed
            this.setState({
                selectedType: newType
            })
        }
    }

    handleChangeGenre(newGenre) {
        // Change the genre
        if (this.state.selectedGenre !== newGenre) {
            // Genre has changed
            this.setState({
                selectedGenre: newGenre
            })

        }
    }

    render() {
        return (
            <div>
                { this.state.loaded ?
                (
                    <div>
                        <Header />
                        <Select changeOrder={ this.handleChangeOrder } changeType= { this.handleChangeType } changeGenre={ this.handleChangeGenre } />
                        <DvdList 
                            dvds={ this.state.myDvds }
                            sortOrder={ this.state.sortOrder }
                            selectedType={ this.state.selectedType }
                            selectedGenre={ this.state.selectedGenre }
                        />
                        <AddNewTitle addNewDvdButton={ this.handleAdd } />
                    </div>
                )
                : null }
            </div>
        )
     } 
 }

 export default DVDLibrary

