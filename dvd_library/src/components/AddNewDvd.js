import React from 'react'
import Modal from 'react-modal'

// Defines the location of the 
Modal.setAppElement('#app') 


class AddNewDvd extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            saveEnabled: false,
            newDVD: []
        }
        console.log('Construtor has run...')
        // this.handleUpdateDVD = this.handleUpdateDVD.bind(this)
    }

    handleUpdateDVD(element, value) {
        console.log("Update: " + element + " " + value)
        const dvd = this.state.newDVD
        let saveButtonEnabled = false

        

        if (element === "genre") {
            let genreArray = []
            genreArray.push(value)
            dvd['genre'] = genreArray
        } else {
            dvd[element] = value
        }

        console.log('Name: ' + dvd['name'])
        console.log('Type: ' + dvd['type'])
        console.log('Genre: ' + dvd['genre'])
        if (dvd['name'] !== undefined && dvd['type'] !== undefined && dvd['genre'] !== undefined) {
            // Enable the save DVD button
            saveButtonEnabled = true
        }
        

        this.setState(() => ({
            saveEnabled: saveButtonEnabled,
            newDvd: dvd
        }))
    }
    
    render() {
        console.log('Modal called ' + this.props.modalOpen)
       
        return (
            <Modal
                isOpen = { this.props.modalOpen }
                onRequestClose = { this.props.closeNewDvdModal }
                contentLabel = "Add new DVD to Collection"
            >
                <div>
                    <h3>Enter the details of the new DVD</h3>
                    <label className="selectLabel">Type:</label>
                    <div className="dropdown" >
                        <select id="movie_type" name="type" onChange = { (e) => this.handleUpdateDVD("type", e.target.value) } >
                            { this.props.movieTypes.map(item => <option key={ item.value } value={ item.value }>{ item.label }</option>) }
                        </select>
                    </div>
                    <div>
                        <p>Name:</p>
                        <input type="text" name="name" onChange = { (e) => this.handleUpdateDVD("name", e.target.value) } />
                    </div>
                    <div>
                        <p>Length</p>
                        <input type="text" name="length" onChange = { (e) => this.handleUpdateDVD("length", e.target.value) } />
                    </div>
                    <label className="selectLabel">Genre(s):</label>
                    <div className="dropdown" onChange={ e => this.handleUpdateDVD("genre", e.target.value) }>
                        <select id="movie_genre" name="genre">
                            { this.props.genreList.map(item => <option key={ item.value } value={ item.value }>{ item.label }</option> ) }
                        </select>
                    </div>
                    <div>
                        <p>IMDb Link:</p>
                        <input type="text" name="link" onChange = { (e) => this.handleUpdateDVD("imdb_link", e.target.value) } />
                    </div>
                    <div>
                        <p>Front Cover Image Name:</p>
                        <input type="text" name="frontCover" onChange = { (e) => this.handleUpdateDVD("frontCoverImage", e.target.value) } />
                    </div>
                    <div>
                        <p>Back Cover Image Name:</p>
                        <input type="text" name="backCover" onChange = { (e) => this.handleUpdateDVD("backCoverImage", e.target.value) } />
                    </div>

                    <div>
                        <button className="addButton" disabled={!this.state.saveEnabled} onClick={ (e) => this.props.addNewDvdEntry(this.state.newDVD) }>Add DVD to collection</button>
                        <button className="closeButton" onClick={ this.props.closeNewDvdModal }>Cancel</button>
                    </div>
                </div>
            </Modal>
        )
     } 
 }

 export default AddNewDvd