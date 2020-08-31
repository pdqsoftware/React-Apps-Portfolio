import React from 'react'

class Search extends React.Component {

    render() {
        return (
            <div id="search_body">
                <label className="dropdown searchTextInput">Enter your search text: </label>
                <input className="dropdown searchTextInput" type="text" id="searchTextInput" name="searchText"
                    onChange={ e => this.props.textChange(e.target.value) }
                ></input>
            </div>
        )
     } 
 }

 export default Search