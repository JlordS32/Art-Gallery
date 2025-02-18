const Showcase = () => {
   return (
      <section className="w-full max-w-[1440px] px-[7.5rem] mx-auto mt-[8.5rem] max-lg:px-[1.5rem]">
         <div className="flex justify-between mb-[1.4rem]">
            <div className="my-[2.8rem] w-[35%] mr-[5rem]">
               <h2 className="max-lg:text-[50px] max-lg:leading-[45px]">
                  Your day at the gallery
               </h2>
               <p className="w-full mt-[1.45rem] text-base max-xl:text-sm">
                  Wander through our distinct collections and find new insights
                  about our artists. Dive into the details of their creative
                  process.
               </p>
            </div>
            <div>
               <img className="h-full" src="images/image-1.png" alt="Display Image 1" />
            </div>
         </div>
         <div className="flex gap-[1.4rem]">
            <div className="w-full">
               <img
                  className="w-full h-full"
                  src="images/image-2.png"
                  alt="Display Image 2"
               />
            </div>
            <div className="flex flex-col gap-[1.4rem]">
               <div className="w-full">
                  <img
                     className="w-full"
                     src="images/image-3.png"
                     alt="Display Image 3"
                  />
               </div>
               <div className="flex items-start justify-center flex-col bg-black text-white flex-1 px-[3rem] py-[85px] gap-[1.45rem]">
                  <h2 className="text-white justify-self-start">
                     COME & BE <br /> INSPIRED
                  </h2>
                  <p>
                     We’re excited to welcome you to our gallery and see how our
                     collections influence you.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Showcase;
