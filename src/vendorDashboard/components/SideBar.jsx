import React from "react";
import {Link} from "react-router-dom"
const SideBar = ({
  showFirmHandler,
  showProductHandler,
  showAllProductsHandler,
  showFirmTitle
}) => {
  const deleteAll = async()=>{
                  try {
                          const response = await fetch("http://localhost:4000/vendor/deleteAll", {
                              method: 'DELETE'
                          })
                      if(response.ok){
                          confirm("are you sure, you want to delete?")
                          alert("Product deleted Successfully")
                      }
                  } catch (error) {
                      console.error(error);
                      alert('Failed to delete product')
                  }
      }
  return (
    <div className="sideBarSection">
      <ul>
      <Link to="/home" style={{ textDecoration: 'none' , paddingBottom:"10px" }} >
      <li>Home </li>
      </Link>

        {showFirmTitle ? <li onClick={showFirmHandler}>Add Firm</li> : "" }
        <li onClick={showProductHandler}>Add Product</li>
        <li onClick={showAllProductsHandler}>All Products</li>
      </ul>
    </div>
  );
};

export default SideBar;