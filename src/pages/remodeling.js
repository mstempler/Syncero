import React from "react";
import Essentialbanner from "../components/essential-banner/essential-banner";
import Household from "../components/household/household";
import Filter from "../components/filter/filter";
import Essentiallist from "../components/essential-list/essential-list";
import Project from "../components/project/project";
import Download from "../components/download/download";
import Garden from "../components/garden/garden";
const data={
  title :'Your new favorite spaces.',
  description: 'Find the pros you’ve always needed to create the rooms you’ve always wanted.',
  services :[
      {
        image: "/images/re0.png",
        overlayText: "Bathroom upgrade",
        name: "Bathroom upgrade",
        avgPrice: "$10000"
      },
      {
        image: "/images/re0.png",
        overlayText: "Interior painters",
        name: "WFH-worthy office",
        avgPrice: "$600"
      },
      {
        image: "/images/3re.png",
        overlayText: "Open concept",
        name: "Private yoga instruction",
        avgPrice: "$2500"
      }
    ]
  }
    const kremodeling = [
      {
        image: "/images/kr5.jpeg",
        title: "Kitchen Remodel",
        description: "See kitchen remodel contractors near you",
      },
      {
        image: "/images/kr6.jpeg",
        title: "General contracting",
        description: "See general contractors near you",
      },
      {
        image: "/images/kr7.jpeg",
        title: "Countertop installation",
        description: "See countertop installation professionals near you",
      },
      {
        image: "/images/kr8.jpeg",
        title: "Cabinet painting",
        description: "See cabinet painters near you",
      },
      {
          image: "/images/kr1.jpeg",
          title: "Tile installation and replacement",
          description: "See tile professionals near you",
        },
        {
          image: "/images/kr2.jpeg",
          title: "Interior design",
          description: "See Interior designers near you",
        },
        {
          image: "/images/kr3.jpeg",
          title: "Appliance installation",
          description: "See duct and vent specialists near you",
        },
        {
          image: "/images/kr4.jpeg",
          title: "Interior painting",
          description: "See Interior painting near you",
        },
        
    ]
    const bathremodeling = [
      {
        image: "/images/bre1.jpeg",
        title: "Bathroom remodeling",
        description: "See bathroom remodel contractors near you",
      },
      {
        image: "/images/bre2.jpeg",
        title: "Shower and bathtub installation or replacement",
        description: "See shower and bathtub specialists near you",
      },
      {
        image: "/images/bre3.jpeg",
        title: "Tile repair",
        description: "See tile professionals near you",
      },
      {
        image: "/images/bre4.jpeg",
        title: "Toilet installation or replacement",
        description: "See plumbers near you",
      },
      {
          image: "/images/bre5.jpeg",
          title: "Shower and bathtub repair",
          description: "See plumbers near you",
        },
        {
          image: "/images/bre6.jpeg",
          title: "Drywall installation and hanging",
          description: "See drywall installer near you",
        },
        {
          image: "/images/kr4.jpeg",
          title: "Interior painting",
          description: "See Interior painting near you",
        },
        {
          image: "/images/bre7.jpeg",
          title: "General contracting",
          description: "See General contracting near you",
        },
       
        
    ]
    const curb = [
      {
        image: "/images/cr1.jpeg",
        title: "Fence and gate repairs",
        description: "See fence repairmen near you",
      },
      {
        image: "/images/cr2.jpeg",
        title: "Landscaping",
        description: "See landscaper near you",
      },
      {
        image: "/images/cr3.jpeg",
        title: "Deck or porch remodel",
        description: "See Pros near you",
      },
      {
        image: "/images/cr4.jpeg",
        title: "Exterior painting",
        description: "See painter near you",
      },
      {
          image: "/images/cr5.jpeg",
          title: "Patio remodel or addition",
          description: "See pros near you",
        },
        {
          image: "/images/cr6.jpeg",
          title: "Siding installation",
          description: "See siding professionals near you",
        },
        {
          image: "/images/cr7.jpeg",
          title: "Outdoor landscaping and design",
          description: "See landscapers near you",
        },
        {
          image: "/images/cr8.jpeg",
          title: "Tree trimming and removal",
          description: "See tree trimmer near you",
        },
       
        
    ]
    const Energy = [
      {
        image: "/images/E1.jpeg",
        title: "Drywall installation and hanging",
        description: "See drywall installer near you",
      },
      {
        image: "/images/e2.jpeg",
        title: "Concrete installation or repair",
        description: "See concrete specialists near you",
      },
      {
        image: "/images/e3.jpeg",
        title: "Window installation",
        description: "See Window installation near you",
      },
      {
        image: "/images/e4.jpeg",
        title: "Brick or stone repair",
        description: "See masons near you",
      },
      {
          image: "/images/e5.jpeg",
          title: "Fan installation",
          description: "See Fan installaler near you",
        },
        {
          image: "/images/e6.jpeg",
          title: "Solar panel installation",
          description: "See Solar panel installaler near you",
        },
        {
          image: "/images/e7.jpeg",
          title: "Roof installation or replacement",
          description: "See Roof installaler near you",
        },
        {
          image: "/images/e8.jpeg",
          title: "HVAC technicians",
          description: "See heating technicians near you",
        },
       
        
    ] 
    const roi = [
      {
        image: "/images/ro1.jpeg",
        title: "Roof repair or maintenance",
        description: "See roofer near you",
      },
      {
        image: "/images/ro2.jpeg",
        title: "Floor installation or replacement",
        description: "See flooring installation near you",
      },
      {
        image: "/images/ro3.jpeg",
        title: "Door installation",
        description: "See pros near you",
      },
      {
        image: "/images/ro4.jpeg",
        title: "Hardwood floor refinishing",
        description: "See flooring professionals near you",
      },
      {
          image: "/images/ro5.jpeg",
          title: "Gutter installation or replacement",
          description: "See gutter installaler near you",
        },
        {
          image: "/images/ro6.jpeg",
          title: "Home security and alarms install",
          description: "See home security professionals near you",
        },
        {
          image: "/images/ro7.jpeg",
          title: "Closet remodel",
          description: "See closet installation professionals near you",
        },
        {
          image: "/images/ro8.jpeg",
          title: "Basement refinishing and remodeling",
          description: "See basement finishing contractors near you",
        },
       
        
    ] 
    const price = [
      {
        image: "/images/price0.webp", // Replace with your image paths
        title: "How much does a home remodel cost?",
      },
      {
        image: "/images/price2.webp",
        title: "How much does it cost to build a deck or porch?",
      },
      {
        image: "/images/price3.webp",
        title: "How much does a garage remodel cost?",
      },
      {
          image: "/images/price4.webp",
          title: "How much does it cost to install a patio?",
        },
        {
          image: "/images/price1.webp",
          title: "How much does a kitchen remodel cost?",
        },
        {
          image: "/images/price6.webp",
          title: "How much does it cost to finish an attic?",
        },
        {
          image: "/images/price7.webp",
          title: "How much does a basement remodel cost?",
        },
        {
          image: "/images/price8.webp",
          title: "How much does a closet remodel cost?",
        },
    ];
    const inspiration = [
      {
        image: "/images/is1.webp", // Replace with your image paths
        title: "How much does a home remodel cost?",
      },
      {
        image: "/images/is2.webp",
        title: "How much does it cost to build a deck or porch?",
      },
      {
        image: "/images/is3.webp",
        title: "How much does a garage remodel cost?",
      },
      {
          image: "/images/is4.webp",
          title: "How much does it cost to install a patio?",
        },
        {
          image: "/images/is1.webp",
          title: "How much does a kitchen remodel cost?",
        },
        {
          image: "/images/is6.webp",
          title: "How much does it cost to finish an attic?",
        },
        {
          image: "/images/is7.webp",
          title: "How much does a basement remodel cost?",
        },
        {
          image: "/images/is8.webp",
          title: "How much does a closet remodel cost?",
        },
    ];
const Remodeling = () => {

   
    
    return (
        <>
          <Essentialbanner
      backgroundUrl="/images/remodeling.png"
     title="  Home <br />Remodeling."         
      description="It's nice to follow your dreams. Especially if they involve a new kitchen design, or ideas for a brand new bathroom. Find any contractor you need and start your dream renovation project today."
      buttonText="Hire a Pro"
      onButtonClick={() => console.log("Hire a Pro button clicked!")}
    />
     <Household data={data} />
     <Filter />
     <Essentiallist heading="Monthly and seasonal maintenance." subh="Painting the kitchen cabinets, installing new countertops, choosing the right appliances — there’s a lot that goes into a kitchen remodel. Find pros who can help you design the kitchen you really want." cards={kremodeling }/>
     <Essentiallist heading="Big and small bathroom remodels." subh="Wish you had a luxurious bath to soak in after a long day? Thinking about adding water-resistant flooring? Whether you’re designing a half bath or renovating your master bathroom, here are some local pros who can bring your vision to life." cards={bathremodeling }/>
     <Essentiallist heading="Curb appeal boosters." subh="Be the talk of the town — or at least the neighborhood — by improving your home’s exterior and landscaping. These pros can help you up your home’s curb appeal." cards={curb }/>
     <Essentiallist heading="Easy energy upgrades." subh="Did you know there are simple home projects that can lower your heating and cooling costs? Find local pros who can help you conserve energy all year-round." cards={Energy }/>
     <Essentiallist heading="Home projects with a ROI." subh="If you plan to sell your home one day, it’s a great idea to invest in a few upgrades before you put it on the market. Start your search for pros who can add to your home’s value." cards={roi }/>
     <Project heading="Price out your home remodeling projects."  subheading="From kitchen renovations to bathroom remodels, our guides let you gather cost estimates for your next home improvement project.How much does a home remodel cost? How much does a home remodel cost?" slides={price} />
     <Project heading="Get inspiration and tips for your home projects."  subheading="Check out our project guides to get expert advice and ideas on how to improve your home." slides={inspiration} />
      <Download />
      <Garden
  title="Just need a cleaner?"
  description="Just need a cleaner or repair person? For projects that have a few less steps, check out our home maintenance and repair services page."
  buttonText="Go to home maintenance"
  buttonLink="/"

  backgroundUrl="/images/worker.png"
/>
    </>
    );
    };
    export default Remodeling;