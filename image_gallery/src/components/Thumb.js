import React from 'react'

class Thumb extends React.Component {

    render() {
        const height = 200
        const width = height // * this.props.aspectratio
        // console.log(`Height: ${height}  Width: ${width}`)
        // console.log(this.props.imageInfo.thumbnailurl)
        return (
            <div className="thumbnail-container">
                <img  
                    className="thumbnail" 
                    key={ this.props.imageInfo.id } 
                    src={ this.props.imageInfo.url } 
                    alt={ this.props.imageInfo.name } 
                    width={ width } 
                    height={ height }
                    onClick={(e) => {this.props.showLargeImage(this.props.fileUrl)} }
                ></img>
                { this.props.showImageName && <p className="thumbnail_text">{ this.props.name }</p> }
                { this.props.showImageMeta && <p className="thumbnail_text">{ this.props.imageInfo.metadata }</p> }
                </div>
        )
     } 
 }

 export default Thumb



//  style={{marginRight: 50 + 'px'}}