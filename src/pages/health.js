import React from "react";
import Essentialbanner from "../components/essential-banner/essential-banner";
import Household from "../components/household/household";
import Filter from "../components/filter/filter";
import Essentiallist from "../components/essential-list/essential-list";
import Download from "../components/download/download";
import Garden from "../components/garden/garden";


const data={
    title :'Keep your body strong.',
    description: '...and your motivation stronger. Find local  pros for health and wellness.',
    services :[
        {
          image: "/images/food.png",
          overlayText: "Be Kind",
          name: "Health and wellness coaching",
          avgPrice: "$75"
        },
        {
          image: "/images/gym.png",
          overlayText: "Get Strong",
          name: "Personal training",
          avgPrice: "$60"
        },
        {
          image: "/images/yoga.png",
          overlayText: "Find Balance",
          name: "Private yoga instruction",
          avgPrice: "$95"
        }
      ]
}
const fit = [
    {
      image: "/images/f1.jpeg",
      title: "Personal training",
      description: "See personal trainers near you",
    },
    {
      image: "/images/f2.jpeg",
      title: "Fitness equipment assembly",
      description: "See fitness equipment assemblers near you",
    },
    {
      image: "/images/f3.jpeg",
      title: "Nutritionist",
      description: "See nutritionists near you",
    },
    {
      image: "/images/f4.jpeg",
      title: "Health and wellness coaching",
      description: "See life coaches near you",
    },
    {
        image: "/images/f5.jpeg",
        title: "Cooking lessons",
        description: "See cooking instructors near you",
      },
      {
        image: "/images/f6.jpeg",
        title: "Physical therapy",
        description: "See physical therapists near you",
      },
      {
        image: "/images/f7.jpeg",
        title: "Fitness equipment installation",
        description: "See fitness equipment assemblers near you",
      },
      {
        image: "/images/f8.jpeg",
        title: "Exercise equipment repair",
        description: "See exercise equipment specialists near you",
      },
  ]
  const yoga = [
    {
      image: "/images/y1.jpeg",
      title: "Yoga lessons",
      description: "See yoga instructors near you",
    },
    {
      image: "/images/y2.jpeg",
      title: "Tai chi lessons",
      description: "See tai chi instructors near you",
    },
    {
      image: "/images/y3.jpeg",
      title: "Pilates lessons",
      description: "See pilates instructors near you",
    },
    {
      image: "/images/y4.jpeg",
      title: "Meditation instruction",
      description: "See meditation instructor near you",
    },
    {
        image: "/images/y5.jpeg",
        title: "Hypnotherapy",
        description: "See therapists near you",
      },
      {
        image: "/images/y6.jpeg",
        title: "Alternative healing",
        description: "See alternative healers near you",
      },
     
  ]
  const best = [
    {
      image: "/images/be1.jpeg",
      title: "Therapy and counseling",
      description: "See therapists near you",
    },
    {
      image: "/images/be2.jpeg",
      title: "Spiritual counseling",
      description: "See spiritual counselors near you",
    },
    {
      image: "/images/be3.jpeg",
      title: "Relationship counseling",
      description: "See counselors near you",
    },
    {
      image: "/images/be4.jpeg",
      title: "Life coaching",
      description: "See life coaching near you",
    },
    {
        image: "/images/be5.jpeg",
        title: "Meditation instruction",
      description: "See meditation instructor near you",
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
  ];
const Health = () => {
    return (
        <>
        <Essentialbanner
      backgroundUrl="/images/health.png"
      title="Healthy at <br /> home."
      description="Self-care comes in many forms. A good meal. Regular exercise. Or simply a day to yourself. Whether your wellness goals involve fitness, nutrition or relaxation, our pros are here to help with your health."
      buttonText="Hire a Pro"
      onButtonClick={() => console.log("Hire a Pro button clicked!")}
    />
       <Household data={data} />
       <Filter />
       <Essentiallist heading="Stay Fit" cards={fit }/>
       <Essentiallist heading="Mind and body." cards={yoga }/>
       <Essentiallist heading="Personal best." cards={best }/>
       <Essentiallist heading="Outside time." cards={outdoor }/>
        <Download />
        <Garden
  title="When home is the office (and a school, too)."
  description="We've got pros who can help you make it all work."
  buttonText="Browse more services"
  buttonLink="/"

  backgroundUrl="/images/pc.png"
/>


        </>
    );
};
export default Health;