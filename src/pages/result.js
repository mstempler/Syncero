import React from "react";
import Sidebar from "../components/sidebar/sidebar";
import Profile from "../components/profile/profile";
import Hire from "../components/hire/hire";
import Category from "../components/category/category";
const Result = () => {
    return (
        <>
        <div className="container-fluid">
            <div className="row prof">
                <div className="col-md-3">
                    <Sidebar />
                   
                </div>
                <div className="col-md-9">
                    <Profile />
                </div>
                
            </div>
            <Hire />
            <Category />
        </div>
        </>
    );
};
export default Result