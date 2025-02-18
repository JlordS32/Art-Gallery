import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Showcase from "../components/Showcase";

const Home = () => {
   return (
      <main>
         <Hero />
         <Showcase />
         <Footer className="text-white mt-[15rem]" />
      </main>
   );
};

export default Home;
