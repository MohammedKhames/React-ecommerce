import React,{Component} from "react";

class AddProduct extends Component{
    render(){
        return(
          <form className="container" onSubmit={this.props.submitChange}>

            <div className="form-group">
                <label> Product Name</label>
                <input id="name" type="text" className="form-control" onChange={this.props.handleChange } />
            </div>

            <div className="form-group">
                <label> Product Price</label>
                <input  id="price" type="number" className="form-control" onChange={this.props.handleChange }/>
            </div>

            <div className="form-group mt-5">
                <input type="submit" className="form-control" value="Add Product"/>
            </div>

          </form>
          );
           
        
    }
}

export default AddProduct;