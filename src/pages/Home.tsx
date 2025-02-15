import Button from "../components/Button";

const Home = () => {
   return (
      <main>
         <section className="hero">
            <div className="hero-img">
               <div className="hero-bg">
                  <span>
                     Modern <br />
                     Art Gallery
                  </span>
               </div>
               <div className="image-container">
                  <span>
                     Modern <br />
                     Art Gallery
                  </span>
               </div>
            </div>
            <div className="w-[450px] absolute top-[18rem] right-[10rem]">
               <p className="pb-[3rem] text-base">
                  The arts in the collection of the Modern Art Gallery all
                  started from a spark of inspiration. Will these pieces inspire
                  you? Visit us and find out.
               </p>
               <Button text="Our Location" type="primary" />
            </div>
         </section>
      </main>
   );
};

export default Home;
