import React,{Component} from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar/Navbar";
import { allProductsData } from "./data";
import AddProduct from "./components/AddProduct/AddProduct";
import ProductDetails from "./components/ProductDetails";

let data = localStorage.getItem("allproducts")
           ?JSON.parse(localStorage.getItem("allproducts"))
           :allProductsData;
localStorage.setItem("allproducts",JSON.stringify(data));


class App extends Component{
    state={
        products: allProductsData,
        name: "",
        price: ""
    };

    handleChange = (e)=>{
        this.setState({
            [e.target.id] : e.target.value
        });
    };

    handleDelete=(id)=>{
        console.log(id)
      };

    addProduct=(e)=>{
        e.preventDefault();
        this.setState({
            products:[
                ...this.state.products,
                {
                    id:6,
                    name:this.state.name,
                    price:this.state.price
                }
            ]
        },()=>{
            localStorage.setItem("allproducts",JSON.stringify(this.state.products))
        })
    }

    render(){
        return(
          <div>
            <BrowserRouter>
            <Navbar />

              <Routes>

                 <Route path="/" exact element={<Home />} />

                 <Route path="/Products" 
                       render={(props)=>{return(<Products />);}} 
                       element={<Products ProductAttr={this.state.products}
                                         handleDelete={this.handleDelete}
                       />}/>


                 <Route path="/addProduct" 
                       render={(props)=>{return(<AddProduct />);}} 
                         element={<AddProduct
                            handleChange ={this.handleChange } 
                            submitChange={this.addProduct}
                            
                       
                       />}/> 

                    <Route path="/Products/:id" 
                       render={(props)=>{return(<ProductDetails />);}} 
                       element={<ProductDetails/>}/>


                       



              </Routes>


            </BrowserRouter>

             
            
          </div>
          );
           
        
    }
}

export default App;