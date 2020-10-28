import React from 'react'

import Header from './Header'
import HorizontalBreak from './HorizontalBreak'
import Settings from './Settings'
import SettingsButton from './SettingsButton'
import Images from './Images'
import LargeImage from './LargeImage'
import getImages from './request'
import Search from './Search'
import MetaSearch from './MetaSearch'
import SlideShow from './Slideshow'
import ZipDownload from './ZipDownload'
import About from './About'

var JSZip = require("jszip")
import { saveAs } from 'file-saver';
import { forEach } from 'jszip'

class ImageLibrary extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            imageData: [],
            thumbnails: [],
            pictures: [],
            metadata: [],
            settingsModal: false,
            loaded: false,
            searchText: '',
            sortOrder: 'asc',
            imageModal: false,
            selectedImage: undefined,
            showImageName: true,
            showImageMeta: false,
            slideshowOption: 'none',
            zipDownloadOption: 'none',
            slideshowModal: false,
            searchMetaText: '',
            currentImage: 0,
            startZipDownload: false,
            imageData: null,
        }
        this.handleOpenSettingsModal = this.handleOpenSettingsModal.bind(this)
        this.handleCloseSettingsModal = this.handleCloseSettingsModal.bind(this)
        this.handleTextSearch = this.handleTextSearch.bind(this)
        this.handleChangeOrder = this.handleChangeOrder.bind(this)
        this.handleOpenImageModal = this.handleOpenImageModal.bind(this)
        this.handleCloseImageModal = this.handleCloseImageModal.bind(this)
        this.handleChangeSettings = this.handleChangeSettings.bind(this)
        this.handleCloseSettingsModalSlideshow = this.handleCloseSettingsModalSlideshow.bind(this)
        this.handleRadioSlideshowChange = this.handleRadioSlideshowChange.bind(this)
        this.handleRadioZipDownloadChange = this.handleRadioZipDownloadChange.bind(this)
        this.handleOpenSlideshowModal = this.handleOpenSlideshowModal.bind(this)
        this.handleCloseSlideshowModal = this.handleCloseSlideshowModal.bind(this)
        this.handleSlideshowLeft = this.handleSlideshowLeft.bind(this)
        this.handleSlideshowRight = this.handleSlideshowRight.bind(this)
        this.handleMetaSearch = this.handleMetaSearch.bind(this)
        this.handleAboutLink = this.handleAboutLink.bind(this)
    }

    componentDidMount() {
        console.log('Fetching data from URL...')       //  After component is mounted on the DOM
        this.fetchImageData()
    }

  
    fetchImageData() {
        let meta = []
        this.getImages((error, data) => {
            if (error) {
                console.log('An error has occurred!!')
            } else {
                // console.log(data) 
                this.setState(() => ({
                    imageData: data
                }))
                // Parse data
                let thumbs = []
                let pictures = []
                let imageCount = 0
                data.map((pic) => {
                    let nameArr = []
                    try {
                        nameArr = pic.metadata.split(',')
                        nameArr.forEach((line) => {
                            meta.push(line)
                        })
                        
                    } catch (e) {
                        // Ignore errors with missing metatdata
                    }
                    
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
                meta = [...new Set(meta.sort())]
                this.setState(() => ({
                    metadata: meta
                }))
            }
        })
    }

    zipUpImages(whichMode) {
        // Start zip download
        console.log('Start zip download')

        // ---------------------------------------------------------------
        // var zip = new JSZip()
        // // zip.file("Hello.txt", "Hello World\n")
        // var img = zip.folder("images")
        // img.file("README", "This folder should contain the image files\nBut the feature is not fully implemented yet!\n");

        // zip.generateAsync({
        //     type:"blob",
        //     coment: 'Download of Vpress images'
        //     })
        //     .then(function(content) {
        //         // see FileSaver.js
        //         saveAs(content, "vpress_images.zip")
        //     });
        // ---------------------------------------------------------------
    
    
        // If you are loading file from a remote server, be sure to configure “Access-Control-Allow-Origin”
        // For example, the following image can be loaded from anywhere
        // const url = "//coreprintdamtest.s3-accelerate.amazonaws.com/VPR/5f8ec87ca4e4a";
        const url = "/images/cog.png"

        // Initialize the XMLHttpRequest and wait until file is loaded
        let xhr = new XMLHttpRequest()
        xhr.onload = () => {
            // Create a Uint8Array from ArrayBuffer
            const codes = new Uint8Array(xhr.response)

            // Get binary string from UTF-16 code units
            const bin = String.fromCharCode.apply(null, codes)

            // Convert binary to Base64
            const b64 = btoa(bin)
            console.log(b64)
            this.setState(() => ({
                imageData: b64
            }))
        };

        // Send HTTP request and fetch file as ArrayBuffer
        xhr.open('GET', url)
        xhr.responseType = 'arraybuffer'
        xhr.send()

        // ---------------------------------------------------------------

        // function getBase64(file) {
        //     return new Promise((resolve, reject) => {
        //       const reader = new FileReader();
        //       reader.readAsDataURL(file);
        //       reader.onload = () => resolve(reader.result);
        //       reader.onerror = error => reject(error);
        //     });
        //   }
          
        //   var file = "/images/cog.png"
        //   getBase64(file).then(
        //     data => console.log(data)
        //   );
    
        // ---------------------------------------------------------------
    
        var zip = new JSZip()
        var img = zip.folder("images")
        img.file("README", "This folder should contain the image files\nBut the feature is not fully implemented yet!\n");
        // img.file("cog.png", this.state.imageData, {base64: true});
        img.file("cog.png", this.state.imageData, {base64: false});

        zip.generateAsync({
            type:"blob",
            coment: 'Download of Vpress images'
            })
            .then(function(content) {
                // see FileSaver.js
                saveAs(content, "vpress_images.zip")
            });
    
    
    
    }

 
    handleOpenSettingsModal() {
        console.log('Opening Modal')
        this.setState(() => ({
            settingsModal: true
        }))
    }
    handleCloseSettingsModal() {
        console.log('Closing Setings Modal...')
        this.setState(() => ({ settingsModal: false }))
        console.log('= ' + this.state.slideshowOption + ' = ' + this.state.slideshowModal + ' = ' + this.state.zipDownloadOption)
        if (this.state.slideshowOption != 'none') {
            this.setState(() => ({
                slideshowModal: true
            }))
        }
        if (this.state.zipDownloadOption != 'none') {
            this.zipUpImages(this.state.zipDownloadOption)
        }
    }
    handleSaveSettingsModal() {
        console.log('Saving settings...')
        this.setState(() => ({ settingsModal: false }))
    }
    handleCloseSettingsModalSlideshow() {
        // Starts a slideshow with the selected images only
        console.log('Start slideshow')
    }

    handleTextSearch(newText) {
        // Save the user's search text into state - forces a refresh
        console.log(newText)
        this.setState({ searchText: newText})
    }

    handleMetaSearch(metaText) {
        // Save the user's search text into state - forces a refresh
        console.log(metaText)
        this.setState({ searchMetaText: metaText})
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
        this.setState(() => ({ 
            imageModal: true,
            selectedImage: imageName
        }))
    }
    handleCloseImageModal() {
        this.setState(() => ({ imageModal: false }))
    }

    handleOpenSlideshowModal(imageName) {
        console.log('Large slideshow display:' + imageName)
        this.setState(() => ({ 
            slideshowModal: true,
            selectedImage: imageName
        }))
    }
    handleCloseSlideshowModal() {
        console.log('Closing slideshow Modal...')
        this.setState(() => ({ 
            slideshowModal: false,
            slideshowOption: 'none',
            currentImage: 0
        }))
    }

    // About link
    handleAboutLink() {
        // Open a new tab to the Google doc.
        <a href="https://docs.google.com/document/d/1ZsHAiDKQj5IoYlUVucCQ3IYjSFkDj8k4PAfMxSUZB-U/edit?usp=sharing" target="_blank">PP</a>
    }

    // Settings handler
    handleChangeSettings(prop, value) {

        if (prop === "showImageName") {
            this.setState(() => ({ showImageName: value }))
        } else if (prop === "showImageMeta") {
            this.setState(() => ({ showImageMeta: value }))
        }
    }

    // Slideshow
    handleRadioSlideshowChange(value) {
        this.setState({
            slideshowOption: value
        });
    }
    handleSlideshowLeft() {
        console.log('Left')
        this.setState((prevState) => ({
            currentImage: prevState.currentImage - 1
        }))
    }
    handleSlideshowRight() {
        console.log('Right')
        console.log(this.state.currentImage)
        this.setState((prevState) => ({
            currentImage: prevState.currentImage + 1
        }))
    }

    handleRadioZipDownloadChange(value) {
        console.log('radio change')
        console.log(value)
        this.setState({
            zipDownloadOption: value
        });
    }

    render() {
        return (
            <div>
                { this.state.loaded ?
                (
                    <div>
                        <Header />
                        <Settings 
                            modalOpen = { this.state.settingsModal } 
                            closeSettingsModal = { this.handleCloseSettingsModal }
                            showImageName = { this.state.showImageName }
                            showImageMeta = { this.state.showImageMeta }
                            handleChangeSettings = { this.handleChangeSettings }
                            changeOrder = { this.handleChangeOrder }
                            radioSlideshowChange = { this.handleRadioSlideshowChange }
                            slideshowOption = { this.state.slideshowOption }
                            radioZipDownloadChange = { this.handleRadioZipDownloadChange }
                            zipOption = { this.state.zipDownloadOption }
                            searchText = { this.state.searchText }
                            metaText = { this.state.searchMetaText }
                        />
                        <SettingsButton openSettingsModal={ this.handleOpenSettingsModal } />
                        <Search 
                            textChange={ this.handleTextSearch } 
                        />
                        <MetaSearch 
                            textChange = { this.handleMetaSearch } 
                            metaData = { this.state.metadata }
                        />
                        <About 
                            openAboutLink = { this.handleAboutLink }
                        />
                        <HorizontalBreak />
                        <Images 
                            thumbnails = { this.state.thumbnails } 
                            showLargeImage = { this.handleOpenImageModal } 
                            showImageName = { this.state.showImageName }
                            showImageMeta = { this.state.showImageMeta }
                            sortOrder = { this.state.sortOrder }
                            searchText = { this.state.searchText }
                            searchMetaText = { this.state.searchMetaText }
                        />
                        <LargeImage
                            imageName = { this.state.selectedImage}
                            closeLargeImage = { this.handleCloseImageModal }
                            modalOpen = { this.state.imageModal } 
                        />
                        <SlideShow
                            imageName = { this.state.selectedImage}
                            closeSlideshow = { this.handleCloseSlideshowModal }
                            modalOpen = { this.state.slideshowModal } 
                            slideshowRight = { this.handleSlideshowRight }
                            slideshowLeft = { this.handleSlideshowLeft }
                            sortOrder = { this.state.sortOrder }
                            searchText = { this.state.searchText }
                            searchMetaText = { this.state.searchMetaText }
                            thumbnails = { this.state.thumbnails } 
                            currentImage = { this.state.currentImage }
                            slideshowOption = { this.state.slideshowOption }
                        />
                        
                    </div>
                )
                : null }
            </div>
        )
    } 

    // showLargeImage = { this.handleOpenImageModal } 

    getImages(callback) {
        const request = new XMLHttpRequest()
    
        request.addEventListener('readystatechange', (e) => {
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

