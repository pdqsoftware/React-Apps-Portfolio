import React from 'react'

class AddNewDvdButton extends React.Component {

    render() {
        return (
            <div>
                <div className="addNewButton" onClick={ this.props.openNewDvdModal }>Add a new DVD to the collection</div>
            </div>
        )
     } 
 }

 export default AddNewDvdButton