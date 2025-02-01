import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './tab.css';
import { Link } from "react-router-dom";

function TabComponent() {
  const [activeTab, setActiveTab] = useState("menu0");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab">
      <div className="custom-container">
        <div className="row">
          <ul className="nav nav-tabs">
            <li className={`nav-item ${activeTab === "menu0" ? "active" : ""}`}>
              <a
                className="nav-link"
                href="#menu0"
                onClick={() => handleTabChange("menu0")}
              >
                Home Maintenance
              </a>
            </li>
            <li className={`nav-item ${activeTab === "menu1" ? "active" : ""}`}>
              <a
                className="nav-link"
                href="#menu1"
                onClick={() => handleTabChange("menu1")}
              >
                Home Remodeling
              </a>
            </li>
            <li className={`nav-item ${activeTab === "menu2" ? "active" : ""}`}>
              <a
                className="nav-link"
                href="#menu2"
                onClick={() => handleTabChange("menu2")}
              >
                Weddings
              </a>
            </li>
            <li className={`nav-item ${activeTab === "menu3" ? "active" : ""}`}>
              <a
                className="nav-link"
                href="#menu3"
                onClick={() => handleTabChange("menu3")}
              >
                Events
              </a>
            </li>
            <li className={`nav-item ${activeTab === "menu4" ? "active" : ""}`}>
              <a
                className="nav-link"
                href="#menu4"
                onClick={() => handleTabChange("menu4")}
              >
                More
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div
              id="menu0"
              className={`tab-pane fade ${activeTab === "menu0" ? "show active" : ""}`}
            >
             
              <div class="col-md-12 section ">
              <img src="/images/1024.jpeg" alt="Mobile" />
    <div class="overlay">
      <div class="icon"><svg height="28" width="28" fill="currentColor" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M23 2a1 1 0 011 1v6.89l1.633 1.337a.999.999 0 11-1.266 1.547l-.367-.3V23c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V12.474l-.367.3a1 1 0 11-1.266-1.547l11-9a.998.998 0 011.266 0L18 4.981V3a1 1 0 011-1h4zm-9 2.292l-8 6.546V23c0 .551.45 1 1 1h14c.551 0 1-.449 1-1V10.838l-8-6.546zM17 12a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6a1 1 0 011-1h6zm-1 2h-4v4h4v-4zm6-10h-2v2.617l2 1.636V4z"></path></svg></div> 
      <h1>These annoying chores used to eat up your entire weekend. <br />Not anymore.</h1>
      <p><Link to="/instant-result">See all home maintenance</Link></p>
    </div>
  </div>
  <div class="row mt-2">
    <div class="col-md-4 col-sm-4 col-xs-4 home-section">
    <img src="/images/h1.webp" alt="Mobile" />
    <h4>House Cleaning</h4>
    <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M3.002 7.25c0 3.248 4.342 7.756 5.23 8.825l.769.925.769-.926c.888-1.068 5.234-5.553 5.234-8.824C15.004 4.145 13 1 9.001 1c-3.999 0-6 3.145-6 6.25zm1.994 0C4.995 5.135 6.175 3 9 3s4.002 2.135 4.002 4.25c0 1.777-2.177 4.248-4.002 6.59C7.1 11.4 4.996 9.021 4.996 7.25zM8.909 5.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"></path></svg>See pros near you</span>
    </div>
    <div class="col-md-4 col-sm-4 col-xs-4 home-section">
    <img src="/images/h2.webp" alt="Mobile" />
    <h4>Interior Painting</h4>
    <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M3.002 7.25c0 3.248 4.342 7.756 5.23 8.825l.769.925.769-.926c.888-1.068 5.234-5.553 5.234-8.824C15.004 4.145 13 1 9.001 1c-3.999 0-6 3.145-6 6.25zm1.994 0C4.995 5.135 6.175 3 9 3s4.002 2.135 4.002 4.25c0 1.777-2.177 4.248-4.002 6.59C7.1 11.4 4.996 9.021 4.996 7.25zM8.909 5.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"></path></svg>See pros near you</span>
    </div>
    <div class="col-md-4 col-sm-4 col-xs-4 home-section">
    <img src="/images/h3.webp" alt="Mobile" />
    <h4>Handyman</h4>
    <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M3.002 7.25c0 3.248 4.342 7.756 5.23 8.825l.769.925.769-.926c.888-1.068 5.234-5.553 5.234-8.824C15.004 4.145 13 1 9.001 1c-3.999 0-6 3.145-6 6.25zm1.994 0C4.995 5.135 6.175 3 9 3s4.002 2.135 4.002 4.25c0 1.777-2.177 4.248-4.002 6.59C7.1 11.4 4.996 9.021 4.996 7.25zM8.909 5.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"></path></svg>See pros near you</span>
    </div>

  </div>
            </div>
            <div
              id="menu1"
              className={`tab-pane fade ${activeTab === "menu1" ? "show active" : ""}`}
            >
               <div class="col-md-12 section ">
              <img src="/images/1024.jpeg" alt="Mobile" />
    <div class="overlay">
      <div class="icon"><svg height="28" width="28" fill="currentColor" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M23 2a1 1 0 011 1v6.89l1.633 1.337a.999.999 0 11-1.266 1.547l-.367-.3V23c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V12.474l-.367.3a1 1 0 11-1.266-1.547l11-9a.998.998 0 011.266 0L18 4.981V3a1 1 0 011-1h4zm-9 2.292l-8 6.546V23c0 .551.45 1 1 1h14c.551 0 1-.449 1-1V10.838l-8-6.546zM17 12a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6a1 1 0 011-1h6zm-1 2h-4v4h4v-4zm6-10h-2v2.617l2 1.636V4z"></path></svg></div> 
      <h1>Find the pros you've always needed to create the rooms you've <br /> always wanted.</h1>
      <p><Link to="/instant-result">See all home remodeling</Link></p>
    </div>
  </div>
  <div class="row mt-2">
    <div class="col-md-4 col-sm-4 col-xs-4 home-section">
    <img src="/images/h4.webp" alt="Mobile" />
    <h4>Tile Installation and Replacement</h4>
    <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M3.002 7.25c0 3.248 4.342 7.756 5.23 8.825l.769.925.769-.926c.888-1.068 5.234-5.553 5.234-8.824C15.004 4.145 13 1 9.001 1c-3.999 0-6 3.145-6 6.25zm1.994 0C4.995 5.135 6.175 3 9 3s4.002 2.135 4.002 4.25c0 1.777-2.177 4.248-4.002 6.59C7.1 11.4 4.996 9.021 4.996 7.25zM8.909 5.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"></path></svg>See pros near you</span>
    </div>
    <div class="col-md-4 col-sm-4 col-xs-4 home-section">
    <img src="/images/h5.webp" alt="Mobile" />
    <h4>Floor Installation or Replacement</h4>
    <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M3.002 7.25c0 3.248 4.342 7.756 5.23 8.825l.769.925.769-.926c.888-1.068 5.234-5.553 5.234-8.824C15.004 4.145 13 1 9.001 1c-3.999 0-6 3.145-6 6.25zm1.994 0C4.995 5.135 6.175 3 9 3s4.002 2.135 4.002 4.25c0 1.777-2.177 4.248-4.002 6.59C7.1 11.4 4.996 9.021 4.996 7.25zM8.909 5.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"></path></svg>See pros near you</span>
    </div>
    <div class="col-md-4 col-sm-4 col-xs-4 home-section">
    <img src="/images/h6.webp" alt="Mobile" />
    <h4>General Contracting</h4>
    <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M3.002 7.25c0 3.248 4.342 7.756 5.23 8.825l.769.925.769-.926c.888-1.068 5.234-5.553 5.234-8.824C15.004 4.145 13 1 9.001 1c-3.999 0-6 3.145-6 6.25zm1.994 0C4.995 5.135 6.175 3 9 3s4.002 2.135 4.002 4.25c0 1.777-2.177 4.248-4.002 6.59C7.1 11.4 4.996 9.021 4.996 7.25zM8.909 5.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"></path></svg>See pros near you</span>
    </div>

  </div>
            </div>
            <div
              id="menu2"
              className={`tab-pane fade ${activeTab === "menu2" ? "show active" : ""}`}
            >
              <div class="col-md-12 section ">
              <img src="/images/1024.jpeg" alt="Mobile" />
    <div class="overlay">
      <div class="icon"><svg height="28" width="28" fill="currentColor" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M13.992 2.6c1.221-.91 2.681-.775 3.79.334 1.13 1.13 1.212 2.858-.286 4.282l-.675.675H21a1 1 0 011 1v7h1a1 1 0 011 1v7h1a1 1 0 110 2H3a1 1 0 110-2h1v-7a1 1 0 011-1h1v-7a1 1 0 011-1h4.164l-.676-.675c-1.498-1.424-1.415-3.152-.286-4.282 1.11-1.11 2.569-1.243 3.79-.334zM22 17.89H6v6h16v-6zM16.412 4.207a.888.888 0 00-1.246.003l-.398.4c-.027.025-.058.038-.085.06-.022.023-.033.052-.058.073-.049.04-.104.055-.156.085-.021.01-.041.024-.062.034a.952.952 0 01-.415.093.887.887 0 01-.145-.012.936.936 0 01-.269-.081c-.021-.01-.041-.023-.062-.034-.052-.03-.108-.044-.157-.085-.025-.021-.036-.05-.058-.072-.027-.023-.058-.036-.084-.061l-.399-.4a.888.888 0 00-1.246-.003c-.424.425-.257 1.008-.012 1.252l2.432 2.433 2.433-2.433c.244-.244.411-.827-.013-1.252zM8 15.89h12v-6H8v6z"></path></svg></div> 
      <h1>You’re getting married! Let’s get you some help. Here’s everything<br /> you need for the big day.</h1>
      <p><Link to="/instant-result">See all Wedding</Link></p>
    </div>
  </div>
  <div class="row mt-2">
    <div class="col-md-4 col-sm-4 col-xs-4 home-section">
    <img src="/images/h7.webp" alt="Mobile" />
    <h4>Tile Installation and Replacement</h4>
    <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M3.002 7.25c0 3.248 4.342 7.756 5.23 8.825l.769.925.769-.926c.888-1.068 5.234-5.553 5.234-8.824C15.004 4.145 13 1 9.001 1c-3.999 0-6 3.145-6 6.25zm1.994 0C4.995 5.135 6.175 3 9 3s4.002 2.135 4.002 4.25c0 1.777-2.177 4.248-4.002 6.59C7.1 11.4 4.996 9.021 4.996 7.25zM8.909 5.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"></path></svg>See pros near you</span>
    </div>
    <div class="col-md-4 col-sm-4 col-xs-4 home-section">
    <img src="/images/h8.webp" alt="Mobile" />
    <h4>Floor Installation or Replacement</h4>
    <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M3.002 7.25c0 3.248 4.342 7.756 5.23 8.825l.769.925.769-.926c.888-1.068 5.234-5.553 5.234-8.824C15.004 4.145 13 1 9.001 1c-3.999 0-6 3.145-6 6.25zm1.994 0C4.995 5.135 6.175 3 9 3s4.002 2.135 4.002 4.25c0 1.777-2.177 4.248-4.002 6.59C7.1 11.4 4.996 9.021 4.996 7.25zM8.909 5.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"></path></svg>See pros near you</span>
    </div>
    <div class="col-md-4 col-sm-4 col-xs-4 home-section">
    <img src="/images/h9.webp" alt="Mobile" />
    <h4>General Contracting</h4>
    <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M3.002 7.25c0 3.248 4.342 7.756 5.23 8.825l.769.925.769-.926c.888-1.068 5.234-5.553 5.234-8.824C15.004 4.145 13 1 9.001 1c-3.999 0-6 3.145-6 6.25zm1.994 0C4.995 5.135 6.175 3 9 3s4.002 2.135 4.002 4.25c0 1.777-2.177 4.248-4.002 6.59C7.1 11.4 4.996 9.021 4.996 7.25zM8.909 5.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"></path></svg>See pros near you</span>
    </div>

  </div>
            </div>
            <div
              id="menu3"
              className={`tab-pane fade ${activeTab === "menu3" ? "show active" : ""}`}
            >
              <div class="col-md-12 section ">
              <img src="/images/1024.jpeg" alt="Mobile" />
    <div class="overlay">
      <div class="icon"><svg height="28" width="28" fill="currentColor" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M6.654 10.027c.336-.08.692.02.937.266l10.114 10.115a1 1 0 01-.39 1.656L5.981 25.84a3.006 3.006 0 01-3.094-.73 3.006 3.006 0 01-.73-3.093l3.778-11.334c.11-.33.382-.577.72-.657zM24 21.995c.552 0 1 .443 1 .995V23a1 1 0 01-2 0c0-.552.448-1.005 1-1.005zM7.32 12.851l-3.266 9.8a1 1 0 00.247 1.046 1 1 0 001.046.247l9.8-3.266L7.32 12.85zM25 15a1 1 0 010 2h-1.88c-1.1 0-2.136.429-2.913 1.207a.997.997 0 01-1.415 0 .999.999 0 010-1.414A6.08 6.08 0 0123.12 15H25zm-9-2.995c.551 0 1 .443 1 .995v.01a1 1 0 01-2 0c0-.552.447-1.005 1-1.005zm9-2.01c.552 0 1 .443 1 .995V11a1 1 0 01-2 0c0-.552.448-1.005 1-1.005zM11.998 2a1 1 0 011 1v1.879a6.08 6.08 0 01-1.793 4.328.997.997 0 01-1.415 0 .999.999 0 010-1.414 4.096 4.096 0 001.207-2.914V3a1 1 0 011-1zm12.328.259a1.002 1.002 0 011.413.07c.37.409.339 1.04-.07 1.413-.987.894-2.033.754-2.726.663-.654-.087-.849-.083-1.119.162-.293.265-.32.52-.325 1.185-.004.75-.01 1.776-.98 2.655-.989.894-2.035.757-2.728.665-.61-.08-.836-.095-1.122.164a.999.999 0 11-1.343-1.482c.988-.895 2.035-.757 2.727-.665.612.08.837.096 1.123-.164.292-.265.32-.521.324-1.185.004-.75.011-1.776.981-2.655.987-.894 2.035-.753 2.725-.663.655.087.85.082 1.12-.163zm-18.329.746c.552 0 1 .443 1 .995v.01a1 1 0 01-2 0c0-.552.448-1.005 1-1.005z"></path></svg></div> 
      <h1>Throwing a great party takes a lot of planning. Or just a <br />great planner. Start here for all your events.</h1>
      <p><Link to="/instant-result">See all Events</Link></p>
    </div>
  </div>
  <div class="row mt-2">
    <div class="col-md-4 col-sm-4 col-xs-4 home-section">
    <img src="/images/h10.webp" alt="Mobile" />
    <h4>Photo Booth Rental</h4>
    <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M3.002 7.25c0 3.248 4.342 7.756 5.23 8.825l.769.925.769-.926c.888-1.068 5.234-5.553 5.234-8.824C15.004 4.145 13 1 9.001 1c-3.999 0-6 3.145-6 6.25zm1.994 0C4.995 5.135 6.175 3 9 3s4.002 2.135 4.002 4.25c0 1.777-2.177 4.248-4.002 6.59C7.1 11.4 4.996 9.021 4.996 7.25zM8.909 5.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"></path></svg>See pros near you</span>
    </div>
    <div class="col-md-4 col-sm-4 col-xs-4 home-section">
    <img src="/images/h11.webp" alt="Mobile" />
    <h4>Wedding and Event Catering</h4>
    <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M3.002 7.25c0 3.248 4.342 7.756 5.23 8.825l.769.925.769-.926c.888-1.068 5.234-5.553 5.234-8.824C15.004 4.145 13 1 9.001 1c-3.999 0-6 3.145-6 6.25zm1.994 0C4.995 5.135 6.175 3 9 3s4.002 2.135 4.002 4.25c0 1.777-2.177 4.248-4.002 6.59C7.1 11.4 4.996 9.021 4.996 7.25zM8.909 5.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"></path></svg>See pros near you</span>
    </div>
    <div class="col-md-4 col-sm-4 col-xs-4 home-section">
    <img src="/images/h12.webp" alt="Mobile" />
    <h4>DJ</h4>
    <span><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M3.002 7.25c0 3.248 4.342 7.756 5.23 8.825l.769.925.769-.926c.888-1.068 5.234-5.553 5.234-8.824C15.004 4.145 13 1 9.001 1c-3.999 0-6 3.145-6 6.25zm1.994 0C4.995 5.135 6.175 3 9 3s4.002 2.135 4.002 4.25c0 1.777-2.177 4.248-4.002 6.59C7.1 11.4 4.996 9.021 4.996 7.25zM8.909 5.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"></path></svg>See pros near you</span>
    </div>

  </div>
            </div>
            <div
              id="menu4"
              className={`tab-pane fade ${activeTab === "menu4" ? "show active" : ""}`}
            >
              <h3>Menu 4</h3>
              <p>
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabComponent;
