import { Link } from "react-router-dom";
import Button from "./Button";

const Hero = () => {

   return (
      <section className="hero">
         <div className="hero-img">
            <div className="hero-bg">
               <span>
                  Modern <br />
                  Art Gallery
               </span>
            </div>
            <div className="image-container relative">
               <span>
                  Modern <br />
                  Art Gallery
               </span>
               <div className="w-[450px] absolute top-[15rem] right-[-20rem] max-xl:top-[30rem] max-xl:right-[-10rem] max-lg:top-[0] max-lg:left-[0rem]">
                  <p className="mb-[3rem] max-xl:mb-[2rem] text-base text-grey text-wrap">
                     The arts in the collection of the Modern Art Gallery all
                     started from a spark of inspiration. Will these pieces
                     inspire you? Visit us and find out.
                  </p>
                  <Link to="/about">
                     <Button text="Our Location" type="primary" />
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
