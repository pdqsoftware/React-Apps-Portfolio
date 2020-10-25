import React from 'react'

class Thumb extends React.Component {

    render() {
        const height = 200
        const width = height // * this.props.aspectratio
        // console.log(`Height: ${height}  Width: ${width}`)
        return (
            <div className="thumbnail-container">
                <img  
                    className="thumbnail" 
                    key={ this.props.id } 
                    src={ this.props.thumbnail } 
                    alt={ this.props.name } 
                    width={ width } 
                    height={ height }
                    onClick={(e) => {this.props.showLargeImage(this.props.fileUrl)} }
                ></img><p>Text</p>
                </div>
        )
     } 
 }

 export default Thumb



//  style={{marginRight: 50 + 'px'}}