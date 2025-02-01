import React from "react";
import Essentialbanner from "../components/essential-banner/essential-banner";
import Household from "../components/household/household";
import Filter from "../components/filter/filter";
import Essentiallist from "../components/essential-list/essential-list";
import Download from "../components/download/download";
import Garden from "../components/garden/garden";

const data={
    title :'The grass is always greener.',
    description: 'when you re stuck inside. Find a local pro for your lawn.',
    services :[
        {
          
          image: "/images/g1.png",
          overlayText: "Tidy grass",
          name: "Full service lawn care",
          avgPrice: "$50"
          
        },
        {
          image: "/images/g2.png",
          overlayText: "Clean gutters",
          name: "Gutter cleaning and maintenance",
          avgPrice: "$160"
        },
        {
          image: "/images/g3.png",
          overlayText: "Deckstaining & sealing",
          name: "AC repair",
          avgPrice: "$500"
        }
      ]
}
const leaf = [
    {
      image: "/images/l1.jpeg",
      title: "Full service lawn care",
      description: "See lawn mowing professionals near you",
    },
    {
      image: "/images/l2.jpeg",
      title: "Lawn mowing and trimming",
      description: "See lawn mowing professionals near you",
    },
    {
      image: "/images/l3.jpeg",
      title: "Lawn mower repair",
      description: "See lawn mower repair specialists near you",
    },
    {
      image: "/images/l4.jpeg",
      title: "Tree trimming",
      description: "See tree trimmers near you",
    },
    {
        image: "/images/o1.jpeg",
        title: "Gutter cleaning",
        description: "See gutter cleaners near you",
      },
      {
        image: "/images/o7.jpeg",
        title: "Leaf removal",
        description: "See landscapers near you",
      },
      {
        image: "/images/l5.jpeg",
        title: "Sprinkler systems repair",
        description: "See sprinkler system repairers near you",
      },
      {
        image: "/images/l6.jpeg",
        title: "Fence and gate repair",
        description: "See fence repairmen near you",
      },
     
  ];
  const garden = [
    {
      image: "/images/gr1.jpeg",
      title: "Sod installation",
      description: "See sod installers near you",
    },
    {
      image: "/images/gr2.jpeg",
      title: "Sprinkler installation",
      description: "See irrigation specialists near you",
    },
    {
      image: "/images/gr3.jpeg",
      title: "Mulching",
      description: "See lawn mower repair specialists near you",
    },
    {
      image: "/images/l6.jpeg",
      title: "Fence and gate installation",
      description: "See fence installers near you",
    },
    {
        image: "/images/gr4.jpeg",
        title: "Outdoor landscaping and design",
        description: "See landscapers near you",
      },
    
      {
        image: "/images/gr5.jpeg",
        title: "Shed installation",
        description: "See construction service providers near you",
      },
      {
        image: "/images/gr6.jpeg",
        title: "Outdoor lighting installation",
        description: "See electricians near you",
      },
      {
        image: "/images/gr7.jpeg",
        title: "Vegetable garden services",
        description: "See gardeners near you",
      },
     
  ]
  const retreat = [
    {
        image: "/images/rt5.jpeg",
        title: "Outdoor landscaping and design",
        description: "See landscapers near you",
      },
    
      {
        image: "/images/rt6.jpeg",
        title: "Patio repair",
        description: "See patio addition contractors near you",
      },
      {
        image: "/images/rt7.jpeg",
        title: "Swimming pool maintenance",
        description: "See pool cleaners near you",
      },
      {
        image: "/images/o7.jpeg",
        title: "Leaf removal",
        description: "See gardeners near you",
      },
    {
      image: "/images/rt1.jpeg",
      title: "Pressure washing",
      description: "See pressure washers near you",
    },
    {
      image: "/images/rt2.jpeg",
      title: "Deck or porch installation",
      description: "See deck or porch remodelers near you",
    },
    {
      image: "/images/rt3.jpeg",
      title: "Outdoor fireplace repair",
      description: "See lawn mower repair specialists near you",
    },
    {
      image: "/images/rt4.jpeg",
      title: "Concrete installation",
      description: "See deck or porch remodelers near you",
    },
  
     
  ]
  const insect = [
    {
      image: "/images/i1.jpeg",
      title: "Home pest control",
      description: "See exterminators near you",
    },
    {
      image: "/images/i2.jpeg",
      title: "Outdoor pest control",
      description: "See pest control professionals near you",
    },
    {
      image: "/images/i3.jpeg",
      title: "Roach extermination",
      description: "See exterminators near you",
    },
    {
      image: "/images/i4.jpeg",
      title: "Ant Control",
      description: "See exterminators near you",
    },
    {
        image: "/images/i5.jpeg",
        title: "Rat control",
        description: "See exterminators near you",
      },
      {
        image: "/images/i6.jpeg",
        title: "Flea treatments",
        description: "See dog groomers near you",
      },
      {
        image: "/images/i7.jpeg",
        title: "Spider exterminators",
        description: "See exterminators near you",
      },
      {
        image: "/images/i8.jpeg",
        title: "Bed bug removal",
        description: "See exterminators near you",
      },
  ]
  const outdoor = [
    {
      image: "/images/o1.jpeg",
      title: "Gutter cleaning",
      description: "See gutter cleaners near you",
    },
    {
      image: "/images/o2.jpeg",
      title: "Roof repair",
      description: "See roofers near you",
    },
    {
      image: "/images/o3.jpeg",
      title: "Roof cleaning",
      description: "See roof cleaners near you",
    },
    {
      image: "/images/o4.jpeg",
      title: " Lawn mower repair",
      description: "See lawn mower repair specialists near you",
    },
    {
        image: "/images/o5.jpeg",
        title: "Full service lawncare",
        description: "See lawn mowing professionals near you",
      },
      {
        image: "/images/o6.jpeg",
        title: "Lawn mowing and trimming",
        description: "See lawn mowing professionals near you",
      },
      {
        image: "/images/o7.jpeg",
        title: "Leaf removal",
        description: "See landscapers near you",
      },
      {
        image: "/images/o8.jpeg",
        title: "Tree trimming",
        description: "See tree trimmers near you",
      },
  ]

const Outdoor = () => {
    return (
        <>
         <Essentialbanner
      backgroundUrl="/images/outdoorbanner.jpg"
      title="Outdoor upkeep."
            description="Mow the lawn. Hang garden lights. Deck out your backyard with patio furniture. Yep, you're ready to embrace the great outdoors. Find pros for all your yard work and enjoy your outdoor space."
      buttonText="Hire a Pro"
      onButtonClick={() => console.log("Hire a Pro button clicked!")}
    />
    <Household data={data} />
   

    <Filter />
    <Essentiallist heading="From lawn to leaf." cards={leaf }/>
    <Essentiallist heading="Garden goals." cards={garden }/>
    <Essentiallist heading="Personal retreat." cards={retreat }/>
    <Essentiallist heading="Pest-proof property. " cards={insect }/>

    <Essentiallist heading="Roof to roots." cards={outdoor }/>
    <Download />
    <Garden
  title="More for yard, garden and deck."
  description="Extra time inside = extra strain on the house. Find pros to help."
  buttonText="See Home Service"
  buttonLink="/"

  backgroundUrl="/images/clean.png"
/>


        </>
    );
};
export default Outdoor;