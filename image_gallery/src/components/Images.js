import React from 'react'
import HorizontalBreak from './HorizontalBreak'
import Thumb from './Thumb'

class Images extends React.Component {

    render() {

        let order
        if (this.props.sortOrder === 'asc') {
            order = 1
        } else { 
            order = -1
        }

        let thumbnails = this.props.thumbnails

        // Sort ascending/descending by image name
        thumbnails.sort((a, b) => (a.name > b.name) ? 1 * order : -1 * order)

        // Filter by search text
        if (this.props.searchText !== '') {
            thumbnails = thumbnails.filter(item => {
                return String(item.name).toLowerCase().includes(this.props.searchText.toLowerCase())
            })
        }
        // Filter by meta text
        if (this.props.searchMetaText !== 'none-selected') {
            thumbnails = thumbnails.filter(item => {
                return String(item.metadata).toLowerCase().includes(this.props.searchMetaText.toLowerCase())
            })
        }

        return (
            <div>
                { thumbnails.map((item, i) => {
                        return <Thumb 
                            uniqueKey = { i }
                            imageInfo = { item }
                            showLargeImage = { this.props.showLargeImage }
                            showImageName = { this.props.showImageName }
                            showImageMeta = { this.props.showImageMeta }
                        />
                    }
                )}

            </div>
        )
     } 
 }

 export default Images


                                // {/* aspectratio = { item.aspectratio }  */}
                                // {/* name = { item.name }  */}
                                // {/* fileUrl = { item.fileUrl } */}
                                // {/* counter = { i }  */}