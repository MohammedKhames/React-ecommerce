import React,{Component} from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component{
    render(){
        return(
          <div className="header py-2 bg-primary fs-20 text-center">
              <NavLink to="/" className="text-white mx-2">Home</NavLink>
              <NavLink to="/Products" className="text-white mx-2"> ProductList</NavLink>
              <NavLink to="/addProduct" className="text-white mx-2"> Add Product</NavLink>
          </div>
          );
           
        
    }
}

export default Navbar;