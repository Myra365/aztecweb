import React from 'react'
import Reset from '../Dash-Options/Reset'

class Dash extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isUserName: this.props.isUserName
        }
    }
    render(){
        console.log(this.state.isUserName)
        return(
            <div>
                <h1 className = "tc">Teacher Dashboard</h1>
                <Reset isUserName = {this.state.isUserName}/>
            </div>
        )
    }
}

export default Dash