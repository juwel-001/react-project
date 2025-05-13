import SharedChildTwo from "./SharedChildTwo";

const info = [

      {
    title: "Work with tools you already use",
    desciption:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease. ",
    subtext:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
    items: [
      "Dynamic reports and dashboards",
      "Templates for everyone",
      "Development workflow",
      "Limitless business automation",
      "Knowledge management",
    ],
  },
]


export default function SharedDataTwo(){
    return (
        <>
         {/* <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6"> */}
                 
        
                    {info.map((value,index)=>(
        
                        <div key = {index}>
                           <SharedChildTwo {...value} />
                        </div>
                    ))}
                   
        
                   
                    {/* </div> */}
        </>
    );
}