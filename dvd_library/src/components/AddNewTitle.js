import React from 'react'

class AddNewTitle extends React.Component {

    render() {
        return (
            <div>
                <div className="addNewButton" onClick={ this.props.addNewDvdButton }>Add new DVD to collection</div>
            </div>
        )
     } 
 }

 export default AddNewTitle