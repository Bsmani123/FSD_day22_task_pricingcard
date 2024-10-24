import React from "react";
import Pricing from "./Pricing";

function App() {
  const pricing = [
    {
      name: "FREE",
      price: "0",
      currency:"$",
      pricePer: "month",
      features:[
        {
          name:"Single User",
          access: true,
        },

        {
          name: "5GB storage",
          access: true,
        },
        {
          name: "Unlimited Public Project",
          access: true,
        },
        {
          name: "Community Access",
          access: true,
        },


        {
          name: "Dedicated",
          access: false,
        },
        {
          name: "FreeSubmision",
          access: false,
        },
          
        {  
          name: "isMonthlyReport",
          access: false,
        }
      ], 
    },

    {
      name: "PLUS",
      price: "9",
      currency:"$",
      pricePer: "month",
      features:[
        {
          name:"Single User",
          access: true,
        },

        {
          name: "5GB storage",
          access: true,
        },
        {
          name: "Unlimited Public Project",
          access: true,
        },
        {
          name: "Community Access",
          access: true,
        },
        {
          name: "Dedicated",
          access: true,
        },
        {
          name: "FreeSubmision",
          access: true,
        },
          
        {  
          name: "MonthlyReport",
          access: false,
        }
      ],
    },

    {
      name: "PRO",
      price: "49",
      currency:"$",
      pricePer: "month",
      features:[
        {
          name:"Single User",
          access: true,
        },

        {
          name: "5GB storage",
          access: true,
        },
        {
          name: "Unlimited Public Project",
          access: true,
        },
        {
          name: "Community Access",
          access: true,
        },


        {
          name: "Dedicated",
          access: true,
        },
        {
          name: "FreeSubmision",
          access: true,
        },
          
        {  
          name: "isMonthlyReport",
          access: true,
        }
      ],
    },
    
  ];

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
     
          {pricing.map(price => <Pricing {...price}/>)}
      
       </div>
     </div>
</section>
  )
}

export default App;
