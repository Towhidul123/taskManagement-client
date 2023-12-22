import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div id="banner" className=" carousel w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] object-cover relative">
            <div id="slide1" className="relative carousel-item w-full h-full">
                <img src="Banner.jpg" className="w-full h-full" />
               <Link to='/task'>
               <button className="btn absolute bg-[#635fc7] py-2 px-4 rounded-full text-white text-lg font-semibold hover:opacity-80 duration-200" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Lets Explore</button>
           
               </Link>
               
            </div>
        </div>
    );
};

export default Banner;
