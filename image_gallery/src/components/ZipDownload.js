import React from 'react';
import Modal from 'react-modal'

var JSZip = require("jszip")

class ZipDownload extends React.Component {

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

        if (this.props.slideshowOption === "selected") {
            // Filter by search text
            if (this.props.searchText !== '') {
                thumbnails = thumbnails.filter(item => {
                    return String(item.name).toLowerCase().includes(this.props.searchText.toLowerCase())
                })
            }
        }

        const totalImages = thumbnails.length
        console.log(totalImages)

        var zip = new JSZip();
        zip.file("Hello.txt", "Hello World\n");
        var img = zip.folder("../images");
        // img.file("cog.png", imgData, {base64: true});
        zip.generateAsync({type:"blob"})
        .then(function(content) {
            // see FileSaver.js
            saveAs(content, "example2.zip");
        });

        return (
            totalImages <= 0 ? null : <div>


            </div>
        )
     } 
 }

 export default ZipDownload

