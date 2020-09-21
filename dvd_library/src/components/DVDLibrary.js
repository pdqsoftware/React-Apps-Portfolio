import React from 'react'

import Header from './Header'
import DvdList from './DvdList'
import AddNewDvdButton from './AddNewDvdButton'
import Select from './Select'
import Search from './Search'
import Body from './Body'
import HorizontalBreak from './HorizontalBreak'
import AddNewDvd from './AddNewDvd'

class DVDLibrary extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sortOrder: "asc",
            selectedType: "A",
            selectedGenre: "A",
            lastIndex: 0,
            searchText: '',
            loaded: false,
            addNewDvdModal: false,
            myDvds: [],
            selectedDvd: [],
            genre: [
                {
                    value: "A",
                    label: "Any"
                },
                {
                    value: "action",
                    label: "Action"
                },
                {
                    value: "comedy",
                    label: "Comedy"
                },
                {
                    value: "christmas",
                    label: "Christmas"
                },
                {
                    value: "romance",
                    label: "Love Story"
                },
                {
                    value: "thriller",
                    label: "Thriller"
                },
                {
                    value: "children",
                    label: "Children's"
                },
                {
                    value: "scifi",
                    label: "Sci-Fi"
                },
                {
                    value: "drama",
                    label: "Drama"
                },
                {
                    value: "fantasy",
                    label: "Fantasy"
                }
            ],
            type: [
                {
                    value: "A",
                    label: "All"
                },
                {
                    value: "M",
                    label: "Movie"
                },
                {
                    value: "S",
                    label: "Series"
                },
                {
                    value: "other",
                    label: "Other"
                },
                {
                    value: "unknown",
                    label: "Unknown"
                }
            ],
        }
        this.handleOpenNewDvdModal=this.handleOpenNewDvdModal.bind(this)
        this.handleCloseNewDvdModal=this.handleCloseNewDvdModal.bind(this)
        this.handleChangeOrder=this.handleChangeOrder.bind(this)
        this.handleChangeType=this.handleChangeType.bind(this)
        this.handleChangeGenre=this.handleChangeGenre.bind(this)
        this.handleTextSearch=this.handleTextSearch.bind(this)
        this.handleDvdSelected=this.handleDvdSelected.bind(this)
        this.handleAddNewDvd=this.handleAddNewDvd.bind(this)
    }

    componentDidMount() {
        console.log('Fetching data...')       //  After component is mounted on the DOM

        let parsedJSON = require('../data.json')
        const myDvds = parsedJSON.dvds
        this.setState(() => ({
            myDvds: myDvds
        }))
        this.setState(() => ({
            loaded: true
        }))
    }

    handleAddNewDvd(newDvd) {
        // TODO:
        // alert('Load module for adding new DVD')
        // Adds the details to DVD data
        // e.preventDefault()      // Prevent the normal form submit behaviour ??????
        const dvdList = this.state.myDvds
        dvdList.push(newDvd)
        this.setState(() => ({ 
            addNewDvdModal: false,
            myDvds: dvdList
        }))
        console.log("newDvd: " + newDvd.name)
        console.log("newDvd: " + newDvd.type)
    }

    handleOpenNewDvdModal() {
        console.log('Opening Modal')
        this.setState(() => ({ addNewDvdModal: true }))
    }

    handleCloseNewDvdModal() {
        this.setState(() => ({ addNewDvdModal: false }))
    }

    handleChangeOrder(newOrder) {
        // Change the order when user clicks on the Ascending/Descending dropdown
        if (this.state.sortOrder !== newOrder) {
            // Order has changed
            this.setState(() => ({
                sortOrder: newOrder === "asc" ? "asc" : "desc"
            }))
        }
    }

    handleChangeType(newType) {
        // Change the selection criteria for DVD Type - All, Movie or Series
        if (this.state.selectedType !== newType) {
            // Type has changed
            this.setState(() => ({
                selectedType: newType
            }))
        }
    }

    handleChangeGenre(newGenre) {
        // Change the genre
        if (this.state.selectedGenre !== newGenre) {
            // Genre has changed
            this.setState(() => ({
                selectedGenre: newGenre
            }))
        }
    }

    handleTextSearch(newText) {
        // Save the user's search text into state - forces a refresh
        this.setState({ searchText: newText})
    }

    handleDvdSelected(dvdName) {
        // Display the selected DVD details on RHS of screen
        // Find DVD in array and set its values in state
        const dvdMatch = this.state.myDvds.findIndex((item) => {
            return item.name === dvdName
        })

        const myDvd = [{
            name: this.state.myDvds[dvdMatch].name,
            length: this.state.myDvds[dvdMatch].length,
            genre: this.state.myDvds[dvdMatch].genre,
            type: this.state.myDvds[dvdMatch].type,
            front: this.state.myDvds[dvdMatch].frontCoverImage,
            back: this.state.myDvds[dvdMatch].backCoverImage,
            link: this.state.myDvds[dvdMatch].imdb_link
        }]
        this.setState({
            selectedDvd: myDvd
        })
    }

    render() {
        return (
            <div>
                { this.state.loaded ?
                (
                    <div>
                        <Header />
                        <Select changeOrder={ this.handleChangeOrder } changeType= { this.handleChangeType } changeGenre={ this.handleChangeGenre } genreList={ this.state.genre } movieTypes={ this.state.type } />
                        <Search textChange={ this.handleTextSearch } />
                        <HorizontalBreak />
                        { /* The Body is floating */ }
                        <Body selectedDvd={ this.state.selectedDvd } genreList={ this.state.genre } movieTypes={ this.state.type } />
                        <DvdList 
                            dvds={ this.state.myDvds }
                            sortOrder={ this.state.sortOrder }
                            selectedType={ this.state.selectedType }
                            selectedGenre={ this.state.selectedGenre }
                            searchText={ this.state.searchText }
                            dvdSelected={ this.handleDvdSelected }
                        />
                        
                        <AddNewDvdButton openNewDvdModal={ this.handleOpenNewDvdModal } />

                        <AddNewDvd
                            closeNewDvdModal={ this.handleCloseNewDvdModal }
                            addNewDvdEntry={ this.handleAddNewDvd } 
                            modalOpen = { this.state.addNewDvdModal }
                            movieTypes={ this.state.type }
                            genreList={ this.state.genre }
                        />


                    </div>
                )
                : null }
            </div>
        )
    } 
 }

 export default DVDLibrary

