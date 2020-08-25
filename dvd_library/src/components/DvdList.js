import React from 'react'

class DvDList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            result: []
        }
    }
   

    componentDidMount() {
        console.log('Fetching data...')       //  After component is mounted on the DOM

        const parsedJSON = require('../data.json');
        this.setState({
            result: parsedJSON.dvds
        })
        
    }
 
    render() {
        return (
            <div>
                {
                    this.state.result.map(item => <p key={ item.name }>{ item.name }</p>)
                }
            </div>
        )
     } 
 }

 export default DvDList