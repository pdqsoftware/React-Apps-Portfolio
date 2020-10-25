import React from 'react'

import Header from './Header'
import HorizontalBreak from './HorizontalBreak'
import Settings from './Settings'
import SettingsButton from './SettingsButton'
import Images from './Images'
import LargeImage from './LargeImage'

import getImages from './request'

// import DvdList from './DvdList'
// import AddNewDvdButton from './AddNewDvdButton'
import Select from './Select'
import Search from './Search'
// import Body from './Body'

// import AddNewDvd from './AddNewDvd'

class ImageLibrary extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lastIndex: 0,
            saveEnabled: false,

            imageData: [],
            thumbnails: [],
            pictures: [],
            settingsModal: false,
            loaded: false,
            searchText: '',
            sortOrder: 'asc',
            imageModal: false,
            selectedImage: undefined
        }
        this.handleOpenSettingsModal = this.handleOpenSettingsModal.bind(this)
        this.handleCloseSettingsModal = this.handleCloseSettingsModal.bind(this)
        this.handleTextSearch = this.handleTextSearch.bind(this)
        this.handleChangeOrder = this.handleChangeOrder.bind(this)
        this.handleOpenImageModal = this.handleOpenImageModal.bind(this)
        this.handleCloseImageModal = this.handleCloseImageModal.bind(this)

    }

    componentDidMount() {
        console.log('Fetching data from URL...')       //  After component is mounted on the DOM
        this.fetchImageData()
    }

  
    fetchImageData() {
        this.getImages((error, data) => {
            if (error) {
                console.log('An error has occurred!!')
            } else {
                console.log('All OK')
                console.log(data) 
                this.setState(() => ({
                    imageData: data
                }))
                // Parse data
                let thumbs = []
                let pictures = []
                let imageCount = 0
                data.map((pic) => {
                    thumbs.push({
                        url: pic.thumbnailurl, 
                        aspectratio: pic.aspectratio,
                        id: pic.id,
                        metadata: pic.metadata,
                        name: pic.name,
                        fileUrl: pic.fileurl
                    })
                    pictures.push(pic.fileurl)
                    imageCount++
                })
                this.setState(() => ({
                    thumbnails: thumbs,
                    pictures: pictures,
                    loaded: true
                }))
            }
        })
    }

 
    handleOpenSettingsModal() {
        console.log('Opening Modal')
        this.setState(() => ({
            settingsModal: true
        }))
    }
    handleCloseSettingsModal() {
        console.log('Closing Modal...')
        this.setState(() => ({ settingsModal: false }))
    }
    handleSaveSettingsModal() {
        console.log('Saving settings...')
        this.setState(() => ({ settingsModal: false }))
    }

    handleTextSearch(newText) {
        // Save the user's search text into state - forces a refresh
        this.setState({ searchText: newText})
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

    handleOpenImageModal(imageName) {
        console.log('Large image display:' + imageName)
        this.setState(() => ({ 
            imageModal: true,
            selectedImage: imageName
        }))
    }
    handleCloseImageModal() {
        console.log('Closing Image Modal...')
        this.setState(() => ({ imageModal: false }))
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
                        <SettingsButton openSettingsModal={ this.handleOpenSettingsModal } />
                        <Settings 
                            modalOpen = { this.state.settingsModal } 
                            closeSettingsModal = { this.handleCloseSettingsModal }
                            saveSettings = { this.handleSaveSettingsModal }
                        />
                        <Images 
                            thumbnails = { this.state.thumbnails } 
                            showLargeImage = { this.handleOpenImageModal } 
                        />
                        <LargeImage
                            imageName = { this.state.selectedImage}
                            closeLargeImage = { this.handleCloseImageModal }
                            modalOpen = { this.state.imageModal } 
                        />
                    </div>
                )
                : null }
            </div>
        )
    } 

    getImages(callback) {
        const request = new XMLHttpRequest()
    
        request.addEventListener('readystatechange', (e) => {
            console.log('Running event listener')
            if (e.target.readyState === 4 && e.target.status === 200) {
                const data = JSON.parse(e.target.responseText)
                callback(undefined, data)
            } else if (e.target.readyState === 4) {
                callback('An error has taken place', undefined)
            }
        })
    
        request.open('GET', 'https://run.mocky.io/v3/525464b2-740b-40f8-9fb4-1cf0a6be1a6d')
        request.send()
    }


 }

 export default ImageLibrary

