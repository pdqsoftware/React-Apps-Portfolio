import React from 'react'
import Modal from 'react-modal'

// Defines the location of the 
Modal.setAppElement('#app') 


class Settings extends React.Component {
    
    render() {
        console.log('Modal called ' + this.props.modalOpen)

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
                className = "Modal"
                overlayClassName = "Overlay"
            >
                <div>
                    <h3>Image Library Settings</h3>

                    <label className="newDvdLabel">Type:</label>
                    <div   className="dropdown newDvdDropdown">
                        {/* <select id="movie_type" name="type"  onChange = { (e) => updateDVD("type", e.target.value) } >
                            { this.props.movieTypes.map(item => <option key={ item.value } value={ item.value }>{ item.label }</option>) }
                        </select> */}
                    </div>

                    <div>
                        <p className="newDvdLabel">Name:</p>
                        <input type="text" name="name" className="newDvdInput" onChange = { (e) => updateDVD("name", e.target.value) } />
                    </div>

                    <div>
                        <p className="newDvdLabel">Length:</p>
                        <input type="text" name="length" className="newDvdInput" onChange = { (e) => updateDVD("length", e.target.value) } />
                    </div>

                    <label className="newDvdLabel">Genre(s):</label>
                    <div className="dropdown newDvdDropdown"  onChange={ e => updateDVD("genre", e.target.value) }>
                        {/* <select id="movie_genre" name="genre">
                            { this.props.genreList.map(item => <option key={ item.value } value={ item.value }>{ item.label }</option> ) }
                        </select> */}
                    </div>


                    <div>
                        <p className="newDvdLabel">Back Cover Image Name:</p>
                        <input type="text" name="backCover" className="newDvdInput" onChange = { (e) => updateDVD("backCoverImage", e.target.value) } />
                    </div>

                    <div className="modalButtonContainer">
                        <button className="modalButton saveButton" disabled={!saveEnabled} onClick={ this.props.saveSettings }>Save</button>
                        <button className="modalButton cancelButton" onClick={ this.props.closeSettingsModal }>Cancel</button>
                    </div>
                </div>
            </Modal>
        )
     } 
 }

 export default Settings