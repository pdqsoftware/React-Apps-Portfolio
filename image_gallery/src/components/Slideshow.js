import React from 'react';
import LargeImage from './LargeImage';
import Modal from 'react-modal'


import Thumb from './Thumb'

class Slideshow extends React.Component {

    render() {

        let order
        if (this.props.sortOrder === 'asc') {
            order = 1
        } else { 
            order = -1
        }

        let thumbnails = this.props.thumbnails

        // Sort ascending/descending by image name
        thumbnails.sort((a, b) => (a.name > b.name) ? 1 * order : -1 * order)

        if (this.props.slideshowOption === "selected") {
            // Filter by search text
            if (this.props.searchText !== '') {
                thumbnails = thumbnails.filter(item => {
                    return String(item.name).toLowerCase().includes(this.props.searchText.toLowerCase())
                })
            }
            // Filter by meta text
            if (this.props.searchMetaText !== 'none-selected') {
                thumbnails = thumbnails.filter(item => {
                    return String(item.metadata).toLowerCase().includes(this.props.searchMetaText.toLowerCase())
                })
            }
        }

        const totalImages = thumbnails.length

        return (
            totalImages <= 0 ? null : <div>
                <Modal
                    isOpen = { this.props.modalOpen }
                    onRequestClose = { this.props.closeLargeImage }
                    contentLabel = "Showing image slideshow"
                    className = "Modal imageModal"
                    shouldCloseOnOverlayClick={ true }
                >
                    <div className="imageContainer">
                        <button className="imageClose" onClick={ this.props.closeSlideshow }>X</button>
                        { this.props.currentImage > 0 && <button className="imageLeft imageLeftRight" onClick={ this.props.slideshowLeft }>&lt;</button> }
                        <img  
                            className="fullImage" 
                            key={ this.props.currentImage } 
                            src={ thumbnails[this.props.currentImage].fileUrl }  
                        ></img>
                        { this.props.currentImage < totalImages - 1 && <button className="imageRight imageLeftRight" onClick={ this.props.slideshowRight }>&gt;</button> }
                    </div>
                </Modal>

            </div>
        )
     } 
 }

 export default Slideshow

