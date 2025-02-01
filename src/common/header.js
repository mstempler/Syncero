import React, { useEffect, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js'
const menuStructure = [
  {
    header: 'Home & commercial services',
    menus: [
      {
        name: 'Trending',
        submenus: [
          { name: 'Commercial roofing contractors' },
          { name: 'Wood floor refinishers' },
          { name: 'Home plumbing services' },
          { name: 'Gas heater services' },
          { name: 'Drain unclogging' },
          { name: 'Home staging' },
          { name: 'Snow plow services' },
          { name: 'Quality air duct cleaners' },
          { name: 'Concrete driveway contractors' },
        ]
      },
      {
        name: 'Interior',
        submenus: [
          { name: 'HVAC' },
          { name: 'Plumbing' },
          { name: 'Electricians' },
          { name: 'Appliance repair' },
          { name: 'Flooring installation' },
          { name: 'Painting' },
          { name: 'Countertops' },
          { name: 'Interior designers' },
          { name: 'Bathroom remodeling' },
          { name: 'Bedroom companies' },
          { name: 'HVAC' },
          { name: 'Plumbing' },
          { name: 'HVAC' },
          { name: 'Plumbing' },
          { name: 'HVAC' },
          { name: 'Plumbing' },
        ]
      },
      {
        name: 'Exterior',
        submenus: [
          { name: 'Roofing' },
          { name: 'Gutter cleaners' },
          { name: 'Window repair' },
          { name: 'Door repair' },
          { name: 'Flooring installation' },
          { name: 'Painting' },
          { name: 'Countertops' },
          { name: 'Interior designers' },
          { name: 'Bathroom remodeling' },
          { name: 'Bedroom companies' },
          { name: 'HVAC' },
          { name: 'Plumbing' },
          { name: 'HVAC' },
          { name: 'Plumbing' },
          { name: 'HVAC' },
          { name: 'Plumbing' },
        ]
      },
      {
        name: 'Garden & landscaping',
        submenus: [
          { name: 'Lawn care' },
          { name: 'Lawn sprinkler companies' },
          { name: 'Lawn fertilizing' },
          { name: 'Leaf removal' },
          { name: 'Weed control' },
          { name: 'Landscape designers' },
          { name: 'Small garden designers' },
          { name: 'Tree arborists' },
          { name: 'Tree movers' },
          { name: 'Tree removal' },
          
        ]
      }
    ]
  },
  {
    header: 'Other services',
    menus: [
      {
        name: 'Trending',
        submenus: [
          { name: 'Start up business consulting' },
          { name: 'Metal roof installation' },
          { name: 'Insulation companies' },
          { name: 'Building insulation services' },
          { name: 'iOS developers' },
          { name: 'Computer' },
          { name: 'Fireplace inspectors' },
          { name: 'Heated floor installation' },
          { name: 'Drywall and insulation' },
          { name: 'Shutter removal' },
          { name: 'Mandarin lessons' },
          { name: 'Armed security guards' },
        ]
      },
      {
        name: 'Cleaning & organization',
        submenus: [
          { name: 'Home cleaning' },
          { name: 'Organizing services' },
          { name: 'Deep cleaning' },
          { name: 'Wall cleaners' },
          { name: 'Move out cleaning' },
          { name: 'Duct & vent cleaning' },
          { name: 'Chimney cleaning' },
          { name: 'Gutter cleaning' },
          { name: 'Exterior house cleaning' },
          { name: 'Pool cleaning' },
          { name: 'Post construction cleaning' }
        ]
      },
      {
        name: 'Maintenance & repair',
        submenus: [
          { name: 'General contractor' },
          { name: 'Appliance repair' },
          { name: 'Roofing' },
          { name: 'Door repair' },
          { name: 'Painting' },
          { name: 'Flooring' },
          { name: 'Garage door repair' },
          { name: 'Window repairs' },
          { name: 'Gutter repair' },
        ]
      },
      {
        name: 'Pest control',
        submenus: [
          { name: 'Exterminators' },
          { name: 'Organic pest control' },
          { name: 'Bee removal' },
          { name: 'Bed bugs' },
          { name: 'Termite control' },
          { name: 'Rodent control' },
          { name: 'Wildlife removal' },
          { name: 'Insect control' },
          { name: 'Wasp removal services' },
          { name: 'Mosquito control services' }
        ]
      },
      {
        name: 'Additions and installations',
        submenus: [
          { name: 'TV wall mount install' },
          { name: 'Window installation' },
          { name: 'Flooring installation' },
          { name: 'Appliance installations' },
          { name: 'Fence installation' },
          { name: 'Tile installation' },
          { name: 'Cabinet installation' },
          { name: 'Artificial turf installation' },
          { name: 'Wallpaper installation' }
        ]
      },
      {
        name: 'Events',
        submenus: [
          { name: 'Professional photography' },
          { name: 'Videographers' },
          { name: 'Wedding photographers' },
          { name: 'Wedding officiants' },
          { name: 'Travel agency' },
          { name: 'Party planners' },
          { name: 'Wedding planners' },
          { name: 'Catering' },
          { name: 'Party bus' },
          { name: 'Limousine rentals' },
          { name: 'Face painting' },
          { name: 'Balloon decorators' },
          { name: 'Magicians' },
          { name: 'DJs' }
        ]
      },
      {
        name: 'Wellness',
        submenus: [
          { name: 'Personal trainers' },
          { name: 'In home personal trainers' },
          { name: 'Boxing training' },
          { name: 'Yoga' },
          { name: 'Bodybuilding trainers' },
          { name: 'Mixed martial arts training' },
          { name: 'Marriage counselors' },
          { name: 'Life coach' },
          { name: 'Quit smoking hypnosis' },
          { name: 'Nutritionists' },
          { name: 'Personal dietitian' },
          { name: 'Energy healing' }
        ]
      },
    ]
  },
  {
    header: 'More resources',
    menus: [
      
        {
          name: 'Guides & more',
          submenus: [
            { name: 'Home maintenance' },
            { name: 'Weddings' },
            { name: 'Cost guides' },
            { name: 'Home resource center' },
            { name: 'Home inspiration pictures' },
            { name: 'Get the app' }
          ]
              }
    ]
  }
]
 
const Header = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
    // ✅ Hooks are inside the functional component
    const scrollFunRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
    
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility
    const [isSubMenuOpen, setSubIsMenuOpen] = useState(false); // State to track menu visibility
    const [hoveredMenu, setHoveredMenu] = useState(null); // State to track hovered menu
    
    useEffect(() => {
      // setHoveredMenu(menuStructure[0].menus[0].submenus)
      console.log(hoveredMenu);
      
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsSticky(scrollPosition > 400);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


    // Toggle menu function
    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev); // Toggle the menu's open/close state
    };

    const toggleSubMenu = () => {
      setSubIsMenuOpen((prev) => !prev); // Toggle the menu's open/close state
    };

    // Handle hover
    const handleMouseEnter = (menu) => {
      console.log("Hovered menu:", menu); // Log hovered menu
      setHoveredMenu(menu);
      toggleSubMenu();
    };

    return (
        <>
              
            <header className="custom-header">
                <div className="container-fluid">
                    <div className=" head-section">
                        {/* Logo Section */}
                        <div className=" logo-section  align-items-center d-flex w-fit">
                          <Link to={"/home"} className="logo">
                            <img src="/images/co-logo.png" />
                            </Link> <hr />
                       
                            <div className="nav-list" onMouseLeave={() =>toggleMenu()}>
                              <a style={isMenuOpen ? { borderBottom: '2px solid #009fd9' } : {}} onClick={toggleMenu}  className="btn btn-light nav-li">
                                Explore
                              </a>
                              {isMenuOpen && (
                              <div className={`dropdown-menu ${isMenuOpen ? 'd-flex' : ''}`} style={{position: 'absolute',top:'60px'}} aria-labelledby="exploreDropdown">
                                <ul className="firstmenu">
                                  {menuStructure.map((menuGroup, index) => (
                                    <React.Fragment key={index}>
                                      <li  className="dropdown-header">{menuGroup.header}</li>
                                      {menuGroup.menus.map((menu, menuIndex) => (
                                        <li onMouseEnter={() => handleMouseEnter(menu.submenus)}  key={menuIndex} className="dropdown-submenu">
                                          <a
                                              className="dropdown-item dropdown-toggle"
                                              
                                              style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                              }}
                                            >
                                              {menu.name}
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                style={{ marginLeft: 'auto' }} // Optional: to add space between text and icon
                                              >
                                                <path
                                                  fill="#2f3033"
                                                  d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                                                />
                                              </svg>
                                            </a>
                                          {/* <ul className="dropdown-menu">
                                            {menu.submenus.map((submenu, submenuIndex) => (
                                              <li key={submenuIndex}>
                                                <a className="dropdown-item" href={submenu.link}>
                                                  {submenu.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul> */}
                                        </li>
                                      ))}
                                    </React.Fragment>
                                  ))}
                                </ul>

                                {hoveredMenu &&
                                (<ul  className="secondmenu">
                                      {hoveredMenu.map((submenu, submenuIndex) => (
                                        <li key={submenuIndex}>
                                          <a className="dropdown-item" href={submenu.link}>
                                            {submenu.name}
                                          </a>
                                        </li>
                                      ))}
                                </ul>)}

                              </div>
                              )}
                              <a href="/join-pro">Join as a pro</a>
                            </div>
                        </div>
                        <div className="banner-search w-fit ">
                       <input aria-label="Search on Syncero" role="combobox" aria-controls="search-dropdown-dweb" aria-expanded="false" class="search-input" data-test="search-input" placeholder="Describe your project or problem —&nbsp;be as detailed as you’d like." value=""></input>
                       <hr />
                       <input name="zip_code" aria-label="Zip code" class="zip-input" placeholder="Zip code" pattern="[0-9]*" inputmode="numeric" maxlength="5" autocomplete="postal-code" value=""></input>
                       <button class="search-btn1" data-test="search-button" aria-label="Search" type="button"><svg height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 2C10.532 2 13 4.467 13 7.5c0 1.156-.36 2.229-.972 3.114l3.679 3.679a.999.999 0 11-1.414 1.414l-3.68-3.679A5.46 5.46 0 017.5 13 5.506 5.506 0 012 7.5C2 4.467 4.468 2 7.5 2zm0 2C5.57 4 4 5.57 4 7.5S5.57 11 7.5 11 11 9.43 11 7.5 9.43 4 7.5 4z"></path></svg></button>
                   </div>
                        {/* Right Buttons */}
                        <div className=" text-end right-menu w-fit">
                            <Link to="/login" className="btn login btn-link">Log in</Link>
                            <Link to="/register" className="btn sign btn-primary">Sign up</Link>
                        </div>
                    </div>
                   
                    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{display: 'none'}}>

                    {!isSubMenuOpen ?
                      (<a className="navbar-brand" href="#">
                      <svg class="blue db" width="49" height="46" viewBox="0 0 49 46" fill="#009fd9"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 26c0 11.045 8.955 20 20 20 11.046 0 20-8.955 20-20 0-11.046-8.954-20-20-20C8.955 6 0 14.954 0 26z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M29.773 21.061H10.227v-4.447h19.546v4.447zm-8.774 17.51a10.313 10.313 0 0 0 1.378-5.152V22.932c-1.812 0-3.574.58-4.754 2.223v8.264c0 1.808.476 3.585 1.379 5.151L20 40.302 21 38.57z" fill="#fff"></path><path d="M44.66 5.65c2.3 0 4.15 1.83 4.15 4.08 0 2.23-1.86 4.08-4.15 4.08-2.35 0-4.18-1.85-4.18-4.08 0-2.25 1.83-4.08 4.18-4.08zm0 7.26c1.75 0 3.15-1.42 3.15-3.18 0-1.77-1.4-3.17-3.15-3.17-1.79 0-3.19 1.4-3.19 3.17 0 1.76 1.4 3.18 3.19 3.18zm.24-5.09c.97 0 1.52.47 1.52 1.21 0 .62-.44 1.06-1.21 1.15l1.24 1.43h-.97l-1.15-1.42h-.37v1.42h-.81V7.82h1.75zm-.01.71h-.93v1.01h.93c.43 0 .7-.17.7-.51 0-.33-.27-.5-.7-.5z" fill="#2F3033"></path></svg>
                      </a>) : 
                      (
                        <div className="back" onClick={() => toggleSubMenu()}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path height={20} width={20} fill="#000000" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg></div>
                      )
                      }


                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                            </button>


                      <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                          <li className="nav-item">
                             <Link to ="/home" className="nav-link" >Home</Link>
                          </li>
                          <li className="nav-item">
                          <Link to ="/"  className="nav-link" >Join as a pro</Link>
                          </li>
                          <li className="nav-item">
                          <Link to ="/login" className="nav-link"> Login</Link> 
                          </li>
                          <li className="nav-item">
                           <Link to="/register" className="nav-link">Sign Up</Link>
                          </li>
                          <li className="nav-item ">
                            <a className="nav-link" href="#" onClick={toggleMenu}  style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                  }}> Explore
                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 512 512"
                                                                style={{ marginLeft: 'auto' }} // Optional: to add space between text and icon
                                                              >
                                                                <path
                                                                  fill="#2f3033"
                                                                  d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                                                                />
                                                              </svg>
                          </a>
                            {isMenuOpen && (
                              <ul className="firstmenu">
                                {menuStructure.map((menuGroup, index) => (
                                  <React.Fragment key={index}>
                                    <li className="dropdown-header">{menuGroup.header}</li>
                                    {menuGroup.menus.map((menu, menuIndex) => (
                                      <li
                                        onClick={() => handleMouseEnter(menu.submenus)}
                                        key={menuIndex}
                                        className="dropdown-submenu"
                                      >
                                        <a
                                          className="dropdown-item dropdown-toggle"
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                          }}
                                        >
                                          {menu.name}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            style={{ marginLeft: "auto" }} // Optional: to add space between text and icon
                                          >
                                            <path
                                              fill="#2f3033"
                                              d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                                            />
                                          </svg>
                                        </a>
                                        {/* Render submenus */}
                                        {/* {activeSubmenu && (
                                        <ul className="dropdown-menu">
                                            {menu.submenus.map((submenu, submenuIndex) => (
                                              <li key={submenuIndex}>
                                                <a className="dropdown-item" href={submenu.link}>
                                                  {submenu.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        )} */}
                                      </li>
                                    ))}
                                  </React.Fragment>
                                ))}
                              </ul>
                            )}
                          </li>
                        </ul>

                        {isSubMenuOpen && (<ul  className={`secondmenu-mobile ${!isSubMenuOpen ? 'd-none' : ''}`}>
                                        {hoveredMenu.map((submenu, submenuIndex) => (
                                          <li key={submenuIndex}>
                                            <a className="dropdown-item" href={submenu.link}>
                                              {submenu.name}
                                            </a>
                                          </li>
                                        ))}
                          </ul>)}
                      </div>
                    </nav>
                </div>
            </header>

            <div
                  ref={scrollFunRef}
                  className={`scroll-fun  bg-white py-4 ${isSticky ? "sticky d-flex" : "d-none "}`}
                >
                  <div className="banner-search scroll-show w-fit container">
                    <input
                      aria-label="Search on Syncero"
                      role="combobox"
                      aria-controls="search-dropdown-dweb"
                      aria-expanded="false"
                      className="search-input"
                      data-test="search-input"
                      placeholder="Describe your project or problem — be as detailed as you’d like."
                      value=""
                    />
                    <hr />
                    <input
                      name="zip_code"
                      aria-label="Zip code"
                      className="zip-input"
                      placeholder="Zip code"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      maxLength="5"
                      autoComplete="postal-code"
                      value=""
                    />
                    <button
                      className="search-btn"
                      data-test="search-button"
                      aria-label="Search"
                      type="button"
                    >
                      Search
                    </button>
                  </div>
                </div>
            
           
        </>
    );
};

export default Header;

