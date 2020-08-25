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
            lastIndex: 0,
            finished: false,
            loaded: false,
            myDvds: [],
            result: []
        }
        this.handleAdd=this.handleAdd.bind(this)
        this.handleChangeOrder=this.handleChangeOrder.bind(this)
    }

    componentDidMount() {
        console.log('Fetching data...')       //  After component is mounted on the DOM

        let parsedJSON = require('../data.json')
        const myDvds = parsedJSON.dvds
        this.setState({
            result: myDvds
        })
        this.setState({
            loaded: true
        })
    }

    // async getData() {
    //     console.log('Getting data...')
    //     const parsedJSON = require('../data.json');
    //     const myDvds = parsedJSON.dvds
    //     this.setState({
    //         // result: parsedJSON.dvds
    //         result: myDvds,
    //     })
    // }

    // componentDidMount() {
    //     fetch('./data.json')
    //     .then(response => response.json())
    //     .then(result => {
    //         const dvds = result.map(item => {
    //             item.dvdId = this.state.lastIndex
    //             this.setState( {
    //                 lastIndex : this.state.lastIndex + 1
    //             } )
    //             return item
    //         })

    //         this.setState({ myDvds: dvds })
    //         this.setState({ loaded: true})
    //     })
    // }

    handleAdd() {
        alert('Load module for adding new DVD')
    }

    handleChangeOrder(newOrder) {
        // Change the order when user clicks on the Ascending/Descending dropdown
        console.log(newOrder, this.state.sortOrder)
        if (this.state.sortOrder !== newOrder) {
            // Order has changed
            alert('Change order: ' + newOrder)
            this.setState({
                sortOrder: newOrder === "asc" ? "asc" : "desc"
            })
        }
    }

    render() {
        // console.log(`finished: ${this.state.loaded}`)
        // console.log(`myDvds: ${myDvds}`)
        return (
            <div>
                { this.state.loaded ?
                (
                    <div>
                        <Header />
                        <Select changeOrder={ this.handleChangeOrder } />
                        <DvdList dvds={ this.state.result } sortOrder={ this.state.sortOrder } />
                        <AddNewTitle addNewDvdButton={ this.handleAdd } />
                    </div>
                )
                : null }
            </div>
        )
     } 
 }

 export default DVDLibrary

