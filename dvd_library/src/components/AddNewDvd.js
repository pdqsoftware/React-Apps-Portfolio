import React from 'react'
import Modal from 'react-modal'

// Defines the location of the 
Modal.setAppElement('#app') 


class AddNewDvd extends React.Component {

    
    render() {
        console.log('Modal called ' + this.props.modalOpen)

        const customStyles = {
            content : {
              top                   : '40%',
              left                  : '25%',
              right                 : 'auto',
              bottom                : 'auto',
              marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)'
            }
        }

        // Extract variable(s)/function(s) from props
        const { saveEnabled, updateDVD } = this.props
       
        return (
            <Modal
                isOpen = { this.props.modalOpen }
                onRequestClose = { this.props.closeNewDvdModal }
                contentLabel = "Add new DVD to Collection"
                /* style={ customStyles } */
                className = "Modal"
                overlayClassName = "Overlay"
            >
                <div>
                    <h3>Enter the details of the new DVD</h3>

                    <label className="newDvdLabel">Type:</label>
                    <div   className="dropdown newDvdDropdown">
                        <select id="movie_type" name="type"  onChange = { (e) => updateDVD("type", e.target.value) } >
                            { this.props.movieTypes.map(item => <option key={ item.value } value={ item.value }>{ item.label }</option>) }
                        </select>
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
                        <select id="movie_genre" name="genre">
                            { this.props.genreList.map(item => <option key={ item.value } value={ item.value }>{ item.label }</option> ) }
                        </select>
                    </div>

                    <div>
                        <p className="newDvdLabel">IMDb Link:</p>
                        <input type="text" name="link" className="newDvdInput" onChange = { (e) => updateDVD("imdb_link", e.target.value) } />
                    </div>

                    <div>
                        <p className="newDvdLabel">Front Cover Image Name:</p>
                        <input type="text" name="frontCover" className="newDvdInput" onChange = { (e) => updateDVD("frontCoverImage", e.target.value) } />
                    </div>

                    <div>
                        <p className="newDvdLabel">Back Cover Image Name:</p>
                        <input type="text" name="backCover" className="newDvdInput" onChange = { (e) => updateDVD("backCoverImage", e.target.value) } />
                    </div>

                    <div className="newDvdButtonContainer">
                        <button className="newDvdButton addNewButton" disabled={!saveEnabled} onClick={ this.props.addNewDvdEntry }>Add DVD to collection</button>
                        <button className="newDvdButton addNewButton" onClick={ this.props.closeNewDvdModal }>Cancel</button>
                    </div>
                </div>
            </Modal>
        )
     } 
 }

 export default AddNewDvd