import React from 'react'

class Body extends React.Component {
    
    render() {
        let genreList = []
        let movieType = ''
        let frontCover = ''
        let backCover = ''
        let movieName = ''
        let movieLink = ''

        // // Do a for loop through the genre(s) of the dvd and match to the genre[]
        if (this.props.selectedDvd[0] != null) {
            // Create a comma-seperated list of genres
            let counter = 0
            genreList = this.props.selectedDvd[0].genre.map((item) => {
                const myGenre = this.props.genreList.findIndex((genreItem) => {
                    return genreItem.value === item
                })
                return (++counter === 1 ? '' : ', ') + this.props.genreList[myGenre].label
            })
            console.log(genreList)

            // Convert movie type into a description
            movieType = this.props.movieTypes.findIndex((item) => {
                return item.value === this.props.selectedDvd[0].type
            })
            movieType = this.props.movieTypes[movieType].label

            // Build a full path to the cover images
            frontCover = '../images/' + this.props.selectedDvd[0].front
            backCover = '../images/' + this.props.selectedDvd[0].back

            // Movie name
            movieName = this.props.selectedDvd[0].name

            // Movie URL
            movieLink = this.props.selectedDvd[0].link

        }

        return this.props.selectedDvd[0] == null ? 
        (
            <div id="bodyDvdDetails" className="bodyDetail"><p>No DVD selected yet!</p></div>
        
         ) :
        (
            <div id="bodyDvdDetails">

                <div>
                    { this.props.selectedDvd[0].front ? <img className="dvdCover coverFront" src={ frontCover } alt="- No front cover image -" height="200"></img>
                    :
                    <p className="coverFront bodyDetail">- No front cover image -</p> }
                    
                    { this.props.selectedDvd[0].back ? <img className="dvdCover coverBack" src={ backCover } alt="- No back cover image -" height="200"></img>
                    :
                    <p className="coverBack bodyDetail leftPadding">- No back cover image -</p> }
                </div>
                <div>
                    <p className="bodyDetail">{ movieType }: { movieName }</p>
                    <p className="bodyDetail">Length: { this.props.selectedDvd[0].length }</p>
                    <p className="bodyDetail">Genre(s): { genreList.map((item) => {
                            return item
                        }) }
                    </p>
                    { /* Only include link if one exists */ }
                    { movieLink && <p className="bodyDetail">
                        <a href={ movieLink } target="_blank">Visit `{ movieName}` on IMDb</a>
                    </p> }
                </div>

            </div>
        )
     } 
 }

 export default Body