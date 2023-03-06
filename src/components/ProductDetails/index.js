import React from "react";


function ProductDetails(all){

    let id=all.match.params.id;

    let allProducts=JSON.parse(localStorage.getItem("allproducts"));

    let productItem = allProducts.find((pr)=>pr.id ===id);

    return (
           <div>
            {productItem.name} {productItem.price}
           </div>);
}
export default ProductDetails;