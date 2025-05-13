import Image from '../../assets/hero.png';

export default function HeroImageDiv(){

    
    return (
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src={Image} alt="hero image" />
    </div>
    );
}