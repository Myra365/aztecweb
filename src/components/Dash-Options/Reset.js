import React from 'react'


class Reset extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isUserName: this.props.isUserName
        }

        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        console.log('hello from reset')
        fetch('https://aztecback.herokuapp.com/reset', {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: this.state.isUserName,
                score: 0
            })
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
        })
    }

    render(){
        console.log(this.state.isUserName)
        return(
            <div>
                <div className = "list pl0 mt0 measure center border border-info shadow-lg p-3 mb-5 rounded shadow-hover">
                    <h1 >Reset</h1>
                    <span>Reset Score</span><input type = 'submit' value = 'Reset' onClick = {this.onSubmit} />
                </div>
            </div>
        )
    }
}

export default Reset