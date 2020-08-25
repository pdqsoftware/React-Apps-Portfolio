import React from 'react'

class Select extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            type: [
                "Movie", "Series", "Other", "Unknown"
            ],
            genre: [
                "Comedy", "Love Story", "Thriller", "Children's"
            ],
            sortOrder: "asc"
        }
        this.handleAdd=this.handleAdd.bind(this)
    }

    handleAdd() {
        alert('Add button clicked!')
    }
   
 
    render() {
        return (
            <div>
                <div className="dropdown">
                    <select id="movie_type" name="type">
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                        <option value="other">Other</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
                <div className="dropdown">
                    <select id="movie_genre" name="genre">
                        <option value="comedy">Comedy</option>
                        <option value="love">Love Story</option>
                        <option value="thriller">Thriller</option>
                        <option value="children">Children's</option>
                    </select>
                </div>
                <div className="dropdown">
                    <select id="sort_order" name="order">
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>
        )
     } 
 }

 export default Select