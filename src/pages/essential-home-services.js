import React from "react";
import Essentialbanner from "../components/essential-banner/essential-banner";
import Household from "../components/household/household";
import Filter from "../components/filter/filter";
import Essentiallist from "../components/essential-list/essential-list";
import Download from "../components/download/download";
import Garden from "../components/garden/garden";


const kitchen = [
    {
      image: "/images/k1.jpeg",
      title: "Emergency plumbing",
      description: "See plumbers near you",
    },
    {
      image: "/images/k2.jpeg",
      title: "Garbage disposal repair",
      description: "See garbage disposal professionals near you",
    },
    {
      image: "/images/k3.jpeg",
      title: "Sink or faucet repair",
      description: "See plumbers near you",
    },
    {
      image: "/images/k4.jpeg",
      title: "Fridge repair",
      description: "See appliance service specialists near you",
    },
    {
        image: "/images/k5.jpeg",
        title: "Dishwasher repair",
        description: "See appliance service specialists near you",
      },
      {
        image: "/images/k6.jpeg",
        title: "Oven repair",
        description: "See appliance service specialists near you",
      },
      {
        image: "/images/k7.jpeg",
        title: "Drain unclogging",
        description: "See plumbers near you",
      },
      {
        image: "/images/k8.jpeg",
        title: "Cabinet repair",
        description: "See carpenters near you",
      },
  ];

  const bathroom = [
    {
      image: "/images/b1.jpeg",
      title: "Emergency plumbing",
      description: "See plumbers near you",
    },
    {
      image: "/images/b2.jpeg",
      title: "Toilet repair",
      description: "See plumbers near you",
    },
    {
      image: "/images/b3.jpeg",
      title: "Sink or faucet repair",
      description: "See plumbers near you",
    },
    {
      image: "/images/b4.jpeg",
      title: "Sink or faucet repair",
      description: "See plumbers near you",
    },
    {
        image: "/images/b5.jpeg",
        title: "Pipe repair",
        description: "See plumbers near you",
      },
      {
        image: "/images/b6.jpeg",
        title: "Drain unclogging",
        description: "SSee plumbers near you",
      },
      {
        image: "/images/b7.jpeg",
        title: "Pipe replacement",
        description: "See plumbers near you",
      },
      {
        image: "/images/b8.jpeg",
        title: "Bathroom fan repair",
        description: "See plumbers near you",
      },
  ];
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
  ];
  const temps = [
    {
      image: "/images/t1.jpeg",
      title: "AC repair or maintenance",
      description: "See hvac technicians near you",
    },
    {
      image: "/images/t2.jpeg",
      title: "Outdoor pest control",
      description: "See hvac technicians near you",
    },
    {
      image: "/images/t3.jpeg",
      title: "Water heater repair",
      description: "See water heater specialists near you",
    },
    {
      image: "/images/t4.jpeg",
      title: " Window AC installation",
      description: "See hvac technicians near you",
    },
    {
        image: "/images/t5.jpeg",
        title: "Furnace repair",
        description: "See heating specialists near you",
      },
      {
        image: "/images/t6.jpeg",
        title: "FWindow installation",
        description: "See window installers near you",
      },
      {
        image: "/images/t7.jpeg",
        title: "Duct and vent cleaning",
        description: "See duct and vent specialists near you",
      },
      {
        image: "/images/t8.jpeg",
        title: "Heat pump thermostat wiring",
        description: "See thermostat specialists near you",
      },
  ];
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
  ];
  const data={
    title :'The grass is always greener.',
    description: 'when you re stuck inside. Find a local pro for your lawn.',
    services :[
        {
          image: "/images/house1.png",
          overlayText: "Lights and switches",
          name: "Electrical repair",
          avgPrice: "$50"
        },
        {
          image: "/images/house2.png",
          overlayText: "All things water",
          name: "Emergency plumbing",
          avgPrice: "$160"
        },
        {
          image: "/images/house3.png",
          overlayText: "Cozy temps",
          name: "AC repair",
          avgPrice: "$500"
        }
      ]
}
const Essential = () => {
    return (
        <>
        <Essentialbanner
      backgroundUrl="/images/ess-home.webp"
      title="Essential Home Services"
      description="When you're a homeowner, something urgent always comes up. Roof need repair? Electrical emergency? Furnace on the fritz? Don't worry, you've come to the right place. Find a pro for any home repairs here."
      buttonText="Hire a Pro"
      onButtonClick={() => console.log("Hire a Pro button clicked!")}
    />
       <Household data={data} />
        <Filter />
        <Essentiallist heading="Kitchen concerns" cards={kitchen }/>
        <Essentiallist heading="Bathroom break-downs." cards={bathroom }/>
        <Essentiallist heading="Insects (and other unwelcome guests)." cards={insect }/>
        <Essentiallist heading="Temps that stay “just right." cards={temps }/>
        <Essentiallist heading="Outdoor upkeep." cards={outdoor }/>
        <Download />
        <Garden
  title="More for yard, garden and deck."
  description="Extra time inside = extra strain on the house. Find pros to help."
  buttonText="See Home Service"
  buttonLink="#"

  backgroundUrl="/images/grass.png"
/>


        </>
    );
};
export default Essential;