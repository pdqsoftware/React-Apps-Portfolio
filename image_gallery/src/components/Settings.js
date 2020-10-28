import React from 'react'
import Modal from 'react-modal'

// Defines the location of the 
Modal.setAppElement('#app') 


class Settings extends React.Component {
    
    render() {

        const customStyles = {
            content : {
            //   top                   : '10%',
            //   left                  : '10%',
            //   right                 : 'auto',
            //   bottom                : 'auto',
            //   marginRight           : '10%',
              transform             : 'translate(10%, 10%)'
            }
        }

        // Extract variable(s)/function(s) from props
        const { saveEnabled, updateDVD } = this.props
       
        return (
            <Modal
                isOpen = { this.props.modalOpen }
                onRequestClose = { this.props.closeSettingsModal }
                contentLabel = "Showing image gallery settings"
                style={ customStyles }
                className = "Modal settingsModal"
                shouldCloseOnOverlayClick={ true }
            >
                <div id="settingsContainer">
                    <h3>Image Library Settings</h3>
                    <div className="sort_container">
                        <label>Sort order:</label>
                        <div className="dropdown" onChange={ e => this.props.changeOrder(e.target.value) }>
                            <select id="sort_order" name="order">
                                <option value="asc">Ascending</option>
                                <option value="desc">Descending</option>
                            </select>
                        </div>
                    </div>
                    <div className="input_container">
                        <label className="checkbox">
                            <input
                                className="checkbox_input"
                                name="showImageName"
                                type="checkbox"
                                checked={ this.props.showImageName }
                                onChange={(e) => this.props.handleChangeSettings("showImageName", e.target.checked) } 
                            /> Show image name?
                        </label>

                        <label className="checkbox">
                            <input
                                className="checkbox_input"
                                name="showImageMeta"
                                type="checkbox"
                                checked={ this.props.showImageMeta }
                                onChange={(e) => this.props.handleChangeSettings("showImageMeta", e.target.checked) } 
                            /> Show image meta data?
                        </label>
                    </div>

                    <div className="slideshow">
                        <p><b>Slideshow ?</b></p>
                        <div>
                            <label className="slideshow_label">
                                <input 
                                    className="slideshow_radio" 
                                    type="radio" 
                                    value="all" 
                                    checked={this.props.slideshowOption === "all"}
                                    name="slideshow" 
                                    onChange={ e => { this.props.radioSlideshowChange(e.target.value ) } } 
                                /> All Images</label>
                            <label className="slideshow_label">
                                <input 
                                    className="slideshow_radio" 
                                    type="radio" 
                                    value="selected" 
                                    disabled = { this.props.searchText === '' && this.props.metaText === 'none-selected' ? true : false }
                                    checked={this.props.slideshowOption === "selected"}
                                    name="slideshow" 
                                    onChange={ e => { this.props.radioSlideshowChange(e.target.value ) } } 
                                /> Selected Images</label>
                            <label className="slideshow_label">
                                <input 
                                    className="slideshow_radio" 
                                    type="radio" 
                                    value="none" 
                                    checked={this.props.slideshowOption === "none"}
                                    name="slideshow" 
                                    onChange={ e => { this.props.radioSlideshowChange(e.target.value ) } }
                                /> No Slideshow</label>
                        </div>
                    </div>

                    <div className="zip">
                        <p><b>Download Zip of Images ?</b></p>
                        <div>
                            <label className="zip_label">
                                <input 
                                    className="zip_radio" 
                                    type="radio" 
                                    value="all" 
                                    checked={this.props.zipOption === "all"}
                                    name="zip_download" 
                                    onChange={ e => { this.props.radioZipDownloadChange(e.target.value ) } } 
                                /> All Images</label>
                            <label className="zip_label">
                                <input 
                                    className="zip_radio" 
                                    type="radio" 
                                    value="selected" 
                                    disabled = { this.props.searchText === '' ? true : false }
                                    checked={this.props.zipOption === "selected"}
                                    name="zip_download" 
                                    onChange={ e => { this.props.radioZipDownloadChange(e.target.value ) } } 
                                /> Selected Images</label>
                            <label className="zip_label">
                                <input 
                                    className="zip_radio" 
                                    type="radio" 
                                    value="none" 
                                    checked={this.props.zipOption === "none"}
                                    name="zip_download" 
                                    onChange={ e => { this.props.radioZipDownloadChange(e.target.value ) } }
                                /> No Download</label>
                        </div>
                    </div>


                    <div className="modalButtonContainer">
                        <button className="modalButton cancelButton" onClick={ this.props.closeSettingsModal }>OK</button>
                    </div>
                </div>
            </Modal>
        )
     } 
 }

 export default Settings