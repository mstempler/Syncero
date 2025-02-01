import React from "react";
import './filter.css';
const Filter = () => {
    return (
        <>
        <div className="filter">
            <div className="custom-container">
                <div className="row">
                    <h5>Looking for something else?</h5>
                    <p>No problem: we have pros for every kind of job.</p>
                    <div className="banner-search col-md-9">
                       <input aria-label="Search on Syncero" role="combobox" aria-controls="search-dropdown-dweb" aria-expanded="false" class="search-input" data-test="search-input" placeholder="Describe your project or problem —&nbsp;be as detailed as you’d like." value=""></input>
                       <input name="zip_code" aria-label="Zip code" class="zip-input" placeholder="Zip code" pattern="[0-9]*" inputmode="numeric" maxlength="5" autocomplete="postal-code" value=""></input>
                       <button class="search-btn" data-test="search-button" aria-label="Search" type="button"><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 2C10.532 2 13 4.467 13 7.5c0 1.156-.36 2.229-.972 3.114l3.679 3.679a.999.999 0 11-1.414 1.414l-3.68-3.679A5.46 5.46 0 017.5 13 5.506 5.506 0 012 7.5C2 4.467 4.468 2 7.5 2zm0 2C5.57 4 4 5.57 4 7.5S5.57 11 7.5 11 11 9.43 11 7.5 9.43 4 7.5 4z"></path></svg></button>
                   </div>
                </div>
            </div>
            </div>
        </>
    );
};
export default Filter;