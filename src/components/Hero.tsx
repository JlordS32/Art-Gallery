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
               <div className="w-[450px] absolute top-[15rem] right-[-20rem]">
                  <p className="pb-[3rem] text-base text-grey text-wrap">
                     The arts in the collection of the Modern Art Gallery all
                     started from a spark of inspiration. Will these pieces
                     inspire you? Visit us and find out.
                  </p>
                  <Button text="Our Location" type="primary" />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
