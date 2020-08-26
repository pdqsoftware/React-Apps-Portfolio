import React from 'react'

class Search extends React.Component {

    render() {
        return (
            <div>
                <label className="dropdown searchTextInput">Enter your search text: </label>
                <input className="dropdown searchTextInput" type="text" id="searchTextInput" name="searchText"></input>
            </div>
        )
     } 
 }

 export default Search