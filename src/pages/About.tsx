import { Link } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";

const About = () => {
   return (
      <main className="relative">
         <section>
            <div className="map">
               <Link to="/">
                  <Button
                     className="pl-[12rem]"
                     text="Back to home"
                     type="secondary"
                  />
               </Link>
            </div>
         </section>
         <section>
            <div className="flex bg-black py-[10rem] px-[12.5rem]">
               <div className="w-[50%]">
                  <h1 className="text-white">
                     Our <br /> Location
                  </h1>
               </div>
               <div className="w-[50%] text-white flex flex-col gap-10">
                  <h3 className="text-gold">99 King Street</h3>
                  <div className="address">
                     <p>Newport</p>
                     <p>RI 02840</p>
                     <p>United States of America</p>
                  </div>
                  <p>
                     Our newly opened gallery is located near the Edward King
                     House on 99 King Street, the Modern Art Gallery is free to
                     all visitors and open seven days a week from 8am to 9pm.
                  </p>
               </div>
            </div>
         </section>
         <Footer className="bg-gold text-black" />
      </main>
   );
};

export default About;
