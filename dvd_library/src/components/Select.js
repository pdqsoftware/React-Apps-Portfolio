import React from 'react'

class Select extends React.Component {
 
    render() {
        return (
            <div id="select_body">
                <label className="selectLabel">Type:</label>
                <div className="dropdown" onChange={ e => this.props.changeType(e.target.value) }>
                    <select id="movie_type" name="type">
                        { this.props.movieTypes.map(item => <option key={ item.value } value={ item.value }>{ item.label }</option>) }
                    </select>
                </div>
                <label>Genre:</label>
                <div className="dropdown" onChange={ e => this.props.changeGenre(e.target.value) }>
                    <select id="movie_genre" name="genre">
                        { this.props.genreList.map(item => <option key={ item.value } value={ item.value }>{ item.label }</option> ) }
                    </select>
                </div>
                <label>Order:</label>
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