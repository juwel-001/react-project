import Airbnb from "./Airbnb";
import Google from "./Google";
import Mailchimp from "./Mailchimp";
import Mashable from "./Mashable";
import Mircosoft from "./Microsoft";
import Sportify from "./Sportify";

export default function Companies(){
    return (
       <section class="bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
            <div
                class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                <a href="#" class="flex items-center lg:justify-center">
                    <Airbnb />
                    </a>

                     <a href="#" class="flex items-center lg:justify-center">
                    <Google />
                    </a>

                     <a href="#" class="flex items-center lg:justify-center">
                   <Mircosoft />
                    </a>

                     <a href="#" class="flex items-center lg:justify-center">
                    <Sportify />
                    </a>

                     <a href="#" class="flex items-center lg:justify-center">
                    <Mailchimp />
                    </a>

                     <a href="#" class="flex items-center lg:justify-center">
                    <Mashable />
                    </a>
            </div>
            </div>
          </section>  
    );
}