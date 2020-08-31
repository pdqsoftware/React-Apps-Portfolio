import React from 'react'

class DvDList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            result: []
        }
    }

 
    render() {

        // Sort the DVDs, by name, according to sortOrder
        console.log(`Sort order: ${this.props.sortOrder}`)
        console.log(`DVD type: ${this.props.selectedType}`)

        let order
        if (this.props.sortOrder === 'asc') {
            order = 1
        } else { 
            order = -1
        }

        let myDvds = this.props.dvds

        myDvds.sort((a, b) => (a.name > b.name) ? 1 * order : -1 * order).filter(item => {
            return item.type === this.props.selectedType
        })

        // Filter out by DVD type
        myDvds = myDvds.filter(item => {
            return this.props.selectedType === 'A' || item.type === this.props.selectedType
        })

        // Filter out by Genre - stored as an array on DVD
        myDvds = myDvds.filter(item => {
            return this.props.selectedGenre === 'A' || item.genre.filter(genre => {
                return genre === this.props.selectedGenre
            }).length > 0 
        })

        // Filter by search text
        if (this.props.searchText !== '') {
            myDvds = myDvds.filter(item => {
                console.log(this.props.searchText.toLowerCase())
                return String(item.name).toLowerCase().includes(this.props.searchText.toLowerCase())
                // console.log(searchItem)
                // return true
                // item.name.toLowercase().includes(searchText.toLowercase())
            })
        }
        

        return (
            <div className="dvdList">

            {/* <p className="dvdName" onClick={ () => this.props.dvdSelected("Movie Name") } key={ "MovieName" }>{ "About Time" }</p> */}
                { myDvds.length == 0 ? 
                    <p>No DVDs selected to display!</p> 
                    : myDvds.map(item => <p className="dvdName" onClick={ () => this.props.dvdSelected(item.name) } key={ item.name }>{ item.name }</p>) 
                }
            </div>
        )
     } 
 }

 export default DvDList