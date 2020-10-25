import React from 'react'
import HorizontalBreak from './HorizontalBreak'
import Thumb from './Thumb'

class Images extends React.Component {

    render() {
        // this.props.thumbnails.map((th) => {
        //     console.log('th: ' + th)
        // })
        return (
            <div>
                
                
                { this.props.thumbnails.map((item, i) => {
                    return   <Thumb 
                                counter = { i } 
                                aspectratio = { item.aspectratio } 
                                thumbnail = { item.url } 
                                name = { item.name } 
                                id = { item.id } 
                                fileUrl = { item.fileUrl }
                                showLargeImage = { this.props.showLargeImage }
                            />
                }
                    
                )  }

            </div>
        )
     } 
 }

 export default Images


//  { this.props.thumbnails.map((th2) => { 
//     <p><Thumb thumbnail = { th2 } /></p>
//  })}


{/* <img key={ item } src={ item } alt="Girl in a jacket" width="200" height="250"></img> */}