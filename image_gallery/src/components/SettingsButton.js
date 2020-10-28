import React from 'react'

class AppSettings extends React.Component {

    render() {
        return (
            <div id="appSettings">
                <img src='../images/cog.png' alt="system controls cog image" onClick={ this.props.openSettingsModal } /> 
            </div>
        )
     } 
 }

 export default AppSettings
