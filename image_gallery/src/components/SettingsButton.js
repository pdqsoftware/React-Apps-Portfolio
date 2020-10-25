import React from 'react'

class AppSettings extends React.Component {

    render() {
        return (
            <div>
                <div className="appSettings" onClick={ this.props.openSettingsModal }>Show Settings</div>
            </div>
        )
     } 
 }

 export default AppSettings