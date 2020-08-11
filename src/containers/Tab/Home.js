import React from 'react'
import Nav from '../../components/Nav'
import Left from '../../components/Columns/Left'
import Right from '../../components/Columns/Right'
import Middle from '../../components/Columns/Middle'
import Footer from '../../components/Columns/Footer'

class Home extends React.Component{
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return(
            <div>
              <Nav/>
              <div className = "temp">
              <img className = "aztec " src = "./Images/myra-icon5T.png" alt = "atec"/>
              </div>
              <div className = "center-box">
              <div className="container">
                <div className=" row2 ">
                  <div className="liner left col2 shadow-3 glow grow bg-animate">
                      <Left />
                  </div>
                    <div className="temp liner middle tc shadow-3 glow bg-animate">
                      <Middle/>
                    </div>
                    <div className="liner right col2 shadow-3 glow grow bg-animate">
                      <Right/>
                    </div>
                </div>
              </div>
              </div>
              <Footer/> 
            </div>
        )
    }
}
export default Home;