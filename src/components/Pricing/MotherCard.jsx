import ChilCard from "./ChildCard";

const plans = [
    {
        title:"Starter",
        description: "Best option for personal use & for your next project.",
        price: 29,
        features:[
            "Individual configuration",
            "No setup, or hidden fees",
            "Premium support: 6 months",
            "Free updates: 6 months"
        ]

    },
    {
        title:"Company",
        description: "Relevant for multiple users, extended & premium support.",
        price: 99,
        features:[
            "Individual configuration",
            "No setup, or hidden fees",
            "Team size: 10 developers",
            "Premium support: 24 months",
            "Premium support: 24 months"
        ]

    },

    {
        title:"Enterprise",
        description: "Best for large scale uses and extended redistribution rights.",
        price: 499,
        features:[
            "Individual configuration",
            "No setup, or hidden fees",
            "Team size: 100+ developers",
            "Premium support: 36 months",
            "Premium support: 36 months"
        ]

    }
];

export default function MotherCard() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Landwind we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>

        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

      {plans.map((value,index)=>(
       <div  key={index} className= "h-full">

        <ChilCard  {...value} />
       </div>
      ))}


        </div>
      </div>
    </section>
  );
}
