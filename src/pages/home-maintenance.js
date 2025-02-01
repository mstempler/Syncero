import React from "react";
import Essentialbanner from "../components/essential-banner/essential-banner";
import Household from "../components/household/household";
import Filter from "../components/filter/filter";
import Essentiallist from "../components/essential-list/essential-list";
import Video from "../components/video/video";
import Download from "../components/download/download";
import Garden from "../components/garden/garden";



const data={
    title :'Set it and forget it.',
    description: 'These annoying chores used to eat up your entire weekend. Not anymore.',
    services :[
        {
          image: "/images/ss1.png",
          overlayText: "Pool care",
          name: "House cleaners",
          avgPrice: "$135"
        },
        {
          image: "/images/ss2.png",
          overlayText: "Weekly cleaning",
          name: "Pool cleaners",
          avgPrice: "$50"
        },
        {
          image: "/images/ss3.png",
          overlayText: "Monthly mowing",
          name: "Landscapers",
          avgPrice: "$600"
        }
      ]
}
const seasonal = [
    {
      image: "/images/ms1.jpeg",
      title: "House cleaning",
      description: "See house cleaners near you",
    },
    {
      image: "/images/ms2.jpeg",
      title: "Lawn mowing and trimming",
      description: "See lawn mowing professionals near you",
    },
    {
      image: "/images/m3.jpeg",
      title: "Swimming pool cleaning and maintenance",
      description: "See pool cleaners near you",
    },
    {
      image: "/images/m4.jpeg",
      title: "Window washing",
      description: "See window cleaners near you",
    },
    {
        image: "/images/o1.jpeg",
        title: "Gutter cleaning",
        description: "See gutter cleaners near you",
      },
      {
        image: "/images/8-5.webp",
        title: "Fireplace and chimney cleaning",
        description: "See fireplace and chimney specialists near you",
      },
      {
        image: "/images/m7.jpeg",
        title: "Full service lawn care",
        description: "See duct and vent specialists near you",
      },
      
  ];
 const indoor = [
    {
      image: "/images/ind1.jpeg",
      title: "Tree trimming",
      description: "See tree trimmers near you",
    },
    {
      image: "/images/ind2.jpeg",
      title: "Pressure washing",
      description: "See pressure washers near you",
    },
    {
      image: "/images/ind3.jpeg",
      title: "Exterior painting",
      description: "See painters near you",
    },
    {
      image: "/images/ind4.jpeg",
      title: "Sprinkler system repair and maintenance",
      description: "See pros near you",
    },
    {
        image: "/images/ind5.jpeg",
        title: "Sump pump installation and repair",
        description: "See plumbers near you",
      },
      {
        image: "/images/ind6.jpeg",
        title: "Upholstery and furniture cleaning",
        description: "See upholstery and furniture cleaners near you",
      },
      {
        image: "/images/ind7.jpeg",
        title: "Home inspection",
        description: "See Home inspectors near you",
      },
      {
        image: "/images/ind8.jpeg",
        title: "Carpet cleaning",
        description: "See carpet cleaners near you",
      },
      
      
  ];
  const Projects = [
    {
      image: "/images/pro1.jpeg",
      title: "Interior painting",
      description: "See Interior painters near you",
    },
    {
      image: "/images/pro2.jpeg",
      title: "Carpet cleaning",
      description: "See carpet cleaners near you",
    },
    {
      image: "/images/pro3.jpeg",
      title: "Junk removal",
      description: "See junk removal specialists  near you",
    },
    {
      image: "/images/pro4.jpeg",
      title: "Fence and gate installation",
      description: "See fence installers near you",
    },
    {
        image: "/images/pro5.jpeg",
        title: "Interior design",
        description: "See interior designers near you",
      },
      {
        image: "/images/pro6.jpeg",
        title: "Home organization",
        description: "See home organizers near you",
      },
      {
        image: "/images/pro7.jpeg",
        title: "Gardening",
        description: "See gardeners near you",
      },
      {
        image: "/images/pro8.jpeg",
        title: "TV mounting",
        description: "See home theater specialists near you",
      },
      
      
  ];
  const pest = [
    {
      image: "/images/pest1.jpeg",
      title: "Pest Control",
      description: "See exterminators near you",
    },
    {
      image: "/images/pest2.jpeg",
      title: "Bed bug extermination",
      description: "See Bed bug exterminators near you",
    },
    {
      image: "/images/pest3.jpeg",
      title: "Mold inspection and removal",
      description: "See mold removal experts near you",
    },
    {
      image: "/images/pest4.jpeg",
      title: "Rodent removal",
      description: "See rodent and animal removal specialists near you",
    },
    {
        image: "/images/pest5.jpeg",
        title: "Home security and alarms install",
        description: "See home security professionals near you",
      },
      {
        image: "/images/pest6.jpeg",
        title: "Water damage cleanup and restoration",
        description: "See water damage specialists near you",
      },
      {
        image: "/images/pest7.jpeg",
        title: "Roof repair or maintenance",
        description: "See roofers near you",
      },
      {
        image: "/images/pest8.jpeg",
        title: "Emergency plumbing",
        description: "See plumbers near you",
      },
      
      
  ];
  const pro = [
    {
      image: "/images/pr1.jpeg",
      title: "Pest Control",
      description: "See exterminators near you",
    },
    {
      image: "/images/pr2.jpeg",
      title: "Bed bug extermination",
      description: "See Bed bug exterminators near you",
    },
    {
      image: "/images/pr3.jpeg",
      title: "Mold inspection and removal",
      description: "See mold removal experts near you",
    },
    {
      image: "/images/pr4.jpeg",
      title: "Rodent removal",
      description: "See rodent and animal removal specialists near you",
    },
    {
        image: "/images/pr5.jpeg",
        title: "Home security and alarms install",
        description: "See home security professionals near you",
      },
      {
        image: "/images/pr6.jpeg",
        title: "Water damage cleanup and restoration",
        description: "See water damage specialists near you",
      },
      {
        image: "/images/pr7.jpeg",
        title: "Roof repair or maintenance",
        description: "See roofers near you",
      },
      {
        image: "/images/pr8.jpeg",
        title: "Emergency plumbing",
        description: "See plumbers near you",
      },
      
      
  ];
const Maintenance = () => {
    return (
        <>
          <Essentialbanner
      backgroundUrl="/images/main.png"
     title="  Home maintenance."         
      description="Clean the house. Clear the clogged gutters. Fix the fridge, oven, water heater — any appliance you can think of. Find the right professional every time to keep your home in working order."
      buttonText="Hire a Pro"
      onButtonClick={() => console.log("Hire a Pro button clicked!")}
    />

            <Household data={data} />
            <Filter />
            <Essentiallist heading="Monthly and seasonal maintenance." cards={seasonal }/>
            <Essentiallist heading="Yearly check-ups indoors and out." cards={indoor  }/>
            <Essentiallist heading="Projects for the weekend." cards={Projects  }/>
            <Essentiallist heading="In case of emergency." cards={pest  }/>
            <Essentiallist heading="Pros you should know." cards={pro  }/>
            <Video />
            <Download />
            <Garden
  title="Got a bigger project in mind?"
  description="Find contractors, carpenters and more for home construction projects."
  buttonText="Go to home remodeling"
  buttonLink="/"

  backgroundUrl="/images/worker.png"
/>
        </>
    );
};
export default Maintenance