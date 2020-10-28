import React from 'react'

class MetaSearch extends React.Component {

    render() {
        return (
            <div id="meta_container">
                <label id="meta_label">Select your Metadata search:</label>
                <div id="meta_dropdown" onChange={ e => this.props.textChange(e.target.value) }>
                    <select id="meta_text" name="metaText">
                        <option value="none-selected"> </option>
                        {this.props.metaData.map((metaStr) => (
                            <option value={metaStr} key={metaStr}>
                                {metaStr}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        )
     } 
 }

 export default MetaSearch