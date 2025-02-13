type ButtonProps = {
   text?: string;
   type: "primary" | "secondary";
};

const Button = ({ text, type = "primary" }: ButtonProps) => {
   return (
      <button className="font-heading tracking-[0.17rem] text-white group">
         <div
            className={`flex-center ${
               type === "primary" ? "bg-black" : "bg-gold"
            } ${
               type === "primary"
                  ? "group-hover:bg-gold"
                  : "group-hover:bg-black"
            } duration-300`}
         >
            {type === "secondary" && (
               <div className="bg-black group-hover:bg-gold">
                  <img src="/public/images/arrow_flip.svg" alt="Arrow" />
               </div>
            )}
            <span className="px-[1.5rem]">{text}</span>
            {type === "primary" && (
               <div className="bg-gold group-hover:bg-black">
                  <img src="/public/images/arrow.svg" alt="Arrow" />
               </div>
            )}
         </div>
      </button>
   );
};

export default Button;
