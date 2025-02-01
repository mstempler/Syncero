import React from "react";
import Banner from "../components/banner/banner";
import Mobile from "../components/mobile/mobile";
import Project from "../components/project/project";
import Tab from "../components/tab/tab";
import Cost from "../components/cost/cost";

import Trending from "../components/trending/trending";
import Visit from "../components/visit/visit";
import Review from "../components/review/review";

const projects = [
    {
      image: "/images/8-5.webp", // Replace with your image paths
      title: "Essential home services",
      link:"/essential-home-services"
    },
    {
      image: "/images/5project.webp",
      title: "Outdoor upkeep",
       link:"/outdoor-upkeep"
    },
    {
      image: "/images/2project.webp",
      title: "Healthy at home",
       link:"/healthy-at-home"
    },
    {
        image: "/images/3project.webp",
        title: "Do it all from home",
          link:"/"
      },
      {
        image: "/images/4project.webp",
        title: "Learn something new",
          link:"/"
      },
  ];
  const service1 = [
    {
      image: "/images/s1.webp", // Replace with your image paths
      title: "Handyman",
        link:"/instant-result"
    },
    {
      image: "/images/s2.webp",
      title: "General contractors",
        link:"/instant-result"
    },
    {
      image: "/images/s3.webp",
      title: "Local electricians",
        link:"/instant-result"
    },
    {
        image: "/images/s4.webp",
        title: "Personal trainers",
          link:"/instant-result"
      },
      {
        image: "/images/s5.webp",
        title: "Roof estimating services",
          link:"/instant-result"
      },
      {
        image: "/images/s6.webp",
        title: "Shower contractors",
          link:"/instant-result"
      },
      {
        image: "/images/s7.webp",
        title: "Security camera install",
          link:"/instant-result"
      },
      {
        image: "/images/s8.webp",
        title: "Financial planners",
          link:"/instant-result"
      },
  ];
const Home = () => {
    return (
        <>
       
        <Banner />
        <Mobile />
        <Project heading="Explore More Projects" slides={projects} />
        <Tab />
        <Cost />
        <Project heading="Services you might also like" slides={service1} />
        <Trending />
        <Visit />
        <Review />

        </>
    );
};

export default Home;