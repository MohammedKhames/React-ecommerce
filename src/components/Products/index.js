import React,{Component} from "react";
import { NavLink } from "react-router-dom";

class Products extends Component{


    render(){

        const items = this.props.ProductAttr;
                    console.log(items);

        return(
          <div className="container">
            <h2>All Products</h2>
              {items.map((e)=>{
                return (
                  <div>
                    <NavLink to={"/Products/" + e.id} className="d-block border p-2 my-2">
                        <span>{e.name}</span>
                        <span className="float-right"> {e.price} LEG</span>
                    </NavLink>
                    <span 
                    style={{cursor:"pointer"}}
                    onClick={()=>this.props.handleDelete(e.id)}
                    > Delete</span>
                    </div>
                );
                
              })}
          </div>
          );
           
        
    }
}

export default Products;