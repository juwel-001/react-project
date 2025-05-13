import IconOne from '../Svg/IconOne';
import IconTwo from '../Svg/IconTwo';
import IconThree from '../Svg/IconThree';
import IconFour from '../Svg/IconFour';
import ChildRight from './ChildRight';

const data = [
    {
       icon: <IconOne />,
       title:"99.99% uptime",
       description: "For Landwind, with zero maintenance downtime"
    },

    {
        icon: <IconTwo />,
       title:"600M+ Users",
       description: "Trusted by over 600 milion users around the world"
    },

    {

        icon: <IconThree />,
       title:"100+ countries",
       description: "Have used Landwind to create functional websites"
    },
    {
        icon: <IconFour />,
       title:"5+ Million",
       description: "Transactions per day"

    }
]

export default function DataRight(){
    return (
        <>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
        {data.map((value,index)=>(
            <ChildRight key={index} {...value} />

        ))}
        </div>
        
        </>
    );
}