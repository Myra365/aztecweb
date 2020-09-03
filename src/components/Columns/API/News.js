import React from 'react'

class News extends React.Component{
    constructor(){
        super()
        this.state = {
            eng1: '',
            eng2: '',
            eng3: '',
            spa1: '',
            spa2: '',
            spa3: '',

        }
    }
    componentDidMount(){
        const url = 'https://raw.githubusercontent.com/Myra365/news-api/master/news.json'
        fetch(url)
        .then(res=>res.json())
        .then(res=> {
            this.setState({
                eng1: res[0].eng,
                eng2: res[1].eng,
                eng3: res[2].eng,
                spa1: res[0].spa,
                spa2: res[1].spa,
                spa3: res[2].spa,
            })
            console.log(res[1].eng)
        })
    }
    render(){
        return(
        <div>
            <h3 className = "tc bb bw2">News</h3>
            <p className = "tc f5 f4-m f3-l lh-copy measure mt0"><b>{this.state.eng1}</b></p>
            <p className = "tc f5 f4-m f3-l lh-copy measure mt0"><b>{this.state.spa1}</b></p>
            <p className = "tc f5 f4-m f3-l lh-copy measure mt0">{this.state.eng2}</p>
            <p className = "tc f5 f4-m f3-l lh-copy measure mt0">{this.state.spa2}</p>
            
        </div>)
    }
}

export default News 
