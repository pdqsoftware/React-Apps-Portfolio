import React from 'react'
import Modal from 'react-modal'

// Defines the location of the 
Modal.setAppElement('#app') 


class LargeImage extends React.Component {
    
    render() {
        console.log('Modal called ' + this.props.modalOpen)

        const customStyles = {
            content : {
              top                   : '40%',
              left                  : '-25%',
              right                 : '-25%',
              bottom                : 'auto',
            //   marginRight           : '-50%',
              transform             : 'translate(20%, 20%)',
            }
        }

        // Extract variable(s)/function(s) from props
        const { saveEnabled, updateDVD } = this.props
       
        return (
            <Modal
                isOpen = { this.props.modalOpen }
                onRequestClose = { this.props.closeLargeImage }
                contentLabel = "Showing large version of selected image"
                /* style={ customStyles } */
                className = "Modal"
                overlayClassName = "Overlay"
            >
                <div>
                    <img  
                        className="fullImage" 
                        key={ this.props.imageName } 
                        src={ this.props.imageName }  
                    ></img>

                </div>
            </Modal>
        )
     } 
 }

 export default LargeImage