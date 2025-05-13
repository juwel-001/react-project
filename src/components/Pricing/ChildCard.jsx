import MyButton from "../Button/MyButton";
import TikMark from "../Svg/TikMark";

export default function ChilCard({title,description,price,features}) {
  return (
   <>
    <div className="flex flex-col justify-between h-full max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
       {description}
      </p>
      <div className="flex items-baseline justify-center my-8">
        <span className="mr-2 text-5xl font-extrabold">${price}</span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>

      <ul role="list" className="mb-8 space-y-4 text-left">
        {features.map((each,index)=>(
            <li className="flex items-center space-x-3" key={index}>
          <TikMark />
          <span>{each}</span>
        </li>
        ))}

       
      </ul>
      <div className="w-full">
        <MyButton name ="Get Started" customClassName = " w-full block" />
      </div>
    </div>
   </>
  );
}
