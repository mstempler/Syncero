import React from "react";
import { Link } from "react-router-dom";
const Found = () => {
    return (
        <>
        <div className="found">
        <h1>404</h1>
        <p>  Sorry Page not Found</p>
        <p>Please try finding what you need from our <Link to ="/home">homepage.</Link></p>
        </div>
       </>
      
    );};
    export default Found