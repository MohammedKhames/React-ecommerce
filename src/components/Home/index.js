import React,{Component} from "react";
import myImage from "../../assets/images/1.jpeg";
import "./style.scss";

class Home extends Component{
    render(){
        return(
          <div className="container py-4  test" >
              <div className="row justify-content-between align-items-center border py-2"> 
                    <div className="col-md-6 font-weight-bold display-4">
                            Welcome to my Ecommerce
                    </div>

                    <div className="col-md-6">
                            <img src={myImage} className="w-100" alt=""/>
                    </div>

              </div>
          </div>
          );
           
        
    }
}

export default Home;