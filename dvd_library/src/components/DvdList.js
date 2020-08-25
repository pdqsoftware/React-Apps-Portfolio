import React from 'react'

class DvDList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            result: []
        }
    }
   

    // componentDidMount() {
    //     console.log('Fetching data in List...')       //  After component is mounted on the DOM

    //     // const parsedJSON = require('../data.json');
    //     // this.setState({
    //     //     result: parsedJSON.dvds
    //     // })
        
    //     fetch('../data.json')
    //     .then(response => response.json())
    //     .then(result => {
    //         const dvds = result.map(item => {
    //             console.log(item)
    //             return item
    //         })
    //         this.setState({result: dvds})
    //     })
    // }
 
    render() {

        // const parsedJSON = require('../data.json');
        // const result = parsedJSON.dvds
        // console.log(result)

        // Sort the DVDs, by name, according to sortOrder
        console.log(`Sort order: ${this.props.sortOrder}`)
        console.log(`DVDs: ${this.props.dvds}`)

        let order
        if (this.props.sortOrder === 'asc') {
            order = 1
        } else { 
            order = -1
        }
        console.log(`Order: ${order}`)

        let myDvds = this.props.dvds

        myDvds.sort((a, b) => (a.name > b.name) ? 1 * order : -1 * order) 

        return (
            <div className="dvdList">
                {
                    myDvds.map(item => <p className="dvdName" key={ item.name }>{ item.name }</p>)
                }
            </div>
        )
     } 
 }

 export default DvDList