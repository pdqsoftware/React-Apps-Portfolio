import React from 'react'

class Select extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            type: [
                {
                    value: "A",
                    label: "All"
                },
                {
                    value: "M",
                    label: "Movies"
                },
                {
                    value: "S",
                    label: "Series"
                },
                {
                    value: "other",
                    label: "Other"
                },
                {
                    value: "unknown",
                    label: "Unknown"
                }
            ],
            genre: [
                {
                    value: "A",
                    label: "Any"
                },
                {
                    value: "action",
                    label: "Action"
                },
                {
                    value: "comedy",
                    label: "Comedy"
                },
                {
                    value: "christmas",
                    label: "Christmas"
                },
                {
                    value: "love",
                    label: "Love Story"
                },
                {
                    value: "thriller",
                    label: "Thriller"
                },
                {
                    value: "children",
                    label: "Children's"
                },
                {
                    value: "scifi",
                    label: "Sci-Fi"
                }
            ]
        }
    }
 
    render() {
        return (
            <div>
                <div className="dropdown" onChange={ e => this.props.changeType(e.target.value) }>
                    <select id="movie_type" name="type">
                        { this.state.type.map(item => <option key={ item.value } value={ item.value }>{ item.label }</option>) }
                    </select>
                </div>
                <div className="dropdown" onChange={ e => this.props.changeGenre(e.target.value) }>
                    <select id="movie_genre" name="genre">
                        { this.state.genre.map(item => <option key={ item.value } value={ item.value }>{ item.label }</option> ) }
                    </select>
                </div>
                <div className="dropdown" onChange={ e => this.props.changeOrder(e.target.value) }>
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