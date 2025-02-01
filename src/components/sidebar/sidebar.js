import React from "react";
import './sidebar.css';

const Sidebar = () => {

       
    return (
       <>
       <div className="side-filter">
        <div className="side-filter__item"> 
            <h4>Your project estimate</h4>
            <h5>$130</h5>
            <p>Avg. price near you</p>
            <hr></hr>
            <span>Edit filters to refine your price</span>
        </div>
        <div className="side-form">
        <h2>When do you want to start?</h2>

<div className="option-group">
  <label>
    <input
      type="radio"
      name="start-time"
      value="within-48-hours"
     
    />
    Within 48 hours
  </label>
  <label>
    <input
      type="radio"
      name="start-time"
      value="within-a-week"
     
    />
    Within a week
  </label>
  <label>
    <input
      type="radio"
      name="start-time"
      value="flexible"
    
    />
    Flexible on timeline
  </label>
  <label>
    <input
      type="radio"
      name="start-time"
      value="specific-date"
      
    />
    Specific date(s)
  </label>
</div></div>
<div className="side-form">

<h2>Frequency <span className="info-icon">?</span></h2>


<div className="frequency-group">
  <label>
    <input
      type="radio"
      name="frequency"
      value="just-once"
    
    />
    Just once
  </label>
  <label>
    <input
      type="radio"
      name="frequency"
      value="every-week"
     
    />
    Every week
  </label>
  <label>
    <input
      type="radio"
      name="frequency"
      value="every-2-weeks"
     
    />
    Every 2 weeks
  </label>
  <label>
    <input
      type="radio"
      name="frequency"
      value="once-a-month"
    
    />
    Once a month
  </label>
</div>
</div>
<div className="side-form">

<h2>Number of bedrooms <span className="info-icon">?</span></h2>


<div className="frequency-group">
  <label>
    <input
      type="radio"
      name="frequency"
      value="1 bedroom"
    
    />
   1 bedroom
  </label>
  <label>
    <input
      type="radio"
      name="frequency"
      value="2 bedroom"
     
    />
  2 bedroom
  </label>
  <label>
    <input
      type="radio"
      name="frequency"
      value="every-2-weeks"
     
    />
   3 bedroom
  </label>
  <label>
    <input
      type="radio"
      name="frequency"
      value="once-a-month"
    
    />
   4 bedroom
  </label>
</div>

</div>
<div className="side-form">

<h2>Cleaning type <span className="info-icon">?</span></h2>


<div className="frequency-group">
  <label>
    <input
      type="radio"
      name="frequency"
      value="1 bedroom"
    
    />
   Standard cleaning
  </label>
  <label>
    <input
      type="radio"
      name="frequency"
      value="2 bedroom"
     
    />
 Deep cleaning
  </label>
  <label>
    <input
      type="radio"
      name="frequency"
      value="every-2-weeks"
     
    />
  Move out cleaning
  </label>
  <label>
    <input
      type="radio"
      name="frequency"
      value="once-a-month"
    
    />
   Vacation rental cleaning
  </label>
</div>

</div>
<div className="side-form">

<h2>Number of bathrooms <span className="info-icon">?</span></h2>


<div className="frequency-group">
  <label>
    <input
      type="radio"
      name="frequency"
      value="1 bedroom"
    
    />
1 bathrooms
  </label>
  <label>
    <input
      type="radio"
      name="frequency"
      value="2 bedroom"
     
    />
2 bathrooms
  </label>
  <label>
    <input
      type="radio"
      name="frequency"
      value="every-2-weeks"
     
    />
3 bathrooms
  </label>
  <label>
    <input
      type="radio"
      name="frequency"
      value="once-a-month"
    
    />
   4 bathrooms
  </label>
  <label>
    <input
      type="radio"
      name="frequency"
      value="once-a-month"
    
    />
   5 bathrooms
  </label>
</div>

</div>
<div className="side-form">

<h2>Number of pets <span className="info-icon">?</span></h2>


<div className="frequency-group">
  <label>
    <input
      type="radio"
      name="frequency"
      value="1 bedroom"
    
    />
No pets in home
  </label>
  <label>
    <input
      type="radio"
      name="frequency"
      value="2 bedroom"
     
    /> pets in home
  </label>
 
</div>

</div>
<div className="side-form">

<h2>Extra services<span className="info-icon">?</span></h2>


<div className="frequency-group">
  <label>
    <input
      type="radio"
      name="frequency"
      value="1 bedroom"
    
    />
Window cleaning (interior)
  </label>
  <label>
    <input
      type="radio"
      name="frequency"
      value="2 bedroom"
     
    />
Fridge cleaning
  </label>
  <label>
    <input
      type="radio"
      name="frequency"
      value="every-2-weeks"
     
    />
Oven cleaning
  </label>
  <label>
    <input
      type="radio"
      name="frequency"
      value="once-a-month"
    
    />
Laundry
  </label>
  <label>
    <input
      type="radio"
      name="frequency"
      value="once-a-month"
    
    />
 
Baseboard cleaning
  </label>
</div>

</div>
<a href="" className="reset">Reset Filter</a>
        </div>

  
       </>
    );
};
export default Sidebar