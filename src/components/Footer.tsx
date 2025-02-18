import {
   faGithub,
   faInstagram,
   faSquareFacebook,
   faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type FooterProps = {
   className?: string;
};

const Footer = ({ className = "" }) => {
   return (
      <footer
         className={`flex bg-black text-white relative bottom-0 p-[4rem] gap-[7rem] ${className}`}
      >
         <h4 className="">
            Modern <br /> Art Gallery
         </h4>
         <p className="text-sm flex-1">
            The Modern Art Gallery is free to all visitors and open seven days a
            week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
         </p>
         <div className="flex flex-col">
            <div className="flex gap-[1.5rem]">
               <FontAwesomeIcon
                  className="hover:text-gold cursor-pointer"
                  icon={faSquareFacebook}
               />
               <FontAwesomeIcon
                  className="hover:text-gold cursor-pointer"
                  icon={faInstagram}
               />
               <FontAwesomeIcon
                  className="hover:text-gold cursor-pointer"
                  icon={faTwitter}
               />
            </div>

            <div className="pt-[2rem]">
               Coded by:{" "}
               <a href="https://github.com/JlordS32">
                  <FontAwesomeIcon icon={faGithub} /> Jaylou Rasonabe
               </a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
